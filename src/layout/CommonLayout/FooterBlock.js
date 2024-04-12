import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';

// third-party
import { motion } from 'framer-motion';

// project-imports
import Logo from 'components/logo';

// assets
import LinkedinFooter from './LinkedinFooter';
import InstagramFooter from './InstagramFooter';

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover, &:active': {
    color: theme.palette.primary.main
  }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterBlock = ({ isFull }) => {
  const theme = useTheme();

  const linkSX = {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    opacity: '0.6',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1'
    }
  };

  return (
    <>
      <Box sx={{ pt: isFull ? 5 : 10, pb: 10, bgcolor: 'secondary.200', borderTop: `1px solid ${theme.palette.divider}` }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Logo reverse to="/" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                      Sua plataforma direcionadora de carreira em UX.
                    </Typography>
                    <br></br>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                      Acompanhe as novidades em:
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                <Grid item sx={{marginTop: 2}}>
                  <Link href='https://www.linkedin.com/company/ux-hub/' target="_blank" underline="none" sx={linkSX}>
                   <LinkedinFooter />
                  </Link>{' '}&nbsp;
                  <Link href='https://www.instagram.com/uxhub.br/' target="_blank" underline="none" sx={linkSX}>
                   <InstagramFooter />
                  </Link>
                </Grid>
              </Grid>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={{ xs: 5, md: 2 }}>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={3}>
                    <Typography variant="h5">Para Você</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink href="/login" target="_blank" underline="none">
                        Entrar
                      </FooterLink>
                      <FooterLink href="/register" target="_blank" underline="none">
                        Criar conta gratuita
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
                {/* <Grid item xs={6} sm={4}>
                  <Stack spacing={3}>
                    <Typography variant="h5">Help & Support</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink href="https://phoenixcoded.gitbook.io/able-pro/v/react/" target="_blank" underline="none">
                        Documentation
                      </FooterLink>
                      <FooterLink href="https://phoenixcoded.gitbook.io/able-pro/v/react/roadmap/" target="_blank" underline="none">
                        Feature Request
                      </FooterLink>
                      <FooterLink href="https://phoenixcoded.gitbook.io/able-pro/v/react/roadmap/" target="_blank" underline="none">
                        RoadMap
                      </FooterLink>
                      <FooterLink href="https://phoenixcoded.authordesk.app/" target="_blank" underline="none">
                        Support
                      </FooterLink>
                      <FooterLink href="https://themeforest.net/user/phoenixcoded#contact" target="_blank" underline="none">
                        Email Us
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid> */}
                {/* <Grid item xs={6} sm={4}>
                  <Stack spacing={3}>
                    <Typography variant="h5">Useful Resources</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink href="https://themeforest.net/page/item_support_policy" target="_blank" underline="none">
                        Support Policy
                      </FooterLink>
                      <FooterLink href="https://themeforest.net/licenses/standard" target="_blank" underline="none">
                        Licenses Term
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          py: 2.4,
          borderTop: `1px solid ${theme.palette.divider}`,
          bgcolor: 'secondary.200'
        }}
      >
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8}>
              <Typography>
                2024 © Feito com muito carinho para você e pela equipe{' '}
                <Link href="www.uxhub.com.br" underline="none" sx={{ color: theme.palette.warning.main}}>
                  {' '}
                  UX Hub
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

FooterBlock.propTypes = {
  isFull: PropTypes.bool
};

export default FooterBlock;
