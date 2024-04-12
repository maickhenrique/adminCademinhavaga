import PropTypes from 'prop-types';
import { useState, cloneElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import AppBar from '@mui/material/AppBar';
import { alpha, useTheme } from '@mui/material/styles';
import {
  useMediaQuery,
  Box,
  Button,
  Chip,
  Container,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@mui/material';

// project-imports
import Logo from 'components/logo';
import { ThemeDirection, APP_DEFAULT_PATH } from 'config';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { Minus } from 'iconsax-react';

// elevation scroll
function ElevationScroll({ children, window }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window ? window : undefined
  });

  return cloneElement(children, {
    style: {
      boxShadow: trigger ? '0 8px 6px -10px rgba(0, 0, 0, 0.5)' : 'none',
      backgroundColor: trigger ? alpha(theme.palette.background.default, 0.8) : alpha(theme.palette.background.default, 0.1)
    }
  });
}


const Header = ({layout = 'landing', ...others }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerToggle, setDrawerToggle] = useState(false);

  /** Method called on multiple components with different event types */
  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <ElevationScroll layout={layout} {...others}>
      <AppBar
        sx={{
          bgcolor: alpha(theme.palette.background.default, 0.1),
          backdropFilter: 'blur(8px)',
          color: theme.palette.text.primary,
          boxShadow: 'none'
        }}
      >
        <Container maxWidth="xl" disableGutters={matchDownMd}>
          <Toolbar sx={{ px: { xs: 1.5, sm: 4, md: 0, lg: 0 }, py: 1 }}>
            <Stack direction="row" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }} alignItems="center">
              <Typography component="div" sx={{ textAlign: 'left', display: 'inline-block' }}>
                <Logo reverse to="/" />
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                '& .header-link': { fontWeight: 500, '&:hover': { color: theme.palette.primary.main } },
                display: { xs: 'none', md: 'block' }
              }}
              spacing={3}
            >
              <Link
                className="header-link"
                sx={{ ml: theme.direction === ThemeDirection.RTL ? 3 : 0 }}
                color="secondary.main"
                component={RouterLink}
                to="/login"
                target="_blank"
                underline="none"
              >
                Entrar
              </Link>
              <Box sx={{ display: 'inline-block' }}>
                <AnimateButton>
                  <Button
                    component={Link}
                    href="/register"
                    disableElevation
                    color="warning"
                    size="large"
                    variant="contained"
                  >
                    Crie sua conta gratuita
                  </Button>
                </AnimateButton>
              </Box>
            </Stack>
            <Box
              sx={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <Typography component="div" sx={{ textAlign: 'left', display: 'inline-block' }}>
                <Logo reverse to="/" />
              </Typography>
              <Stack direction="row" spacing={2}>
                {layout === 'component' && (
                  <Button variant="outlined" color="warning" component={RouterLink} to={APP_DEFAULT_PATH} sx={{ mt: 0.25 }}>
                    Entrar
                  </Button>
                )}
                {layout !== 'component' && (
                  
                  <Button variant="outlined" color="secondary" component={RouterLink} to="/login" sx={{ mt: 0.25 }}>
                   Entrar
                  </Button>
                )}

                <Button variant="outlined" color="warning" component={RouterLink} to="/register" sx={{ mt: 0.25 }}>  
                   Cadastrar
                </Button>
              </Stack>
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={drawerToggler(false)}
                sx={{ '& .MuiDrawer-paper': { backgroundImage: 'none' } }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    '& .MuiListItemIcon-root': {
                      fontSize: '1rem',
                      minWidth: 32
                    }
                  }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >
                  <List>
                    <Link style={{ textDecoration: 'none' }} href="/login" target="_blank">
                      <ListItemButton component="span">
                        <ListItemIcon>
                          <Minus color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" primaryTypographyProps={{ variant: 'h6', color: 'secondary.main' }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="/components-overview/buttons" target="_blank">
                      <ListItemButton component="span">
                        <ListItemIcon>
                          <Minus color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText primary="All Components" primaryTypographyProps={{ variant: 'h6', color: 'secondary.main' }} />
                      </ListItemButton>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template"
                      target="_blank"
                    >
                      <ListItemButton component="span">
                        <ListItemIcon>
                          <Minus color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText primary="Free Version" primaryTypographyProps={{ variant: 'h6', color: 'secondary.main' }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="https://phoenixcoded.gitbook.io/able-pro/v/react/" target="_blank">
                      <ListItemButton component="span">
                        <ListItemIcon>
                          <Minus color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText primary="Documentation" primaryTypographyProps={{ variant: 'h6', color: 'secondary.main' }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="https://phoenixcoded.authordesk.app/" target="_blank">
                      <ListItemButton component="span">
                        <ListItemIcon>
                          <Minus color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText primary="Support" primaryTypographyProps={{ variant: 'h6', color: 'secondary.main' }} />
                      </ListItemButton>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="https://1.envato.market/c/1289604/275988/4415?subId1=phoenixcoded&u=https%3A%2F%2Fthemeforest.net%2Fitem%2Fable-pro-responsive-bootstrap-4-admin-template%2F19300403"
                      target="_blank"
                    >
                      <ListItemButton component="span">
                        <ListItemIcon>
                          <Minus color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText primary="Purchase Now" primaryTypographyProps={{ variant: 'h6', color: 'secondary.main' }} />
                        <Chip color="primary" label="v1.0" size="small" />
                      </ListItemButton>
                    </Link>
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

Header.propTypes = {
  layout: PropTypes.string
};

export default Header;
