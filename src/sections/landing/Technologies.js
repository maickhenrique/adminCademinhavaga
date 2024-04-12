
// material-ui
import {   Container, Grid, Typography} from '@mui/material';

// third party
import { motion } from 'framer-motion';

// project-imports
import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';
// import IconButton from 'components/@extended/IconButton';

// assets
import techBootstrap from 'assets/images/landing/tech-bootstrap.svg';
import techMui from 'assets/images/landing/tech-mui.svg';
import techCodeigniter from 'assets/images/landing/tech-codeigniter.svg';
import techNet from 'assets/images/landing/tech-net.svg';

import './style.css';
const Technologies = [
  {
    trending: false,
    icon: techBootstrap,
    title: 'Mapeamento de Habilidades',
    description: "Transforme suas habilidades em pontos, descubra seu momento de carreira e acompanhe sua evolução na área",
  },
  {
    trending: true,
    icon: techMui,
    title: 'Perfil UX Compartilhável',
    description:
      'Compartilhe sua experiência, habilidades, portfólios e artigos com praticidade',
  },
  {
    trending: false,
    icon: techNet,
    title: 'Comparativo de Mercado',
    description:
      'Descubra como estão suas habilidades e remuneração em relação à média do mercado de forma anônima.',
  },
  {
    trending: false,
    icon: techCodeigniter,
    title: 'Métricas do Mercado',
    description:
      'Direcione sua estratégia de estudos de acordo com as métricas e tendências do mercado.',
  },
  {
    trending: false,
    icon: techCodeigniter,
    title: 'Hub de Conteúdos Gratuitos',
    description:
      'Tenha acesso à diversos conteúdos que irão te ajudar a aprimorar suas habilidades e impulsionar sua carreira.',
  },
  {
    trending: false,
    icon: techCodeigniter,
    title: 'Hub de Vagas',
    description:
      'Conectamos você com vagas que buscam as habilidades que você possui. Quanto mais você estuda, mais chances você tem.',
  },
];

const TechnologiesPage = () => {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ textAlign: 'center', marginBottom: 3 }}>
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
                <Typography variant="h2">Como aceleramos <span className='span-carreira'>sua carreira</span> </Typography>
              </motion.div>
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
                <Typography>Confira tudo que p UX Hub tem pra você crescer com estratégia</Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        <Grid container spacing={3} alignItems="stretch" className='card-container'>
  {Technologies.map((tech, index) => (
    <Grid item xs={12} md={4} lg={4} key={index}>
      <FadeInWhenVisible>
        <MainCard className='card-carreira'>
          <Grid container spacing={2} direction="column" justifyContent="space-between" style={{ height: '100%' }}>
            <Grid item className='grid-item-carreira'>
              <Typography variant="h4">{tech.title}</Typography>
              <Typography>{tech.description}</Typography>
            </Grid>
          </Grid>
        </MainCard>
      </FadeInWhenVisible>
    </Grid>
  ))}
</Grid>
</Grid>

      </Grid>
    </Container>
  );
};
export default TechnologiesPage;
