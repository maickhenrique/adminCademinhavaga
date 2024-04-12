
// material-ui
import { Badge, Container, Grid, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// project-imports
import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';
// import IconButton from 'components/@extended/IconButton';

const IconComponent = ({ svg }) => (
  <div dangerouslySetInnerHTML={{ __html: svg }} />
);

const svgMapeamentoHabilidade = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.4" d="M26.9833 3.33337H13.0166C6.94998 3.33337 3.33331 6.95004 3.33331 13.0167V26.9667C3.33331 33.05 6.94998 36.6667 13.0166 36.6667H26.9666C33.0333 36.6667 36.65 33.05 36.65 26.9834V13.0167C36.6666 6.95004 33.05 3.33337 26.9833 3.33337Z" fill="white" fill-opacity="0.8"/>
  <path d="M11.4667 31.5C10.7833 31.5 10.2167 30.9334 10.2167 30.25V26.8C10.2167 26.1167 10.7833 25.55 11.4667 25.55C12.15 25.55 12.7167 26.1167 12.7167 26.8V30.25C12.7167 30.95 12.15 31.5 11.4667 31.5Z" fill="white" fill-opacity="0.8"/>
  <path d="M20 31.5C19.3167 31.5 18.75 30.9334 18.75 30.25V23.3334C18.75 22.65 19.3167 22.0834 20 22.0834C20.6833 22.0834 21.25 22.65 21.25 23.3334V30.25C21.25 30.95 20.6833 31.5 20 31.5Z" fill="white" fill-opacity="0.8"/>
  <path d="M28.5333 31.5001C27.85 31.5001 27.2833 30.9334 27.2833 30.2501V19.8834C27.2833 19.2001 27.85 18.6334 28.5333 18.6334C29.2167 18.6334 29.7833 19.2001 29.7833 19.8834V30.2501C29.7833 30.9501 29.2333 31.5001 28.5333 31.5001Z" fill="white" fill-opacity="0.8"/>
  <path d="M29.7833 9.7C29.7833 9.61667 29.75 9.51667 29.7333 9.43333C29.7167 9.36667 29.7 9.28333 29.6833 9.21667C29.65 9.15 29.6 9.1 29.5667 9.03333C29.5167 8.96667 29.4667 8.88333 29.4 8.83333C29.3833 8.81667 29.3833 8.8 29.3667 8.8C29.3167 8.76667 29.2667 8.75 29.2167 8.71667C29.15 8.66667 29.0667 8.61667 28.9833 8.58333C28.9 8.55 28.8167 8.55 28.7333 8.53333C28.6667 8.51667 28.6167 8.5 28.55 8.5H23.6667C22.9833 8.5 22.4167 9.06667 22.4167 9.75C22.4167 10.4333 22.9833 11 23.6667 11H25.75C21.7833 15.1667 16.7833 18.1 11.1667 19.5167C10.5 19.6833 10.0833 20.3667 10.25 21.0333C10.3833 21.6 10.9 21.9833 11.4667 21.9833C11.5667 21.9833 11.6667 21.9667 11.7667 21.95C17.7167 20.4667 23.0333 17.3833 27.2833 13.0167V14.6333C27.2833 15.3167 27.85 15.8833 28.5333 15.8833C29.2167 15.8833 29.7833 15.3167 29.7833 14.6333V9.75C29.7833 9.73333 29.7833 9.71667 29.7833 9.7Z" fill="white" fill-opacity="0.8"/>
  </svg>
`;

const svgPerfilUx = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.4" d="M35.1333 14.3001V25.7C35.1333 27.5667 34.1333 29.3001 32.5167 30.2501L22.6167 35.9668C21 36.9001 19 36.9001 17.3667 35.9668L7.46667 30.2501C5.85001 29.3168 4.85001 27.5834 4.85001 25.7V14.3001C4.85001 12.4334 5.85001 10.7 7.46667 9.75003L17.3667 4.03337C18.9833 3.10004 20.9833 3.10004 22.6167 4.03337L32.5167 9.75003C34.1333 10.7 35.1333 12.4168 35.1333 14.3001Z" fill="white" fill-opacity="0.8"/>
  <path d="M20 20C22.1447 20 23.8833 18.2614 23.8833 16.1167C23.8833 13.972 22.1447 12.2334 20 12.2334C17.8553 12.2334 16.1167 13.972 16.1167 16.1167C16.1167 18.2614 17.8553 20 20 20Z" fill="white" fill-opacity="0.8"/>
  <path d="M24.4667 27.7666C25.8167 27.7666 26.6 26.2667 25.85 25.15C24.7167 23.4667 22.5167 22.3334 20 22.3334C17.4833 22.3334 15.2833 23.4667 14.15 25.15C13.4 26.2667 14.1833 27.7666 15.5333 27.7666H24.4667Z" fill="white" fill-opacity="0.8"/>
  </svg>
`;

const svgComparativoMercado = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.4" d="M26.9833 3.33337H13.0167C6.94999 3.33337 3.33333 6.95004 3.33333 13.0167V26.9667C3.33333 33.05 6.94999 36.6667 13.0167 36.6667H26.9667C33.0333 36.6667 36.65 33.05 36.65 26.9834V13.0167C36.6667 6.95004 33.05 3.33337 26.9833 3.33337Z" fill="white" fill-opacity="0.8"/>
  <path d="M27.3667 13.0167V26.9834C27.3667 28.05 26.5 28.9167 25.4333 28.9167C24.35 28.9167 23.4833 28.05 23.4833 26.9834V13.0167C23.4833 11.95 24.35 11.0834 25.4333 11.0834C26.5 11.0834 27.3667 11.95 27.3667 13.0167Z" fill="white" fill-opacity="0.8"/>
  <path d="M16.5167 21.55V26.9834C16.5167 28.05 15.65 28.9167 14.5667 28.9167C13.5 28.9167 12.6333 28.05 12.6333 26.9834V21.55C12.6333 20.4834 13.5 19.6167 14.5667 19.6167C15.65 19.6167 16.5167 20.4834 16.5167 21.55Z" fill="white" fill-opacity="0.8"/>
  </svg>
`;

const svgMetricasMercado = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.4" d="M35 3.33331V23.5C35 26.6667 33.3333 28.3333 30.1667 28.3333H9.83332C6.66666 28.3333 5 26.6667 5 23.5V3.33331H35Z" fill="white" fill-opacity="0.8"/>
  <path d="M36.6666 4.58331H3.33331C2.64998 4.58331 2.08331 4.01665 2.08331 3.33331C2.08331 2.64998 2.64998 2.08331 3.33331 2.08331H36.6666C37.35 2.08331 37.9166 2.64998 37.9166 3.33331C37.9166 4.01665 37.35 4.58331 36.6666 4.58331Z" fill="white" fill-opacity="0.8"/>
  <path d="M27.7833 37.2333C27.5666 37.6666 27.1166 37.9166 26.6666 37.9166C26.4833 37.9166 26.2833 37.8667 26.1166 37.7833L20 34.7333L13.8833 37.7833C13.7166 37.8667 13.5166 37.9166 13.3333 37.9166C12.8833 37.9166 12.4333 37.6666 12.2166 37.2333C11.8999 36.6 12.15 35.85 12.7833 35.55L18.75 32.5667V28.3333H21.25V32.5667L27.2166 35.55C27.8499 35.85 28.1 36.6 27.7833 37.2333Z" fill="white" fill-opacity="0.8"/>
  <path d="M12.5 19.5833C12.15 19.5833 11.7833 19.4333 11.5333 19.1333C11.0833 18.6 11.1666 17.8167 11.6999 17.3667L16.95 12.9833C17.4333 12.5833 18.0499 12.4167 18.6333 12.5167C19.2333 12.6167 19.75 12.9833 20.0666 13.5166L21.8166 16.4333L26.6999 12.3667C27.2333 11.9167 28.0166 12 28.4666 12.5333C28.9166 13.0666 28.8333 13.85 28.3 14.3L23.0499 18.6833C22.5666 19.0833 21.95 19.25 21.3666 19.15C20.7666 19.05 20.2499 18.6834 19.9333 18.15L18.1833 15.2334L13.3 19.3C13.0666 19.4833 12.7833 19.5833 12.5 19.5833Z" fill="white" fill-opacity="0.8"/>
  </svg>
`;

const svgHubConteudo = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.4" d="M26.9833 3.33331H13.0333C6.96668 3.33331 3.35002 6.94998 3.35002 13.0166V26.9666C3.35002 33.0333 6.96668 36.65 13.0333 36.65H26.9833C33.05 36.65 36.6667 33.0333 36.6667 26.9666V13.0166C36.6667 6.94998 33.05 3.33331 26.9833 3.33331Z" fill="white" fill-opacity="0.8"/>
  <path d="M19.1667 13.4833V28.75C19.1667 29.35 18.5667 29.75 18.0167 29.5167C16 28.65 13.3666 27.85 11.5333 27.6167L11.2166 27.5833C10.2 27.45 9.36665 26.5 9.36665 25.4667V12.6333C9.36665 11.3667 10.4 10.4167 11.6667 10.5167C13.75 10.6834 16.8333 11.6834 18.7667 12.7834C19.0167 12.9 19.1667 13.1833 19.1667 13.4833Z" fill="white" fill-opacity="0.8"/>
  <path d="M30.6333 12.8334V25.45C30.6333 26.4833 29.8 27.4334 28.7834 27.5667L28.4333 27.6C26.6167 27.85 24 28.6334 21.9833 29.4834C21.4333 29.7167 20.8333 29.3167 20.8333 28.7167V13.4667C20.8333 13.1667 20.9833 12.8834 21.25 12.7334C23.1833 11.65 26.2 10.6833 28.25 10.5H28.3166C29.6 10.5167 30.6333 11.55 30.6333 12.8334Z" fill="white" fill-opacity="0.8"/>
  </svg>
`;

const svgHubVagas = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M35.15 11.6333C33.7333 10.0667 31.3667 9.28335 27.9333 9.28335H27.5333V9.21668C27.5333 6.41668 27.5333 2.95001 21.2667 2.95001H18.7333C12.4667 2.95001 12.4667 6.43335 12.4667 9.21668V9.30001H12.0667C8.61666 9.30001 6.26666 10.0833 4.85 11.65C3.2 13.4833 3.25 15.95 3.41666 17.6333L3.43333 17.75L3.6 19.5C3.61666 19.5167 3.65 19.55 3.68333 19.5667C4.23333 19.9333 4.8 20.3 5.4 20.6333C5.63333 20.7833 5.88333 20.9167 6.13333 21.05C8.98333 22.6167 12.1167 23.6667 15.3 24.1833C15.45 25.75 16.1333 27.5833 19.7833 27.5833C23.4333 27.5833 24.15 25.7667 24.2667 24.15C27.6667 23.6 30.95 22.4167 33.9167 20.6833C34.0167 20.6333 34.0833 20.5833 34.1667 20.5333C34.9333 20.1 35.65 19.6333 36.35 19.1167C36.3833 19.1 36.4167 19.0667 36.4333 19.0333L36.5 18.4333L36.5833 17.65C36.6 17.55 36.6 17.4667 36.6167 17.35C36.75 15.6667 36.7167 13.3667 35.15 11.6333ZM21.8167 23.05C21.8167 24.8167 21.8167 25.0833 19.7667 25.0833C17.7167 25.0833 17.7167 24.7667 17.7167 23.0667V20.9667H21.8167V23.05ZM14.85 9.28335V9.21668C14.85 6.38335 14.85 5.33335 18.7333 5.33335H21.2667C25.15 5.33335 25.15 6.40001 25.15 9.21668V9.30001H14.85V9.28335Z" fill="white" fill-opacity="0.8"/>
  <path opacity="0.4" d="M34.1667 20.5C34.0833 20.55 34 20.6 33.9167 20.65C30.95 22.3833 27.6667 23.55 24.2667 24.1167C24.1333 25.7167 23.4333 27.55 19.7833 27.55C16.1333 27.55 15.4333 25.7333 15.3 24.15C12.1167 23.65 8.98334 22.6 6.13334 21.0167C5.88334 20.8833 5.63334 20.75 5.40001 20.6C4.80001 20.2667 4.23334 19.9 3.68334 19.5333C3.65001 19.5167 3.61667 19.4833 3.60001 19.4667L4.61667 30.3167C4.96667 33.6333 6.33334 37.05 13.6667 37.05H26.3667C33.7 37.05 35.0667 33.6333 35.4167 30.3L36.4667 19C36.45 19.0333 36.4167 19.0667 36.3833 19.0833C35.6667 19.6 34.9333 20.0833 34.1667 20.5Z" fill="white" fill-opacity="0.8"/>
  </svg>
`;


import './style.css';
const Technologies = [
  {
    trending: false,
    icon: svgMapeamentoHabilidade,
    title: 'Mapeamento de Habilidades',
    description: "Transforme suas habilidades em pontos, descubra seu momento de carreira e acompanhe sua evolução na área",
  },
  {
    trending: false,
    icon: svgPerfilUx,
    title: 'Perfil UX Compartilhável',
    description:
      'Compartilhe sua experiência, habilidades, portfólios e artigos com praticidade',
  },
  {
    trending: false,
    icon: svgComparativoMercado,
    title: 'Comparativo de Mercado',
    description:
      'Descubra como estão suas habilidades e remuneração em relação à média do mercado de forma anônima.',
  },
  {
    trending: false,
    icon: svgMetricasMercado,
    title: 'Métricas do Mercado',
    description:
      'Direcione sua estratégia de estudos de acordo com as métricas e tendências do mercado.',
  },
  {
    trending: true,
    icon: svgHubConteudo,
    title: 'Hub de Conteúdos Gratuitos',
    description:
      'Tenha acesso à diversos conteúdos que irão te ajudar a aprimorar suas habilidades e impulsionar sua carreira.',
  },
  {
    trending: true,
    icon: svgHubVagas,
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
                <Typography variant="h2" className='title-padrao'>Como aceleramos <span className='span-carreira'>sua carreira</span> </Typography>
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
                <Typography>Confira tudo que o UX Hub tem pra você crescer com estratégia</Typography>
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
                            {/* <Grid item className='grid-item-carreira'>
                              <Typography variant="h4">{tech.title}</Typography>
                              <Typography>{tech.description}</Typography>
                            </Grid> */}
                              <Grid item xs={12} >
                                {tech.trending && (
                                  <div>
                                    <Badge className='badge' badgeContent="em breve" color="warning" variant="light"/>
                                    <IconComponent  svg={tech.icon} sx={{ width: 'auto' }} />
                                  </div>

                                )}
                                {!tech.trending && <IconComponent svg={tech.icon} sx={{ width: 'auto' }} />}
                              </Grid>
                              <Grid item xs={12} className='grid-item-carreira'>
                                <Typography variant="h4">{tech.title}</Typography>
                              </Grid>
                              <Grid item xs={12} className='grid-item-description'>
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
