import { lazy } from 'react';

// project-imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/auth/auth1/entrar')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/auth1/register')));
const AuthForgotPassword = Loadable(lazy(() => import('pages/auth/auth1/forgot-password')));
const AuthCheckMail = Loadable(lazy(() => import('pages/auth/auth1/check-mail')));
const AuthResetPassword = Loadable(lazy(() => import('pages/auth/auth1/reset-password')));
const AuthCodeVerification = Loadable(lazy(() => import('pages/auth/auth1/code-verification')));
const PersonalDetails = Loadable(lazy(() => import ('pages/auth/auth1/informacoes-pessoais')));
const ProfessionalInformation = Loadable(lazy(() => import ('pages/auth/auth1/informacao-profissional')));

const Landing = Loadable(lazy(() => import('pages/landing')));

// ==============================|| AUTH ROUTES ||============================== //

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <GuestGuard>
          <CommonLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: '/',
          element: <Landing />
        },
        {
          path: 'entrar',
          element: <AuthLogin />
        },
        {
          path: 'cadastrar',
          element: <AuthRegister />
        },
        {
          path: 'forgot-password',
          element: <AuthForgotPassword />
        },
        {
          path: 'check-mail',
          element: <AuthCheckMail />
        },
        {
          path: 'reset-password',
          element: <AuthResetPassword />
        },
        {
          path: 'code-verification',
          element: <AuthCodeVerification />
        },
        {
          path: '/informacoes-pessoais',
          element: <PersonalDetails />
        },
        {
          path: '/informacao-profissional',
          element: <ProfessionalInformation />
        },
      ]
    }
  ]
};

export default LoginRoutes;
