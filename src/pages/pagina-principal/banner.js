
import { Grid, Typography, Button, Stack, Box } from '@mui/material';
import MainCard from 'components/MainCard';
import ImageBanner from 'assets/images/banner/img-banner.png';


const Banner = () => {
  return (
    <MainCard>
      <Grid container>
        <Grid item md={6} sm={6} xs={12}>
          <Stack spacing={2} sx={{ padding: 3 }}>
            <Typography variant="h2">
              Nossas Habilidades
            </Typography>
            <Typography variant="h6">
                Preencha as novas habilidades para ganhar mais pontos de experiência.
            </Typography>
            <Box sx={{ pt: 1.5 }}>
                <Button variant="contained" color="warning">Distribuir Pontos</Button>
            </Box>
          </Stack>
        </Grid>
        <Grid item sm={6} xs={12} sx={{ display: { xs: 'none', sm: 'initial' } }}>
          <Stack sx={{ position: 'relative', pr: { sm: 3, md: 8 }, zIndex: 2 }} justifyContent="center" alignItems="flex-end">
            <img src={ImageBanner} alt="Banner" width="200px" />
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Banner;
