import MainCard from 'components/MainCard';
import { Typography, Chip, Box } from '@mui/material';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

// Dados em formato JSON
const data = [
  {
    nome: 'UX Research',
    label: '3 novas',
    total: 125,
    value: 35,
    color: 'warning'
  },
  {
    nome: 'UI Design',
    label: '',
    total: 125,
    value: 50,
    color: 'warning'
  },
  {
    nome: 'UX Writing ',
    label: '5 novas',
    total: 125,
    value: 70,
    color: 'warning'
  },
  {
    nome: 'Desenvolvimento ',
    label: '',
    total: 125,
    value: 70,
    color: 'warning'
  },

];

const PontosDeExperiencia = () => {
    return (
      <>
        {data.map((item, index) => (
          <div key={index}>
            <MainCard sx={{ height: '100%', position: 'relative' }}>
              <Typography variant="h6">
                {item.nome} &nbsp;
                {item.label && <Chip label={item.label} variant="outlined" color={item.color} />}
              </Typography>
              <br />
              <LinearWithLabel value={item.value} color={item.color} sx={{ height: 10 }} />
              <Box
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: 25,
                  backgroundColor: 'transparent',
                  padding: '8px',
                  color: '#fff'
                }}
              >
                {item.value}/{item.total} pts
              </Box>
            </MainCard>
            <br />
          </div>
        ))}
      </>
    );
  }

export default PontosDeExperiencia;
