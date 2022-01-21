import { PageTitle } from '../components/UI/atoms/PageTitle'
import { RecipientsList } from '../components/UI/organisms/Chat/RecipientsList'
import { MessagesList } from '../components/UI/organisms/Chat/MessagesList'
import {
  PageWrapper,
  ChatWrapper,
} from './styles'

export const Chat = () => {
  return (
    <PageWrapper displayName="PageWrapper">
      <PageTitle title="Messages" />
      <ChatWrapper>
        <RecipientsList />
        <MessagesList />
      </ChatWrapper>
    </PageWrapper>
  )
} 