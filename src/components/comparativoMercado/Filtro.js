import MainCard from 'components/MainCard';
import { FormControl, InputLabel, Select, MenuItem, Typography, FormControlLabel, Checkbox, FormGroup } from '@mui/material';

const FiltroMenuComparativo = () => {
    return (
        <>
            <MainCard title="Filtro" sx={{ height: '100%' }}>
                <Typography sx={{marginBottom: 1}}>Cargo</Typography>
                <FormControl fullWidth sx={{marginBottom: 2}}>
                <InputLabel id="demo-simple-select-label">Teste Filtro</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value="" placeholder="Age" onChange="">
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <Typography sx={{marginBottom: 1}}>Senioridade</Typography>
                <FormControl fullWidth sx={{marginBottom: 2}}>
                <InputLabel id="demo-simple-select-label">Teste Filtro</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value="" placeholder="Age" onChange="">
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <Typography sx={{marginBottom: 1}}>Contrato</Typography>
                <FormControl fullWidth sx={{marginBottom: 2}}>
                <InputLabel id="demo-simple-select-label">Teste Filtro</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value="" placeholder="Age" onChange="">
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl component="fieldset">
                <FormGroup aria-label="position">
                    <FormControlLabel value="end" control={<Checkbox />} label="Minhas metas" labelPlacement="end" />
                    <FormControlLabel value="end" control={<Checkbox />} label="Abaixo da média" labelPlacement="end" />
                    <FormControlLabel value="end" control={<Checkbox />} label="Acima da média" labelPlacement="end" />
                </FormGroup>
                </FormControl>
            </MainCard>
        </>
    );
}

export default FiltroMenuComparativo;