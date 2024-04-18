import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import PontosDeExperiencia from './pontos-de-experiencia';
import MeuGrafico from './meu-grafico';

import { Award, Graph } from 'iconsax-react';
import MinhasSubHabilidades from './habilidades';

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

export default function MenuHabilidade({ activeTab }) {
  const [value, setValue] = useState(activeTab || 0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Award /><Tab label="Pontos de Experiência" {...a11yProps(0)} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Graph /><Tab label="Meu Perfil UX" {...a11yProps(1)} />
        </Box>
        </Tabs>
        <Typography sx={{ alignSelf: 'flex-end', marginBottom: 1 }}>Pontos de Experiência: <span>234 pts</span></Typography>
      </Box>
      
      <TabPanel value={value} index={0}>
        <PontosDeExperiencia />
        <MinhasSubHabilidades />
        {/* <MinhasSubHabilidades />
        <MeuGrafico /> */}
        {/* <MeuGrafico /> */}
      </TabPanel>
      <TabPanel value={value} index={0}>
        <MeuGrafico />
        {/* <PontosDeExperiencia /> */}
      </TabPanel>
      <TabPanel value={value} index={0}>
        <MinhasSubHabilidades />
      </TabPanel>
    </Box>
  );
}

MenuHabilidade.propTypes = {
  activeTab: PropTypes.number
};
