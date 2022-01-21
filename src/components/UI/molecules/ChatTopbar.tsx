import { Avatar } from '../atoms/Avatar'
import { 
  ChatTopbarWrapper,
  ChatInfo,
  RecipientName,
  UserName,
} from './styles'

export const ChatTopbar = () => (
  <ChatTopbarWrapper>
    <Avatar imagePath='https://picsum.photos/100/100'/>
    <ChatInfo>
      <RecipientName className="topbar">Skládka Recyklace s.r.o.</RecipientName>
      <UserName>Martin Tuna</UserName>
    </ChatInfo>
  </ChatTopbarWrapper>
)