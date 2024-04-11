import {
    Grid,
    Typography,
  } from '@mui/material';
  import AuthProfessionalInformation from 'sections/auth/auth-forms/AuthProfessionalInformation';
  
  import './style.css'; 
  
  import MainCard from 'components/MainCard';
  
  const ProfessionalInformation = () => {
  
    return (
      <div className='container-grid'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard title="Criar Conta">
              <Typography variant="h3" color="secondary" sx={{ marginBottom: 2 }}>Informações Profissionais</Typography>
              <Grid item xs={12}>
                <AuthProfessionalInformation />
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </div>
    );  
  }
  
  export default ProfessionalInformation;