
import dayjs from 'dayjs'
import {
  MessageWrapper,
  MessageTime,
  MessageContent,
  MessageText,
} from './styles'

interface Props {
  time: string
  message: string
  type: 'inbox' | 'outbox'
}

export const Message = ({ time, message, type }: Props) => {

  const messageTime = dayjs(time)
  const nowTime = dayjs(new Date())

  return (
    <MessageWrapper>
      <MessageTime>{
        messageTime.diff(nowTime, 'days') < 0 ?
          messageTime.format('DD.MM.YY HH:mm') :
          messageTime.format('HH:mm')
      }</MessageTime>
      <MessageContent className={type}>
        <MessageText className={type}>
          {message}
        </MessageText>
      </MessageContent>
    </MessageWrapper>
  )
}