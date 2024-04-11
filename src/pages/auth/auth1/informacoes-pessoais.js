
import {
    Grid,
    Typography,
  } from '@mui/material';
  
  import './style.css'; 
  import AuthPersonalDetails from 'sections/auth/auth-forms/AuthPersonalDetails';
  
  import MainCard from 'components/MainCard';
  
  const PersonalDetails = () => {
    return (
      <div className='container-grid'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard title="Criar Conta">
              <Typography variant="h3" color="secondary">Informações Pessoais</Typography>
              <Grid item xs={12}>
                <AuthPersonalDetails />
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </div>
    );
  };
  
  export default PersonalDetails;