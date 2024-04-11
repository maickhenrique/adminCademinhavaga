// import { useState, useEffect } from 'react';
// import countries from './countries.js';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
    Grid,
    Typography,
    OutlinedInput,
    // TextField,
    Stack,
    // Autocomplete,
    // Box,
    Button,
    Divider,
} from '@mui/material';

import * as yup from 'yup';
import { Formik } from 'formik';
// import { parseISO } from 'date-fns'; // Importe a função parseISO do date-fns

import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';

import { openSnackbar } from 'store/reducers/snackbar';
import { dispatch } from 'store';

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import AnimateButton from 'components/@extended/AnimateButton';
import './style.css';

const AuthPersonalDetails = () => {
    // const selectedCountry = countries.find(country => country.label === 'Brasil');
    // const [states, setStates] = useState([]);
    // const [cities, setCities] = useState([]);
    // const [selectedState, setSelectedState] = useState('');
    const { updateProfile } = useAuth();
    const scriptedRef = useScriptRef();
    const navigate = useNavigate();

    // const handleChange = (newValue) => {
    //     setValue(newValue);
    // };

    // useEffect(() => {
    //     axios
    //         .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    //         .then((response) => {
    //             const statesData = response.data.map((state) => ({
    //                 id: state.id,
    //                 nome: state.nome,
    //                 sigla: state.sigla,
    //             }));
    //             setStates(statesData);
    //         })
    //         .catch((error) => {
    //             console.error('Erro ao buscar estados:', error);
    //         });
    // }, []);

    // const handleStateChange = (event, value) => {
    //     if (value) {
    //         setSelectedState(value.sigla);
    //         setCities([]);

    //         axios
    //             .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${value.sigla}/municipios`)
    //             .then((response) => {
    //                 const citiesData = response.data.map((city) => ({
    //                     id: city.id,
    //                     nome: city.nome,
    //                 }));
    //                 setCities(citiesData);
    //             })
    //             .catch((error) => {
    //                 console.error('Erro ao buscar cidades:', error);
    //             });
    //     }
    // }

    return (
        <>
            <Formik
                initialValues={{
                    nome: '',
                    sobrenome: '',
                    data_nascimento: '',
                    genero: '',
                    pais: '',
                    estado: '',
                    cidade: '',
                    submit: null,
                }}
                validationSchema={yup.object().shape({
                    nome: yup.string().required('Este campo é obrigatório'),
                    sobrenome: yup.string().required('Este campo é obrigatório'),
                    data_nascimento: yup.string().required('Informe a data de nascimento'),
                    genero: yup.string().required('Este campo é obrigatório'),
                    pais: yup.string().required('Selecione o país'),
                    estado: yup.string().required('Selecione o estado'),
                    cidade: yup.string().required('Selecione a cidade'),
                })}
                
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        await updateProfile( 
                            values.nome,
                            values.sobrenome,
                            values.data_nascimento,
                            values.genero,
                            values.pais,
                            values.estado,
                            values.cidade,
                        );
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                            dispatch(
                                openSnackbar({
                                    open: true,
                                    message: 'Seu registro foi concluído com sucesso.',
                                    variant: 'alert',
                                    alert: {
                                        color: 'success',
                                    },
                                    close: false,
                                })
                            );
                            setTimeout(() => {
                                navigate('/informacao-profissional', { replace: true });
                            }, 1500);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}>

                {({ handleBlur, handleSubmit, isSubmitting, values, setFieldValue  }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2} alignItems="center" className="grid-details">
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <Typography variant="h6" fontWeightRegular color="secondary">
                                        Nome*
                                    </Typography>
                                    <OutlinedInput
                                        onBlur={handleBlur}
                                        id="nome"
                                        onChange={(e) => setFieldValue('nome', e.target.value)} 
                                        fullWidth
                                        type="text"
                                        placeholder="Digite seu nome"
                                        name="nome"
                                        value={values.nome}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <Typography variant="h6" fontWeightRegular color="secondary">
                                        Sobrenome*
                                    </Typography>
                                    <OutlinedInput
                                        fullWidth
                                        type="text"
                                        placeholder="Digite seu sobrenome"
                                        onBlur={handleBlur}
                                        id="sobrenome"
                                        name="sobrenome"
                                        onChange={(e) => setFieldValue('sobrenome', e.target.value)} 
                                        value={values.sobrenome}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <Typography variant="h6" fontWeightRegular color="secondary">
                                        Data de nascimento*
                                    </Typography>
                                    <OutlinedInput
                                        fullWidth
                                        type="text"
                                        placeholder="MM/DD/AAAA"
                                        onBlur={handleBlur}
                                        id="data_nascimento"
                                        name="data_nascimento"
                                        onChange={(e) => setFieldValue('data_nascimento', e.target.value)} 
                                        value={values.data_nascimento}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <Typography variant="h6" fontWeightRegular color="secondary">
                                        Sexo*
                                    </Typography>
                                    <OutlinedInput
                                        fullWidth
                                        type="text"
                                        placeholder="Informe seu gênero"
                                        onBlur={handleBlur}
                                        id="genero"
                                        name="genero"
                                        onChange={(e) => setFieldValue('genero', e.target.value)} 
                                        value={values.genero}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <Typography variant="h6" fontWeightRegular color="secondary">
                                        País*
                                    </Typography>
                                    <OutlinedInput
                                        fullWidth
                                        type="text"
                                        placeholder="Digite seu país de origem"
                                        onBlur={handleBlur}
                                        id="pais"
                                        name="pais"
                                        onChange={(e) => setFieldValue('pais', e.target.value)} 
                                        value={values.pais}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <Typography variant="h6" fontWeightRegular color="secondary">
                                        Estado*
                                    </Typography>
                                    <OutlinedInput
                                        fullWidth
                                        type="text"
                                        placeholder="Digite o estado em que nasceu"
                                        onBlur={handleBlur}
                                        id="estado"
                                        name="estado"
                                        onChange={(e) => setFieldValue('estado', e.target.value)} 
                                        value={values.estado}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <Typography variant="h6" fontWeightRegular color="secondary">
                                        Cidade*
                                    </Typography>
                                    <OutlinedInput
                                        fullWidth
                                        type="text"
                                        placeholder="Digite a cidade em que nasceu"
                                        onBlur={handleBlur}
                                        id="cidade"
                                        name="cidade"
                                        onChange={(e) => setFieldValue('cidade', e.target.value)} 
                                        value={values.cidade}
                                    />
                                </Stack>
                            </Grid>
                            {/* <Grid item xs={12} md={12}>
                                <Typography variant="h6" fontWeightRegular color="secondary" sx={{ marginBottom: 1 }}>
                                    Data de nascimento*
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            views={['day', 'month', 'year']}
                                            format="dd/MM/yyyy"
                                            value={values.data_nascimento ? parseISO(values.data_nascimento) : null}
                                            onBlur={handleBlur}
                                            id="data_nascimento"
                                            name="data_nascimento"
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </Grid> */}
                            {/* <Grid item xs={12} md={12}>
                                <Typography variant="h6" fontWeightRegular color="secondary" sx={{ marginBottom: 1 }}>
                                    País*
                                </Typography>
                                <Autocomplete
                                    id="pais"
                                    name="pais"
                                    value={values.pais} 
                                    fullWidth
                                    options={countries}
                                    autoHighlight
                                    getOptionLabel={(option) => option.label}
                                    renderOption={(props, option) => (
                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                            {option.label} ({option.code}) +{option.phone}
                                        </Box>
                                    )}
                                    renderInput={(params) => <TextField {...params} placeholder="Selecione o País" />}
                                    onChange={(event, newValue) => {
                                        // Atualize o valor do campo "pais" usando setFieldValue
                                        setFieldValue('pais', newValue); // Atualize o valor do campo "pais"
                                    }}
                                />
                            </Grid> */}
                            {/* <Grid item xs={12} md={12}>
                                <Typography variant="h6" fontWeightRegular color="secondary" sx={{ marginBottom: 1 }}>
                                    Estado*
                                </Typography>
                                <Autocomplete
                                    id="estado"
                                    name="estado"
                                    fullWidth
                                    options={states}
                                    autoHighlight
                                    value={states.find(state => state.sigla === selectedState)}
                                    onBlur={handleBlur}
                                    getOptionSelected={(option) => (option && typeof option.nome === 'string' ? option.nome : '')}
                                    onChange={handleStateChange}
                                    renderInput={(params) => <TextField {...params} placeholder="Selecione o estado" />}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
                                <Typography variant="h6" fontWeightRegular color="secondary" sx={{ marginBottom: 1 }}>
                                    Cidade*
                                </Typography>
                                <Autocomplete
                                    fullWidth
                                    id="cidade"
                                    value={values.cidade}
                                    options={cities}
                                    autoHighlight
                                    name="cidade"
                                    onBlur={handleBlur}
                                    onChange={(event, newValue) => {
                                        setFieldValue('cidade', newValue);
                                    }}
                                    
                                    getOptionSelected={(option) => (option && typeof option.nome === 'string' ? option.nome : '')}
                                    renderInput={(params) => <TextField {...params} placeholder="Selecione a cidade" />}
                                />
                            </Grid> */}
                        </Grid>
                        <Divider sx={{ marginBottom: 2, marginTop: 4 }} />
                        <Grid item className="btn-infoPessoal">
                            <Stack direction="row">
                                <Grid xs={6} sx={{ marginRight: 1 }}>
                                    <AnimateButton>
                                        <Button color="secondary" fullWidth size="large">
                                            Voltar
                                        </Button>
                                    </AnimateButton>
                                </Grid>
                                <Grid xs={6} sx={{ marginLeft: 1 }}>
                                    <AnimateButton>
                                        <Button
                                            disableElevation
                                            disabled={
                                                isSubmitting ||
                                                !(values.nome ||
                                                values.sobrenome ||  
                                                values.genero ||    
                                                values.data_nascimento ||                              
                                                values.pais ||
                                                values.estado ||
                                                values.cidade
                                                )
                                            }
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="warning">
                                            Continuar
                                        </Button>
                                    </AnimateButton>
                                </Grid>
                            </Stack>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthPersonalDetails;
