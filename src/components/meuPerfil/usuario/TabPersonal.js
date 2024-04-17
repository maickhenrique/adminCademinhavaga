import {
  Autocomplete,
  Box,
  Button,
  CardHeader,
  Divider,
  Grid,
  InputLabel,
  Stack,
  TextField
} from '@mui/material';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import countries from '../../../sections/auth/auth-forms/countries';

import MainCard from 'components/MainCard';

// ==============================|| USER PROFILE - PERSONAL ||============================== //

const TabPersonal = () => {
//   const handleChangeDay = (event, date, setFieldValue) => {
//     setFieldValue('dob', new Date(date.setDate(parseInt(event.target.value, 10))));
//   };

//   const handleChangeMonth = (event, date, setFieldValue) => {
//     setFieldValue('dob', new Date(date.setMonth(parseInt(event.target.value, 10))));
//   };

//   const maxDate = new Date();
//   maxDate.setFullYear(maxDate.getFullYear() - 18);

  return (
    <MainCard content={false} title="Informações Pessoais" sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
      <form noValidate>
        <Box sx={{ p: 2.5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-first-name">Nome*</InputLabel>
                <TextField
                  fullWidth
                  placeholder="First Name"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-last-name">Sobrenome*</InputLabel>
                <TextField
                  fullWidth
                  placeholder="Sobrenome"
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <CardHeader title="Address" />
        <Divider />
        <Box sx={{ p: 2.5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-country">País*</InputLabel>
                <Autocomplete
                  id="personal-country"
                  fullWidth
                  value=""
                  onChange={(event, newValue) => {
                    setFieldValue('country', newValue === null ? '' : newValue.code);
                  }}
                  options={countries}
                  autoHighlight
                  isOptionEqualToValue={(option, value) => option.code === value?.code}
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                      {option.code && (
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          alt=""
                        />
                      )}
                      {option.label}
                      {option.code && `(${option.code}) ${option.phone}`}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Choose a country"
                      name="country"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password' // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-state">Estado*</InputLabel>
                <TextField
                  fullWidth
                  id="personal-state"
                  value=""
                  name="state"
                  placeholder="State"
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{ mt: 2.5 }}>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Stack>
      </form>
    </MainCard>
  );  
}

export default TabPersonal;
