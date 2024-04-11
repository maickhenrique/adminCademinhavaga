// Importar os módulos necessários
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const e = require('express');

// Criar uma instância do Express
const app = express();
app.use(cors()); // Habilita o CORS para todas as origens
// Iniciar o servidor
const port = 3001;

// Configurar o body-parser para receber dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar a conexão com o banco de dados MySQL
// const connection = mysql.createConnection({
//   host: 'uxhub-db.cjc62ueo0ez4.us-east-2.rds.amazonaws.com',
//   user: 'uxhubadmin',
//   password: 'Iron275!',
//   database: 'uxhubdb',
// });

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Maick26!',
  database: 'uxhubdb',
});

// Estabelecer conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem sucedida com o banco de dados!');
});

// Rota para cadastrar um novo usuário
app.post('/api/account/register', (req, res) => {
  const {email, senha } = req.body;

  // Query SQL para inserir um novo usuário no banco de dados
  const sql = `INSERT INTO usuarios (email, senha) VALUES (?, ?)`;

  // Executar a query SQL
  connection.query(sql, [email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar o usuário:', err);
      res.status(500).json({ message: 'Erro ao cadastrar o usuário' });
      return;
    }
    console.log('Usuário cadastrado com sucesso!');
    res.status(201).json({ message: 'Usuário cadastrado com sucesso', email }); // Retorna o email do usuário cadastrado
  });
});

app.put('/api/account/informacoes-pessoais', (req, res) => {
  const { nome, sobrenome, data_nascimento, genero, pais, estado, cidade, email } = req.body;
  
  // Query SQL para atualizar as informações pessoais do usuário no banco de dados
  const sql = `
    UPDATE usuarios 
    SET 
      NOME = ?,
      SOBRENOME = ?,
      DATA_NASCIMENTO = ?,
      GENERO = ?,
      PAIS = ?,
      ESTADO = ?,
      CIDADE = ?
    WHERE EMAIL = ?`;

  // Executar a query SQL
  connection.query(sql, [ nome, sobrenome, data_nascimento, genero, pais, estado, cidade, email], (err, result) => {
    console.log("EMail server", email);
    if (err) {
      console.error('Erro ao atualizar informações pessoais do usuário:', err);
      res.status(500).json({ message: 'Erro ao atualizar informações pessoais do usuário' });
      return;
    }
    console.log('Informações pessoais do usuário atualizadas com sucesso!');
    res.status(200).json({ message: 'Informações pessoais do usuário atualizadas com sucesso' });
  });
});

// // Rota para cadastrar informações profissionais
// app.post('/api/account/informacao-profissional', (req, res) => {

//   const {
//     nome_cargo,
//     nome_senioridade,
//     empresa,
//     nome_modelo_contrato,
//     nome_modelo_trabalho,
//     inicio_experiencia,
//     fim_experiencia,
//     emprego_atual
//   } = req.body;

//   console.log("O que vemmmmmmmm", req.body);
//   // Iniciar uma transação
//   connection.beginTransaction((err) => {
//     if (err) {
//       console.error('Erro ao iniciar a transação:', err);
//       return res.status(500).send('Erro ao cadastrar informações profissionais');
//     }

//     // Inserir dados na tabela EXPERIENCIA_PROFISSIONAL
//     const sqlInsertExperiencia = `INSERT INTO EXPERIENCIA_PROFISSIONAL 
//                                   (ID_USUARIO, NOME_CARGO, NOME_SENIORIDADE, EMPRESA, NOME_MODELO_CONTRATO, NOME_MODELO_TRABALHO, INICIO_EXPERIENCIA, FIM_EXPERIENCIA, EMPREGO_ATUAL) 
//                                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
//     // Valores para inserção na tabela EXPERIENCIA_PROFISSIONAL
//     const valuesExperiencia = [req.usuarioId, nome_cargo, nome_senioridade, empresa, nome_modelo_contrato, nome_modelo_trabalho, inicio_experiencia, fim_experiencia, emprego_atual];

//     // Executar a query de inserção na tabela EXPERIENCIA_PROFISSIONAL
//     connection.query(sqlInsertExperiencia, valuesExperiencia, (err, result) => {
//       if (err) {
//         console.error('Erro ao cadastrar informações profissionais:', err);
//         // Reverter a transação em caso de erro
//         connection.rollback(() => {
//           console.error('Transação revertida devido a um erro');
//           res.status(500).send('Erro ao cadastrar informações profissionais');
//         });
//       } else {
//         console.log('Informações profissionais cadastradas com sucesso');

//         // Commit da transação
//         connection.commit((err) => {
//           if (err) {
//             console.error('Erro ao confirmar a transação:', err);
//             // Reverter a transação em caso de erro
//             connection.rollback(() => {
//               console.error('Transação revertida devido a um erro');
//               res.status(500).send('Erro ao cadastrar informações profissionais');
//             });
//           } else {
//             console.log('Transação confirmada');
//             res.status(200).send('Informações profissionais cadastradas com sucesso');
//           }
//         });
//         console.log("O que vemmmmmmmm", valuesExperiencia);
//       }
//     });
//   });
// });


// Rota para cadastrar informações profissionais
app.post('/api/account/informacao-profissional', (req, res) => {

  const dadosFormulario = req.body;
 
  // Iniciar uma transação
  connection.beginTransaction((err) => {
    if (err) {
      console.error('Erro ao iniciar a transação:', err);
      return res.status(500).send('Erro ao cadastrar informações profissionais');
    }

    // Inserir dados na tabela CARGOS
    const sqlInsertCargo = 'INSERT INTO CARGOS (NOME_CARGO, DESCRICAO_CARGO) VALUES (?, ?)';
    const valuesCargo = [dadosFormulario.nome_cargo, dadosFormulario.descricao_cargo];

  connection.query(sqlInsertCargo, valuesCargo, (err, resultCargo) => {
    if (err) {
      console.error('Erro ao inserir dados na tabela CARGOS:', err);
      return connection.rollback(() => {
        res.status(500).send('Erro ao cadastrar informações profissionais');
      });
    }

    const idCargo = resultCargo.insertId;

    // Inserir dados na tabela SENIORIDADES
    const sqlInsertSenioridade = 'INSERT INTO SENIORIDADES (NOME_SENIORIDADE, DESCRICAO_SENIORIDADE) VALUES (?, ?)';
    const valuesSenioridade = [dadosFormulario.nome_senioridade, dadosFormulario.descricao_senioridade];

    connection.query(sqlInsertSenioridade, valuesSenioridade, (err, resultSenioridade) => {
      if (err) {
        console.error('Erro ao inserir dados na tabela SENIORIDADES:', err);
        return connection.rollback(() => {
          res.status(500).send('Erro ao cadastrar informações profissionais');
        });
      }

      const idSenioridade = resultSenioridade.insertId;

      // Continue inserindo nas outras tabelas (MODELO_DE_CONTRATO, MODELO_DE_TRABALHO)

      // Finalmente, insira os dados na tabela EXPERIENCIA_PROFISSIONAL
      const sqlInsertExperiencia = `
        INSERT INTO EXPERIENCIA_PROFISSIONAL 
        (ID_USUARIO, NOME_CARGO, NOME_SENIORIDADE, EMPRESA, NOME_MODELO_CONTRATO, NOME_MODELO_TRABALHO, SALARIO_BASE, TOTAL_VR_VA, PLR_OU_BONUS, EMPREGO_ATUAL, INICIO_EXPERIENCIA, FIM_EXPERIENCIA) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const valuesExperiencia = [
        dadosFormulario.idUsuario,
        idCargo,
        idSenioridade,
        dadosFormulario.empresa,
        // dadosFormulario.nomeModeloContrato,
        // dadosFormulario.nomeModeloTrabalho,
        // dadosFormulario.salarioBase,
        // dadosFormulario.totalVrVa,
        // dadosFormulario.plrOuBonus,
        // dadosFormulario.empregoAtual,
        // dadosFormulario.inicioExperiencia,
        // dadosFormulario.fimExperiencia
      ];
      connection.query(sqlInsertExperiencia, valuesExperiencia, (err, resultExperiencia) => {
        if (err) {
          console.error('Erro ao inserir dados na tabela EXPERIENCIA_PROFISSIONAL:', err);
          return connection.rollback(() => {
            res.status(500).send('Erro ao cadastrar informações profissionais');
          });
        }

        // Commit da transação
        connection.commit((err) => {
          if (err) {
            console.error('Erro ao confirmar a transação:', err);
            return connection.rollback(() => {
              res.status(500).send('Erro ao cadastrar informações profissionais');
            });
          }

          console.log('Informações profissionais cadastradas com sucesso');
          res.status(200).send('Informações profissionais cadastradas com sucesso');
          });
        });
      });
    });
  });
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
