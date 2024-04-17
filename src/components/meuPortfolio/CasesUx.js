import { useState } from 'react';
import { Divider, CardContent, Modal, Stack, Typography, Grid, Button, TextField, FormControl, InputLabel, Box, IconButton } from '@mui/material';

import { GalleryImport } from 'iconsax-react';

import MainCard from 'components/MainCard';

const CasesUx = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleUploadClick = () => {
        const fileInput = document.getElementById('contained-button-file');
        fileInput.click();
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography variant="h3">Meus Cases de UX</Typography>
                </Grid>
                <Grid item xs={2} justifyContent="flex-end">
                    <Button variant="contained" color="warning" onClick={handleOpen}>Adicionar Case</Button>
                </Grid>
            </Grid>

            <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
                <MainCard title="Adicionar Case de UX" modal darkTitle content={false}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Box className="box-case" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <input
                                        accept="image/*"
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        style={{ display: 'none' }}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <IconButton variant="contained" component="span" aria-label="upload picture" onClick={handleUploadClick}>
                                            <GalleryImport />
                                        </IconButton>
                                        <Typography>Upload</Typography>
                                    </label>
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
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
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
                        <Button color="secondary" size="small" onClick={handleClose}>
                        Cancelar
                        </Button>
                        <Button variant="contained" color="warning">Adicionar Case</Button>
                    </Stack>
                </MainCard>
            </Modal>
        </>
    )
};

export default CasesUx;