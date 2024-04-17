import { FormattedMessage } from 'react-intl';

// assets
import { Home, Setting2, StatusUp, PresentionChart, Book, Profile } from 'iconsax-react';

// icons
const icons = {
  home: Home,
  settingsUser: Setting2,
  statusUp: StatusUp,
  presetationChart: PresentionChart,
  bookIcon: Book,
  profileIcon: Profile,
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const menu = {
  id: 'other',
  title: <FormattedMessage id="Menu" />,
  type: 'group',
  children: [
    {
      id: 'inicio',
      title: <FormattedMessage id="Início" />,
      type: 'item',
      url: '/index',
      icon: icons.home
    },
    {
      id: 'minhasHabilidades',
      title: <FormattedMessage id="Minhas Habilidades" />,
      type: 'item',
      url: '/minhas-habilidades',
      icon: icons.statusUp,
      external: true,
      target: false,
    },
    {
      id: 'comparativo',
      title: <FormattedMessage id="Comparativo de Mercado" />,
      type: 'item',
      url: '/comparativo-de-mercado',
      icon: icons.presetationChart,
      external: true,
      target: false
    },
    {
      id: 'portfolioConteudo',
      title: <FormattedMessage id="Meu Portfólio" />,
      type: 'item',
      url: '/meu-portfolio',
      icon: icons.bookIcon,
      external: true,
      target: false
    },
    {
      id: 'meuPerfil',
      title: <FormattedMessage id="Meu Perfil" />,
      type: 'item',
      url: '/perfil-usuario',
      icon: icons.profileIcon,
      external: true,
      target: false
    },
    {
      id: 'configuracoes',
      title: <FormattedMessage id="Configurações" />,
      type: 'item',
      url: '/configuracao-usuario',
      icon: icons.settingsUser,
      external: true,
      target: false
    }
  ]
};

export default menu;
