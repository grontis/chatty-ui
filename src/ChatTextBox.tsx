import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ChatTextBox() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        label="Send Message..." 
        multiline
        maxRows={5}/>
    </Box>
  );
}