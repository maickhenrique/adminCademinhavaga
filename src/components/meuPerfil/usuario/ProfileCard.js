import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Grid, Stack, Typography } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import ProfileRadialChart from './ProfileRadialChart';


// ==============================|| USER PROFILE - TOP CARD ||============================== //

const ProfileCard = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainCard
      border={false}
      content={false}
     
    >
      <Grid container justifyContent="space-between" alignItems="center" sx={{ position: 'relative', zIndex: 5 }}>
        <Grid item>
          <Stack direction="row" spacing={matchDownSM ? 1 : 2} alignItems="center">
            <Box sx={{ ml: { xs: 0, sm: 1 } }}>
              <ProfileRadialChart />
            </Box>
            <Stack spacing={0.75}>
              <Typography variant="h5">Complete seu perfil</Typography>
              <Typography variant="body2" color="secondary">
                Quanto mais informações, mais chances de ser visto por recrutadores.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
};


export default ProfileCard;
