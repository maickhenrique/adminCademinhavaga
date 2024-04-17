import MainCard from "components/MainCard";
import { Typography, Grid } from '@mui/material';

import './style.css';

const ConfiguracaoUsuario = () => (
    <>
        <MainCard>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <MainCard className="card-configUser" sx={{ height: '100%' }}>
                        <Typography variant="h6">Alterar senha</Typography>
                    </MainCard>
                </Grid>
                <Grid item xs={12}>
                    <MainCard className="card-configUser" sx={{ height: '100%' }}>
                        <Typography variant="h6">Encerrar conta</Typography>
                    </MainCard>
                </Grid>
            </Grid>
        </MainCard>
    </>
);

export default ConfiguracaoUsuario;