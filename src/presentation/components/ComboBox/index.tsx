import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export const schools = [
  { label: 'Paulista Institução de Ensino' },
  { label: 'Colégio La Salle Abel' },
];
interface Props {
  onChange?: () => void;
}
export default function ComboBox({ onChange }: Props) {
  return (
    <Autocomplete
      style={{ marginBottom: '1rem', background: '#fff' }}
      id="combo-box"
      data-testId="autocomplete"
      size="small"
      fullWidth
      onChange={onChange}
      options={schools}
      renderInput={(params) => (
        <TextField {...params} label="Selecione uma escola" />
      )}
    />
  );
}
