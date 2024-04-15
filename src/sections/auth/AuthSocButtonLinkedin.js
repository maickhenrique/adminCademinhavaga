import { Button } from '@mui/material';
import imgLinkedin from 'assets/images/auth/linkedin.svg';

const AuthSocButtonLinkedin = ( ) => {
  return (
    <Button variant="contained" fullWidth size="large" style={{background: '#0A66C2'}}>
        <img src={imgLinkedin} alt="Linkedin" style={{ margin: '0 10px' }} /> Entrar com LinkedIn
    </Button>
  );
};

export default AuthSocButtonLinkedin;
