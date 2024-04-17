import { lazy } from 'react';

// project-imports
import MainLayout from 'layout/MainLayout';
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
// import AuthGuard from 'utils/route-guard/AuthGuard';

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/error/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/error/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon/coming-soon')));

const PaginaPrincipal = Loadable(lazy(() => import('pages/pagina-principal/index')));
const MinhasHabilidades = Loadable(lazy(() => import('pages/habilidades/minhas-habilidades')));
const MinhasSubHabilidades = Loadable(lazy(() => import('pages/habilidades/habilidades')));
const MenuComparativoMercado = Loadable(lazy(() => import('pages/comparativo-mercado/comparativo-de-mercado')));
const Portfolio = Loadable(lazy(() => import('pages/meu-portfolio/meu-portfolio')));
const ConfiguracaoUsuario = Loadable(lazy(() => import('pages/configuracao-usuario/configuracao-usuario')));
const AlterarSenha = Loadable(lazy(() => import('pages/configuracao-usuario/alterar-senha')));
const DesativarEncerrarConta = Loadable(lazy(() => import('pages/configuracao-usuario/status-conta')));
const PerfilUsuario = Loadable(lazy(() => import('pages/perfil-usuario/perfil')));
const Landing = Loadable(lazy(() => import('pages/landing')));
// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        // <AuthGuard>
         
        // </AuthGuard>
         <MainLayout />
      ),
      children: [
        {
          path: 'index',
          element: <PaginaPrincipal />
        },
        {
          path: 'minhas-habilidades',
          element: <MinhasHabilidades />
        },
        {
          path: 'habilidades',
          element: <MinhasSubHabilidades />
        },
        {
          path: 'comparativo-de-mercado',
          element: <MenuComparativoMercado />
        },
        {
          path: 'meu-portfolio',
          element: <Portfolio />
        },
        {
          path: 'configuracao-usuario',
          element: <ConfiguracaoUsuario />
        },
        {
          path: 'alterar-senha',
          element: <AlterarSenha />
        },
        {
          path: 'status-conta',
          element: <DesativarEncerrarConta />
        },
        {
          path: 'perfil-usuario',
          element: <PerfilUsuario />
        },
        {
          path: 'landing',
          element: <Landing />
        }
      ]
    },
    // {
    //   path: '/',
    //   element: <CommonLayout layout="landing" />,
    //   children: [
    //     {
    //       path: 'landing',
    //       element: <Landing />
    //     }
    //   ]
    // },
    {
      path: '/maintenance',
      element: <CommonLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        },
      ]
    }
  ]
};

export default MainRoutes;
