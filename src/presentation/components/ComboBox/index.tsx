import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const schools = [
  { label: 'Paulista Institução de Ensino', id: 1 },
  { label: 'Colégio La Salle Abel', id: 2 },
];

export default function ComboBox() {
  return (
    <Autocomplete
      style={{ marginBottom: '1rem', background: '#fff' }}
      disablePortal
      size="small"
      fullWidth
      id="combo-box-demo"
      options={schools}
      renderInput={(params) => (
        <TextField {...params} label="Selecione uma escola" />
      )}
    />
  );
}
