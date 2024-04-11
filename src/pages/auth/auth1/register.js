// material-ui
import { Grid, Typography, Link } from '@mui/material';

import useAuth from 'hooks/useAuth';
import AuthDivider from 'sections/auth/AuthDivider';
import AuthWrapper from 'sections/auth/AuthWrapper';
import RegisterUser from 'sections/auth/auth-forms/AuthRegister';
import AuthSocButtonGoogle from 'sections/auth/AuthSocButtonGoogle';
import AuthSocButtonLinkedin from 'sections/auth/AuthSocButtonLinkedin';
import './style.css';

const Register = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
      <Grid item xs={12} sx={{ textAlign: 'left' }}>
        <Typography variant="h3">Criar conta</Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
          <Grid item xs={12}>
              <AuthSocButtonGoogle />
            </Grid>
            <Grid item xs={12}>
              <AuthSocButtonLinkedin />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AuthDivider>
            <Typography variant="body1">OU</Typography>
          </AuthDivider>
        </Grid>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
          <RegisterUser />
        </Grid>
        <Grid item xs={12} className='text-criar-conta'>
         Já possui uma conta?&nbsp;
            <Typography className='criar-conta '
              component={Link}
              to={isLoggedIn ? '/auth/entrar' : '/entrar'}
              variant="body1"
              color="warning"
            >
              Entrar
            </Typography>

        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Register;
