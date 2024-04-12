// material-ui
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// third party
import { motion } from 'framer-motion';

import './style.css';
// assets
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| LANDING - ComboPage ||============================== //

const ComboPage = () => {
  return (
    <Box className="box-acelerar-carreira" sx={{ bgcolor: 'secondary.200'}}>
      <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ textAlign: 'center', marginBottom: 3 }} className='grid-container-combo'>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <Typography variant="h2" className='title-padrao'>Quer <span className='span-carreira'>acelerar</span>  sua jornada em UX?</Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Typography>
                 Então crie sua conta gratuita e junte-se a mais de 3 mil profissionais no UX Hub
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <AnimateButton>
                <Button component={RouterLink} to="/hub/index_conta.php" size="large" color="warning" variant="contained">
                  Crie sua conta gratuita
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ComboPage;
