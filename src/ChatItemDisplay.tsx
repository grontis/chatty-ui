import { Divider, Stack, Typography } from "@mui/material";

interface ChatItemDisplayProps {
    chatItem: ChatItem;
}

const ChatItemDisplay: React.FC<ChatItemDisplayProps> = ({ chatItem }) => {
    return (
        <Stack
            p={2}
            sx={{border: '2px solid grey',
            borderRadius: '20px'}}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h6">{chatItem.user}</Typography>
                    <Typography variant="subtitle1">{chatItem.timestamp}</Typography>
                </Stack>
                <Divider/>
                <Typography variant="body2">{chatItem.text}</Typography>
        </Stack>
    );
}

export default ChatItemDisplay;