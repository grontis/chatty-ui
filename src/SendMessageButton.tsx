import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function ChatTextBox() {
    return (
        <Button 
            variant="contained" 
            startIcon={<SendIcon/>}>
                Send
        </Button>
    );
  }