import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material';

// project-imports
import FadeInWhenVisible from './Animation';

// third-party
import Slider from 'react-slick';
import './style.css';
// assets
import featureChart from 'assets/images/landing/chart.png';
import featureEcommerce from 'assets/images/landing/chart.png';
import featureMail from 'assets/images/landing/chart.png';

const Technologies = [
  {
    image: featureChart,
    title: 'Entenda seu momento de carreira',
    href: 'chat',
    description: 'Descubra como está sua carreira, mapeando sua experiência em mais de 130 habilidades relevantes para profissionais de UX.'
  },
  {
    image: featureEcommerce,
    title: 'Acelere sua evolução com estratégia',
    href: 'ecommerce',
    description: 'Utilize métricas de mercado para criar uma estratégia de estudos focadas nas habilidades mais relevantes para o seu momento de carreira.'
  },
  {
    image: featureMail,
    title: 'Consiga a vaga certa para você',
    href: 'mail',
    description: 'Atualize suas habilidades no UX Hub e aumente a chance de conquistar aquela vaga ideal para seu perfil.'
  },
];
// ==============================|| LANDING - AppsPage ||============================== //

const AppsPage = () => {
  const theme = useTheme();

  const [slideIndex, setSlideIndex] = useState(0);

  function handleChange(value) {
    goToSlide(value);
    setSlideIndex(value);
  }
  const [state, setState] = useState(0);
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    setState(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const settings = {
    fade: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: function (currentSlide) {
      setSlideIndex(currentSlide);
    }
  };

  return (
    <Box sx={{  color: theme.palette.secondary.darker}}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ pt: { md: 10, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center" sx={{ textAlign: 'center', marginBottom: 3 }}>
              <Grid item xs={12}>
                <Typography variant="h2" color="white">
                  Uma ferramenta <span className='span-carreira'>focada no seu crescimento em UX </span>
                </Typography>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography color="white">
                 Tudo que sua carreira precisa para decolar em um só lugar
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ pt: { md: 10, xs: 2.5 }, pb: { md: 24, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={3} alignItems="start">
              <Grid item xs={12} md={6}>
                <Grid container spacing={1.5} alignItems="center">
                  {Technologies.map((tech, index) => (
                    <Grid item xs={12} key={index}>
                      <FadeInWhenVisible>
                        <Box>
                          <Button
                            onClick={() => {
                              handleChange(index);
                            }}
                            // eslint-disable-next-line
                            role="a"
                            href={`#${tech.href}`}
                            sx={{
                              p: 3,
                              borderRadius: 1.5,
                              ...(slideIndex === index && {
                                background: theme.palette.secondary.dark + 20,
                                boxShadow: theme.customShadows.z1,
                                '&:hover': {
                                  background: theme.palette.secondary.dark + 20,
                                  boxShadow: theme.customShadows.z1
                                }
                              })
                            }}
                            variant="light"
                          >
                            <Grid container textAlign="start" spacing={2}>
                              <Grid item xs={12}>
                                <Typography variant="h4" color="white">
                                  {tech.title}
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography color="white">{tech.description}</Typography>
                              </Grid>
                            </Grid>
                          </Button>
                        </Box>
                      </FadeInWhenVisible>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    mt: 4,
                    position: 'absolute',
                    width: '150%'
                  }}
                >
                  <Slider ref={sliderRef} {...settings}>
                    {Technologies.map((tech, index) => (
                      <Box key={index + state} sx={{ width: '100%', minHeight: '100%', textAlign: 'center' }}>
                        <CardMedia component="img" image={tech.image} className='card-img'/>
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default AppsPage;
