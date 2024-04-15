import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project-imports
// import Logo from 'components/logo';
import useAuth from 'hooks/useAuth';
import AuthSocButtonLinkedin from 'sections/auth/AuthSocButtonLinkedin';
import AuthSocButtonGoogle from 'sections/auth/AuthSocButtonGoogle';
import AuthDivider from 'sections/auth/AuthDivider';
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';

// assets
import imgGoogle from 'assets/images/auth/google.svg';
import imgLinkedin from 'assets/images/auth/linkedin.svg';
import './style.css';

// ================================|| LOGIN ||================================ //

const Login = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Logo />
        </Grid> */}
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <AuthSocButtonGoogle>
                <img src={imgGoogle} alt="Google" style={{ margin: '0 10px' }} /> Entrar com Google
              </AuthSocButtonGoogle>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{marginTop: '16px'}}>
            <Grid item xs={12}>
              <AuthSocButtonLinkedin>
                <img src={imgLinkedin} alt="Linkedin" style={{ margin: '0 10px' }} /> Entrar com Linkedin
              </AuthSocButtonLinkedin>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AuthDivider>
            <Typography variant="body1">Ou</Typography>
          </AuthDivider>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Entrar</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin forgot="/auth/forgot-password" />
        </Grid>
      </Grid>
      <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 }, marginTop: '20px' }}>
            <Typography
              className='link-criarConta-login'
              component={Link}
              to={isLoggedIn ? '/auth/cadastrar' : '/cadastrar'}
              variant="body1"
              sx={{ textDecoration: 'none'}}
              color="#fff"
            >
              Não possui uma conta? <span style={{color:'#FD7E14'}}>Criar conta</span>
            </Typography>
          </Stack>
        </Grid>
    </AuthWrapper>
  );
};

export default Login;
