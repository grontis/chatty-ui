import { Stack } from '@mui/material'
import ChatTextBox from './ChatTextBox'
import SendMessageButton from './SendMessageButton'
import ChatHistoryDisplay from './ChatHistoryDisplay'
import ChatHistoryMock from './ChatHistoryMock'

function App() {
  return (
    <>
      <Stack direction="column" spacing={2}>
        <ChatHistoryDisplay chatItems={ChatHistoryMock}></ChatHistoryDisplay>

        <Stack direction="row" spacing={2}>
          <ChatTextBox></ChatTextBox>
          <SendMessageButton></SendMessageButton>
        </Stack>
      </Stack>
    </>
  )
}

export default App
