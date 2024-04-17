import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import {  DocumentText, Notepad2 } from 'iconsax-react';
import MainCard from 'components/MainCard';
import CasesUx from './CasesUx';
import ArtigoUx from './ArtigoUx';

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

export default function Portfolio({ activeTab }) {
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
                  <Notepad2 /><Tab label="Meus Cases de UX" {...a11yProps(0)} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <DocumentText /><Tab label="Meus Artigos Sobre UX" {...a11yProps(1)} />
              </Box>
          </Tabs>
        </Box>
        <TabPanel value={value} index={1}>
            <ArtigoUx />
        </TabPanel>
        <TabPanel value={value} index={0}>
            <CasesUx />
        </TabPanel>
    </Box>
    </MainCard>
  
    </>
  );
}

Portfolio.propTypes = {
  activeTab: PropTypes.number
};
