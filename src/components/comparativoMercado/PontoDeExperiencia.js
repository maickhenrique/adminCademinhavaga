import MainCard from 'components/MainCard';
import { Typography, Chip, Box } from '@mui/material';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { useTheme } from '@mui/material/styles';
import './style.css';
// Dados em formato JSON
const data = [
  {
    nome: 'UX Research',
    label: '3 novas',
    total: 125,
    value: 35,
    color: 'error',
    valueAvg: 75,
    colorAvg: 'secondary',
    labelColor: 'warning'
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
    color: 'success',
    valueAvg: 25,
    colorAvg: 'secondary'
  },

];

const PontosDeExperiencia = () => {
  const theme = useTheme();
    return (
      <>
        {data.map((item, index) => (
          <div key={index}>
            <MainCard shadow={theme.customShadows.z1} sx={{ height: '100%', position: 'relative' }}>
              <Typography variant="h6">
                {item.nome} &nbsp;
                {item.label && <Chip label={item.label} variant="outlined" color={item.labelColor} />}
              </Typography>
              <br />
              <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Typography className='text-label'>Você</Typography>
                <div style={{ flex: 1, marginLeft: 9, marginRight: 'auto', textAlign: 'center' }}>
                  <LinearWithLabel value={item.value} color={item.color} sx={{height: 10, width: 550 }} />
                </div>
                <Box
                  sx={{
                    position: 'absolute',
                    right: 5,
                    backgroundColor: 'transparent',
                    padding: '8px',
                    color: '#fff'
                  }}
                >
                  {item.value}/{item.total} pts
                </Box>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Typography className='text-label'>Média</Typography>
                <div style={{ flex: 1, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                  <LinearWithLabel value={item.valueAvg} color={item.colorAvg} sx={{ height: 10, width:550 }} />
                </div>
                <Box
                  sx={{
                    position: 'absolute',
                    right: 5,
                    backgroundColor: 'transparent',
                    padding: '8px',
                    color: '#fff'
                  }}
                >
                  {item.value}/{item.total} pts
                </Box>
              </div>
            </MainCard>
            <br />
          </div>
        ))}
      </>
    );
  }

export default PontosDeExperiencia;
