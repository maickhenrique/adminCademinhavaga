import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer, useState } from 'react';

// third-party
import { Chance } from 'chance';
import jwtDecode from 'jwt-decode';

// reducer - state management
import { LOGIN, LOGOUT } from 'store/reducers/actions';
import authReducer from 'store/reducers/auth';

// project-imports
import Loader from 'components/Loader';
import axios from 'utils/axios';

const chance = new Chance();

// constant
const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const verifyToken = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded = jwtDecode(serviceToken);
  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem('serviceToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //

const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [temporaryUserData, setTemporaryUserData] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = localStorage.getItem('serviceToken');
        if (serviceToken && verifyToken(serviceToken)) {
          setSession(serviceToken);
          const response = await axios.get('/api/account/me');
          const { user } = response.data;

          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user
            }
          });
        } else {
          dispatch({
            type: LOGOUT
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT
        });
      }
    };

    init();
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('/api/account/entrar', { email, password });
    const { serviceToken, user } = response.data;
    setSession(serviceToken);
    dispatch({
      type: LOGIN,
      payload: {
        isLoggedIn: true,
        user
      }
    });
  };

  const register = async (email, senha) => {
    try {
      // Lógica de registro do usuário
      const id = chance.bb_pin();
      const response = await axios.post('/api/account/cadastrar', { id, email, senha });
      const { user } = response.data;

      // Armazenar temporariamente os dados do usuário
      setTemporaryUserData({id, email, senha });

      // Retornar os dados do usuário completo após o registro
      return user;
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      throw error;
    }
  };


  const updateProfile = async (nome, sobrenome, data_nascimento, genero, pais, estado, cidade) => {
    try {
      // Enviar dados para a API de atualização de perfil
      const response = await axios.put(`/api/account/informacoes-pessoais`, {
        ...temporaryUserData,
        nome,
        sobrenome,
        data_nascimento,
        genero,
        pais,
        estado,
        cidade
      });

      // Lidar com a resposta, se necessário
      console.log('Perfil atualizado com sucesso:', response.data);

      // Limpar os dados temporários após a conclusão bem-sucedida
      // setTemporaryUserData(null);
    } catch (error) {
      console.error('Erro ao atualizar perfil do usuário:', error);
      throw error;
    }
};

const registerInfoProfessional = async (nome_cargo, empresa, nome_senioridade) => {
  try {
    if (temporaryUserData && temporaryUserData.id) {
      // Enviar dados para a API de atualização de perfil
      const response = await axios.post(`/api/account/informacao-profissional`, {
        ...temporaryUserData,
        nome_cargo, 
        nome_senioridade,
        empresa,
      });

      // Lidar com a resposta, se necessário
      console.log('Informações de experiência profissional cadastradas com sucesso:', response.data);
      setTemporaryUserData(null);
    } else {
      console.error('Erro ao cadastrar informações de experiência profissional: temporaryUserData ou temporaryUserData.idUsuario é nulo');
    }
  } catch (error) {
    console.error('Erro ao cadastrar informações de experiência profissional:', error);
    throw error;
  }
};

// const registerInfoProfessional = async (nome_cargo, nome_senioridade, empresa, nome_modelo_contrato, nome_modelo_trabalho, inicio_experiencia, fim_experiencia, emprego_atual) => {
//   try {
//     // Enviar dados para a API de atualização de perfil
//     const response = await axios.post(`/api/account/informacao-profissional`, {
//       nome_cargo, 
//       nome_senioridade,
//       empresa, 
//       nome_modelo_contrato, 
//       nome_modelo_trabalho, 
//       inicio_experiencia,
//       fim_experiencia, 
//       emprego_atual
//     });

//     // Lidar com a resposta, se necessário
//     console.log('Informações de experiência profissional cadastradas com sucesso:', response.data);
//     console.log("opa", response);
//   } catch (error) {
//     console.error('Erro ao cadastrar informações de experiência profissional:', error);
//     throw error;
//   }
// };
  
  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
  };

  const resetPassword = async () => {};

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return <JWTContext.Provider value={{ ...state, login, logout, register, resetPassword, updateProfile, registerInfoProfessional }}>{children}</JWTContext.Provider>;
};

JWTProvider.propTypes = {
  children: PropTypes.node
};

export default JWTContext;
