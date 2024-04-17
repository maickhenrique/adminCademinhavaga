import { useState } from 'react';

import MainCard from "components/MainCard";
import { Divider, CardContent, Modal, Stack, Typography, Grid, Button} from '@mui/material';
import './style.css';

const DesativarEncerrarConta = () => {

    const [openDisable, setOpenDisable] = useState(false);
    const [openAccount, setOpenAccount] = useState(false);
    
    const handleOpenDisable = () => {
        setOpenDisable(true);
    };
    const handleCloseDisable = () => {
        setOpenDisable(false);
    };

    const handleOpen = () => {
        setOpenAccount(true);
    };
    const handleClose = () => {
        setOpenAccount(false);
    };

    return (
    <>
    <MainCard>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <MainCard className="card-configUser" sx={{ height: '100%' }}>
                    <Typography variant="h6">Desativar conta</Typography>
                    <Typography variant="caption" color="textSecondary">
                        Sua conta será desativada...
                    </Typography>
                    <Grid container justifyContent="flex-end" sx={{marginTop: -5}}>
                        <Button variant="contained" color="error" onClick={handleOpenDisable}>
                            Desativar conta
                        </Button>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <MainCard className="card-configUser" sx={{ height: '100%' }}>
                    <Typography variant="h6">Encerrar conta</Typography>
                    <Typography variant="caption" color="textSecondary">
                        Sua conta será encerrada de forma definitiva e você perderá todos os dados salvos nela.
                    </Typography>
                    <Grid container justifyContent="flex-end">
                        <Button variant="contained" color="error" sx={{marginTop: -5}} onClick={handleOpen}>
                            Encerrar conta
                        </Button>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    </MainCard>

    <Modal open={openDisable} onClose={handleCloseDisable} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <MainCard title="Desativar conta" modal darkTitle content={false}>
            <CardContent>
                <Typography>Tem certeza que deseja desativar sua conta temporariamente?</Typography>
            </CardContent>
            <Divider />
            <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
                <Button color="secondary" size="small" onClick={handleCloseDisable}>
                Cancelar
                </Button>
                <Button variant="contained" color="error">Desativar conta</Button>
            </Stack>
        </MainCard>
    </Modal>

    <Modal open={openAccount} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <MainCard title="Encerrar conta" modal darkTitle content={false}>
            <CardContent>
                <Typography>Tem certeza que deseja encerrar sua conta deifinitivamente? Essa ação não poderá ser revertida.</Typography>
            </CardContent>
            <Divider />
            <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
                <Button color="secondary" size="small" onClick={handleClose}>
                Cancelar
                </Button>
                <Button variant="contained" color="error">Encerrar conta</Button>
            </Stack>
        </MainCard>
    </Modal>
    </>
);
}

export default DesativarEncerrarConta;
