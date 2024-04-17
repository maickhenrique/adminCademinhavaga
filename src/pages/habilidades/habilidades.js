import MainCard from 'components/MainCard';
import { useState } from 'react';
import { Typography, Chip, FormControl, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';

const data = [
  {
    nome: 'Nome da habilidade 1',
    label: 'nova',
    descricao: 'Texto auxiliar da habilidade 1',
    color: 'warning'
  },
  {
    nome: 'Nome da habilidade 2',
    label: 'nova',
    descricao: 'Texto auxiliar da habilidade 2',
    color: 'warning'
  },
  {
    nome: 'Nome da habilidade 3',
    label: 'nova',
    descricao: 'Texto auxiliar da habilidade 3',
    color: 'warning'
  },
  {
    nome: 'Nome da habilidade 4',
    label: 'nova',
    descricao: 'Texto auxiliar da habilidade 4',
    color: 'warning'
  },
  {
    nome: 'Nome da habilidade 5',
    label: 'nova',
    descricao: 'Texto auxiliar da habilidade 5',
    color: 'warning'
  },
  {
    nome: 'Nome da habilidade 6',
    label: 'nova',
    descricao: 'Texto auxiliar da habilidade 6',
    color: 'warning'
  },
];

const MinhasSubHabilidades = () => {
  const [selectedValues, setSelectedValues] = useState(Array(data.length).fill(''));

  const handleChange = (index, value) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = value;
    setSelectedValues(newSelectedValues);
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <MainCard sx={{ height: '100%', position: 'relative', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <div>
              <Typography variant="h6">
                {item.nome} &nbsp;
                {item.label && <Chip label={item.label} variant="outlined" color={item.color} />}
              </Typography>
              <br />
              <Typography>
                {item.descricao} &nbsp;
              </Typography>
            </div>
            <Box
              sx={{
                position: 'absolute',
                padding: '8px',
                right: 8,
                top: 20
              }}
            >
              <FormControl component="fieldset">
                <RadioGroup
                    aria-label={`opcaoConhecimento-${index}`}
                    defaultValue=""
                    name={`radio-buttons-group-${index}`}
                    row
                    value={selectedValues[index]}
                    onChange={(event) => handleChange(index, event.target.value)}
                    >
                    {[...Array(6).keys()].map((value) => (
                        <FormControlLabel key={value} value={String(value)} control={<Radio />} label={`${value}`} />
                    ))}
                </RadioGroup>

              </FormControl>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                padding: '8px',
                right: 20,
                top: 60
              }}
            >
                <Typography variant="body2">
                    {selectedValues[index] === '' ? 'Selecione uma opção de acordo com seu nível de experiência no assunto' : `Você selecionou a opção ${selectedValues[index]} para ${item.nome}`}
                </Typography>
            </Box>

          </MainCard>
          <br />
        </div>
      ))}
    </>
  );
};

export default MinhasSubHabilidades;
