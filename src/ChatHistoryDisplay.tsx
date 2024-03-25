import { Stack } from "@mui/material";
import ChatItemDisplay from "./ChatItemDisplay";

interface ChatHistoryDisplayProps {
    chatItems: Array<ChatItem>;
}

const ChatHistoryDisplay: React.FC<ChatHistoryDisplayProps> = ({ chatItems }) => {
    return (
        <Stack direction="column" spacing={2}>
            {chatItems.map((chatItem) => (
                <ChatItemDisplay chatItem={chatItem}></ChatItemDisplay>
            ))}
        </Stack>
    );
}

export default ChatHistoryDisplay;