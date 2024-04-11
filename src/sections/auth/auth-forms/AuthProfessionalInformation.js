// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Grid,
    Typography,
    Button, 
    Stack,
    // Checkbox,
    // FormControlLabel,
    OutlinedInput,
    Divider
} from '@mui/material';

import AnimateButton from 'components/@extended/AnimateButton';
import { Formik } from 'formik';
import * as yup from 'yup';

import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';

import { openSnackbar } from 'store/reducers/snackbar';
import { dispatch } from 'store';

const AuthProfessionalInformation = () => {
    // const [checked, setChecked] = useState(false);
    const { registerInfoProfessional } = useAuth();
    const scriptedRef = useScriptRef();
    const navigate = useNavigate();
    
return (
    <>
        <Formik
            initialValues={{
                nome_cargo: '',
                empresa: '',
                nome_senerioridade: '',
                // nome_modelo_contrato: '',
                // nome_modelo_trabalho: '',
                // inicio_experiencia: '',
                // fim_experiencia: '',
                // emprego_atual: '',
                submit: null,
            }}
            validationSchema={yup.object().shape({
                nome_cargo: yup.string().required('Este campo é obrigatório'),
                empresa: yup.string().required('Este campo é obrigatório'),
                nome_senerioridade: yup.string().required('Este campo é obrigatório'),
                // nome_modelo_contrato: yup.string().required('Este campo é obrigatório'),
                // nome_modelo_trabalho: yup.string().required('Selecione o país'),
                // inicio_experiencia: yup.date().required('Informe a data de nascimento'),
                // fim_experiencia: yup.date().required('Informe a data de nascimento'),
                // emprego_atual: yup.string().required('Selecione a cidade'),
            })}

            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    await registerInfoProfessional( 
                        values.nome_cargo,
                        values.empresa,
                        values.nome_senerioridade,
                        // values.nome_modelo_contrato,
                        // values.nome_modelo_trabalho,
                        // values.inicio_experiencia,
                        // values.fim_experiencia,
                        // values.emprego_atual,
                    );
                    console.log('Teste1', registerInfoProfessional);
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
                            navigate('/informacao-remuneracao', { replace: true });
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
                        <Grid item xs={12} md={12} sx={{ marginBottom: 2 }}>
                            <Typography variant="h6" fontWeightRegular color="secondary" sx={{ marginBottom: 1 }}>
                                Cargo mais recente em UX*
                            </Typography>
                            <OutlinedInput
                                onBlur={handleBlur}
                                id="nome_cargo"
                                onChange={(e) => setFieldValue('nome_cargo', e.target.value)} 
                                fullWidth
                                type="text"
                                placeholder="Digite o nome do cargo atual"
                                name="nome_cargo"
                                value={values.nome_cargo}
                            />
                        </Grid>
                        {/* <Grid item xs={12} md={12} sx={{ marginBottom: 2 }}>
                            <Typography variant="h6" fontWeightRegular color="secondary" sx={{ marginBottom: 1 }}>
                                Senioridade*
                            </Typography>
                            <OutlinedInput
                                onBlur={handleBlur}
                                id="nome_senerioridade"
                                onChange={(e) => setFieldValue('nome_senerioridade', e.target.value)} 
                                fullWidth
                                type="text"
                                placeholder="Digite sua senioridade atual"
                                name="nome_senerioridade"
                                value={values.nome_senerioridade}
                            />
                        </Grid> */}
                        <Grid item xs={12} md={12} sx={{ marginBottom: 2 }}>
                            <Typography variant="h6" fontWeightRegular color="secondary" sx={{ marginBottom: 1 }}>
                                Empresa*
                            </Typography>
                            <OutlinedInput
                                onBlur={handleBlur}
                                id="empresa"
                                onChange={(e) => setFieldValue('empresa', e.target.value)} 
                                fullWidth
                                type="text"
                                placeholder="Digite sua empresa atual"
                                name="empresa"
                                value={values.empresa}
                            />
                        </Grid>
                        {/* <Grid item xs={12} md={12} sx={{ marginBottom: 2 }}>
                            <Typography variant="h6" fontWeightRegular color="secondary" sx={{ marginBottom: 1 }}>
                                Modelo de contrato*
                            </Typography>
                            <OutlinedInput
                                onBlur={handleBlur}
                                id="nome_modelo_contrato"
                                onChange={(e) => setFieldValue('nome_modelo_contrato', e.target.value)} 
                                fullWidth
                                type="text"
                                placeholder="Digite o modelo de contrato (CLT, PJ)"
                                name="nome_modelo_contrato"
                                value={values.nome_modelo_contrato}
                            />
                        </Grid> */}
                        {/* <Grid item xs={12} md={12} sx={{ marginBottom: 2 }}>
                            <Typography variant="h6" fontWeightRegular color="secondary" sx={{ marginBottom: 1 }}>
                                Modelo de Trabalho*
                            </Typography>
                            <OutlinedInput
                                onBlur={handleBlur}
                                id="nome_modelo_trabalho"
                                onChange={(e) => setFieldValue('nome_modelo_trabalho', e.target.value)} 
                                fullWidth
                                type="text"
                                placeholder="Digite o modelo de trabalho (Hibrido, Home-office, Presencial)"
                                name="nome_modelo_trabalho"
                                value={values.nome_modelo_trabalho}
                            />
                        </Grid> */}
                        {/* <Grid item xs={12} md={12} sx={{ marginBottom: 2 }}>
                            <Typography variant="h6" fontWeightRegular color="secondary" sx={{ marginBottom: 1 }}>
                                Data de início*
                            </Typography>
                            <OutlinedInput
                                fullWidth
                                type="text"
                                placeholder="MM/DD/AAAA"
                                onBlur={handleBlur}
                                id="inicio_experiencia"
                                name="inicio_experiencia"
                                onChange={(e) => setFieldValue('inicio_experiencia', e.target.value)} 
                                value={values.inicio_experiencia}
                            />
                        </Grid> */}
                        {/* <Grid item xs={12} md={12} sx={{ marginBottom: 2 }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="emprego_atual"
                                        color="primary"
                                        size="small"
                                        id="emprego_atual"
                                        value={values.emprego_atual}
                                    />
                                }
                                label={<Typography variant="h6">Este é meu emprego atual</Typography>}
                            />
                        </Grid> */}
                        {/* <Grid item xs={12} md={12} sx={{ marginBottom: 2 }}>
                            <Typography variant="h6" fontWeightRegular color="secondary" sx={{ marginBottom: 1 }}>
                                Data de término*
                            </Typography>
                            <OutlinedInput
                                fullWidth
                                type="text"
                                placeholder="MM/DD/AAAA"
                                onBlur={handleBlur}
                                id="fim_experiencia"
                                name="fim_experiencia"
                                onChange={(e) => setFieldValue('fim_experiencia', e.target.value)} 
                                value={values.fim_experiencia}
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
                                            !(  values.nome_cargo ||
                                                values.empresa ||
                                                values.nome_senerioridade
                                                // values.nome_modelo_contrato ||
                                                // values.nome_modelo_trabalho ||
                                                // values.inicio_experiencia ||
                                                // values.fim_experiencia
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

export default AuthProfessionalInformation;
