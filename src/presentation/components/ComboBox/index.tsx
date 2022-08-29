import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const schools = [
  { label: "Paulista Institução de Ensino", id: 1 },
  { label: "Colégio La Salle Abel", id: 2 },
];

export default function ComboBox(props: any) {
  return (
    <Autocomplete
      {...props}
      style={{ marginBottom: "1rem" }}
      disablePortal
      id="combo-box-demo"
      options={schools}
      renderInput={(params) => (
        <TextField {...params} label="Selecione uma escola" />
      )}
    />
  );
}
