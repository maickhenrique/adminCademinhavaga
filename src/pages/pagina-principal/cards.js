import MainCard from 'components/MainCard';
import { Typography, Grid } from '@mui/material';

const CardsIndex = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <MainCard sx={{ height: '100%' }}>
          <Typography variant="h6">Card 1</Typography>
          <Typography variant="caption" color="textSecondary">
            Descrição do Card 1
          </Typography>
        </MainCard>
      </Grid>
      <Grid item xs={4}>
        <MainCard sx={{ height: '100%' }}>
          <Typography variant="h6">Card 2</Typography>
          <Typography variant="caption" color="textSecondary">
            Descrição do Card 2
          </Typography>
        </MainCard>
      </Grid>
      <Grid item xs={4}>
        <MainCard sx={{ height: '100%' }}>
          <Typography variant="h6">Card 3</Typography>
          <Typography variant="caption" color="textSecondary">
            Descrição do Card 3
          </Typography>
        </MainCard>
      </Grid>
      <Grid item xs={4}>
        <MainCard sx={{ height: '100%' }}>
          <Typography variant="h6">Card 4</Typography>
          <Typography variant="caption" color="textSecondary">
            Descrição do Card 4
          </Typography>
        </MainCard>
      </Grid>
      <Grid item xs={4}>
        <MainCard sx={{ height: '100%' }}>
          <Typography variant="h6">Card 5</Typography>
          <Typography variant="caption" color="textSecondary">
            Descrição do Card 5
          </Typography>
        </MainCard>
      </Grid>
      <Grid item xs={4}>
        <MainCard sx={{ height: '100%' }}>
          <Typography variant="h6">Card 6</Typography>
          <Typography variant="caption" color="textSecondary">
            Descrição do Card 6
          </Typography>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default CardsIndex;
