import { useState } from 'react';

import {  Divider, CardContent, Modal, Stack, Typography, Grid, Button, TextField, FormControl, InputLabel } from '@mui/material';
import MainCard from 'components/MainCard';
import {  LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import './style.css';

// Dados JSON
const data = [
  {
    "titulo": "Título do Artigo 1",
    "descricao": "Descrição do Artigo 1",
    "data": "2024-02-09"
  },
  {
    "titulo": "Título do Artigo 2",
    "descricao": "Descrição do Artigo 2",
    "data": "2024-02-10"
  },
  {
    "titulo": "Título do Artigo 3",
    "descricao": "Descrição do Artigo 3",
    "data": "2024-02-11"
  }
];


const ArtigoUx = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography variant="h3">Meus Artigos sobre UX</Typography>
                </Grid>
                <Grid item xs={2} container justifyContent="flex-end">
                    <Button variant="contained" color="warning" onClick={handleOpen}>Adicionar Artigo</Button>
                </Grid>
                {data.map((item, index) => (
                    <Grid  item xs={4} key={index}>
                        <MainCard className="card-artigo" sx={{ height: '100%' }}>
                            <Typography variant="h6">{item.titulo}</Typography>
                            <Typography variant="caption" color="textSecondary">
                                {item.descricao}
                            </Typography>
                            <Typography variant="body2"> {item.data}</Typography>
                        </MainCard>
                    </Grid>
                ))}
            </Grid>

            <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
                <MainCard title="Adicionar Artigos Sobre UX" modal darkTitle content={false}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl variant="standard" fullWidth>
                                    <Stack spacing={3}>
                                        <InputLabel shrink htmlFor="with-label-input">
                                            Título do case*
                                        </InputLabel>
                                        <TextField id="with-label-input" placeholder="Digite o título do case" />
                                    </Stack>
                                </FormControl>
                                <FormControl variant="standard" sx={{marginTop: 4}} fullWidth>
                                    <Stack spacing={3}>
                                        <InputLabel shrink htmlFor="with-label-input">
                                            Link do case*
                                        </InputLabel>
                                        <TextField id="with-label-input" placeholder="Digite o link do case" />
                                    </Stack>
                                </FormControl>
                                <LocalizationProvider dateAdapter={AdapterDateFns} >
                                    <Stack spacing={3} sx={{marginTop: 3}}>
                                        <InputLabel shrink htmlFor="with-label-input" sx={{ marginBottom: -3}}>
                                            Data do artigo*
                                        </InputLabel>
                                        <DesktopDatePicker 
                                            inputFormat="MM/dd/yyyy"
                                            value=""
                                            onChange=""
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                                <Stack spacing={3} sx={{marginTop: 3}}>
                                    <InputLabel shrink htmlFor="with-label-input" sx={{ marginBottom: -2}}>
                                        Breve descrição*
                                    </InputLabel>
                                <TextField
                                    id="outlined-multiline-static"
                                    fullWidth
                                    multiline
                                    rows={5}
                                    defaultValue="Descreva brevemente seu artigo"
                                />
                                </Stack>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
                        <Button color="secondary" size="small" onClick={handleClose}>
                        Cancelar
                        </Button>
                        <Button variant="contained" color="warning">Adicionar Artigo</Button>
                    </Stack>
                </MainCard>
            </Modal>
        </>
    )
};

export default ArtigoUx;
