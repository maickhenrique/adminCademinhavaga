import { Link as RouterLink } from 'react-router-dom';
import './style.css';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// assets
import AnimateButton from 'components/@extended/AnimateButton';
import movieUxHub from 'assets/images/landing/uxhub-explicacao.mp4';

const HeaderPage = () => {

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ pt: { md: 0, xs: 8 }, pb: { md: 0, xs: 5 }}}>
        <Grid item xs={12} md={9} className="landing-header">
          <Grid container spacing={3} sx={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '1.825rem', sm: '2rem', md: '3.4375rem' },
                    fontWeight: 700,
                    lineHeight: 1.2
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                       background: 'linear-gradient(90deg, rgb(229, 138, 0), rgb(255, 165, 0), rgb(229, 138, 0)) 0 0 / 400% 100%',
                      color: 'transparent',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      animation: 'move-bg 24s infinite linear',
                      '@keyframes move-bg': {
                        '100%': {
                          backgroundPosition: '400% 0'
                        }
                      }
                    }}
                  >
                    <span>Acelere</span>
                  </Box>
                  <span> sua jornada em </span>
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(90deg, rgb(229, 138, 0), rgb(255, 165, 0), rgb(229, 138, 0)) 0 0 / 400% 100%',
                      color: 'transparent',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      animation: 'move-bg 24s infinite linear',
                      '@keyframes move-bg': {
                        '100%': {
                          backgroundPosition: '400% 0'
                        }
                      }
                    }}
                  >
                    <span> UX</span>
                  </Box>
                </Typography>
              </motion.div>
            </Grid>
            <Grid container justifyContent="center" item xs={12}>
              <Grid item xs={8}>
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
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      fontWeight: 400,
                      lineHeight: { xs: 1.4, md: 1.4 }
                    }}
                  >
                    Mapeie suas habilidades, acompanhe as tendências do mercado e direcione seus estudos com mais estratégia
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
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
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <AnimateButton>
                      <Button component={RouterLink} to="/register" size="large" color="warning" variant="contained">
                        Crie sua conta gratuita
                      </Button>
                    </AnimateButton>
                  </Grid>
                  <Grid item>
                    <AnimateButton>
                      {/* <Button component={RouterLink} to="#video-section" size="large" color="secondary"  variant="contained">
                        Saiba mais
                      </Button> */}
                      <Button onClick={() => {
    const videoSection = document.getElementById('video-section');
    videoSection.scrollIntoView({ behavior: "smooth" });
  }} size="large" color="secondary"  variant="contained">
    Saiba mais
</Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
                
              </motion.div>
            </Grid>
          </Grid>
        </Grid><br></br><br></br>
        <Grid className='movie-landing' id="video-section" container justifyContent="center" item xs={12}>
  <video width="560" height="400" controls>
  <track kind="captions" srcLang="pt-br" label="Português" />
    <source src={movieUxHub} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</Grid>
      </Grid>
    </Container>
  );
};
export default HeaderPage;
