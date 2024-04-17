import MainCard from 'components/MainCard';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const dataRemuneracao = [
    {
        title: 'Salário base',
        labelSalario: 'R$4.000,00',
        labelAvgSalario: 'R$5.200,00'
    },
    {
        title: 'Benefícios',
        labelSalario: 'R$4.000,00',
        labelAvgSalario: 'R$5.200,00'
    },
    {
        title: 'Bônus anual ou PLR',
        labelSalario: 'R$4.000,00',
        labelAvgSalario: 'R$5.200,00'
    }
]
const RemuneracaoMercado = () => {

    const theme = useTheme();

    return (
        <Grid container spacing={2}>
            {dataRemuneracao.map((item, index) => (
                <Grid item xs={4} key={index}>
                    <MainCard shadow={theme.customShadows.z1} sx={{ height: '100%' }}>
                        <Typography variant="h6" sx={{ marginBottom: 2}}>
                            {item.title}
                        </Typography>
                        <Typography sx={{ marginBottom: 1}}>Eu: {item.labelSalario}</Typography>
                        <Typography>Média: {item.labelAvgSalario}</Typography>
                    </MainCard>
                </Grid>
            ))}
        </Grid>
    );
}

export default RemuneracaoMercado;
