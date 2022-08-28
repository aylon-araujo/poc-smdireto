import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const top100Films = [{ label: "Paulista Institução de Ensino", year: 1994 }];

export default function ComboBox(props: any) {
  return (
    <Autocomplete
      {...props}
      style={{ marginBottom: "1rem" }}
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      renderInput={(params) => (
        <TextField {...params} label="Selecione uma escola" />
      )}
    />
  );
}
