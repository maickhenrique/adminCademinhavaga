import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import PontosDeExperiencia from './PontoDeExperiencia';
import ComparativoHabilidade from './ComparativoHabilidade';
import RemuneracaoMercado from './RemuneracaoMercado';
import MeuGrafico from './MeuGrafico';
import { Award, Graph, DollarSquare } from 'iconsax-react';
import MainCard from 'components/MainCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  value: PropTypes.number
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function MenuComparativoMercado({ activeTab }) {
  const [value, setValue] = useState(activeTab || 0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <MainCard>
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Award /><Tab label="Pontos de Experiência" {...a11yProps(0)} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Graph /><Tab label="Meu Perfil UX" {...a11yProps(1)} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <DollarSquare /><Tab label="Remuneração" {...a11yProps(1)} />
        </Box>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ComparativoHabilidade />
      </TabPanel>
      <TabPanel value={value} index={0}>
        <PontosDeExperiencia />
      </TabPanel>
      <TabPanel value={value} index={0}>
        <RemuneracaoMercado />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MeuGrafico />
      </TabPanel>
    </Box>
    </MainCard>
  
    </>
  );
}

MenuComparativoMercado.propTypes = {
  activeTab: PropTypes.number
};
