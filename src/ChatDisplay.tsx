export default function ChatDisplay(chatItem: ChatItem) {
    return (
        <div>
            <p>{chatItem.user}</p>
            <p>{chatItem.text}</p>
            <p>{chatItem.timestamp}</p>
        </div>
    );
}