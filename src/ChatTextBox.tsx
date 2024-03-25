import TextField from '@mui/material/TextField';

export default function ChatTextBox() {
  return (
    <TextField 
      label="Send Message..." 
      multiline
      fullWidth
      maxRows={5}/>
  );
}