import { ChatTopbar } from "../../molecules/ChatTopbar"
import { Message } from "../../molecules/Message"
import { ChatForm } from '../../molecules/ChatForm'
import {
  MessagesWrapper,
  MessagesListWrapper,
  MessagesListContent,
} from './styles'

export const MessagesList = () => (
  <MessagesWrapper>
    <ChatTopbar />
    <MessagesListWrapper>
      <MessagesListContent>
        <Message
          time="2022-01-20T16:00:00.000Z"
          message="Dobrý den, měl bych o folie zájem. Jestli jsou folie jsou barevné a lisované v balících, zajímalo by mě jak jsou velké, kvůli dopravě."
          type="inbox"
        />
        <Message
          time="2022-01-20T16:00:00.000Z"
          message="Dobrý den,  balíky mají rozměr cca 2 x 2 m."
          type="outbox"
        />
        <Message
          time="2022-01-21T16:00:00.000Z"
          message="Děkuji za upřesnění, rád se přijdu ještě osobně na odpad podívat v rámci prohlídky dne 19. 6. 2021 v 18:00 hod."
          type="inbox"
        />
      </MessagesListContent>
    </MessagesListWrapper>
    <ChatForm />
  </MessagesWrapper>
)