import MainCard from 'components/MainCard';
import { Typography, Grid, Chip, Box, Switch } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import './style.css';

const ComparativoHabilidade = () => {
    
    // const theme = useTheme();

    return (
        <>
            <Grid container spacing={2} justifyContent="flex-end">
                <Grid item xs={12}>
                    <MainCard sx={{ height: '100%', bgcolor: 'secondary.lighter' }}>
                        <Typography variant="h6">Habilidade &nbsp;
                            <Chip label="nova" variant="outlined" color='warning' />
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            Texto auxiliar da habilidade
                        </Typography>
                        <Grid container className="grid-comparativo" justifyContent="flex-end">
                            <Grid item>
                                <Box className="box-comparativo">5</Box>
                                <Typography className="text-comparativo">você</Typography>
                            </Grid>
                            <Grid item>
                                <Box className="box-comparativo">10</Box>
                                <Typography className="text-comparativo">média</Typography>
                            </Grid>
                            <Grid item>
                                <Switch defaultChecked color="warning" />
                                <Typography className="text-meta">Meta</Typography>
                            </Grid>
                        </Grid>
                    </MainCard>
                </Grid>
            </Grid>
        </>
    )
};

export default ComparativoHabilidade;
