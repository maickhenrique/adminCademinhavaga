import { Button } from '@mui/material';
import imgGoogle from 'assets/images/auth/google.svg';

const AuthSocButtonGoogle = ( ) => {
  return (
    <Button variant="contained" color="error" size="large" fullWidth>
      <img src={imgGoogle} alt="Linkedin" style={{ margin: '0 10px' }} /> Entrar com Google
    </Button>
  );
};

export default AuthSocButtonGoogle;
