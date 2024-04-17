import Grid from '@mui/material/Grid';
import MenuComparativoMercado from "../../components/comparativoMercado/MenuComparativo";
import FiltroMenuComparativo from '../../components/comparativoMercado/Filtro';

const MinhasHabilidades = () => (
    <Grid container spacing={2}>
        <Grid item xs={3}>
            <FiltroMenuComparativo />
        </Grid>
        <Grid item xs={9}>
            <MenuComparativoMercado />
        </Grid>
    </Grid>
);

export default MinhasHabilidades;
