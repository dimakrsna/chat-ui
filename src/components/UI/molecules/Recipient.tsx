import React from 'react'
import dayjs from 'dayjs'
import { Avatar } from '../atoms/Avatar'
import {
  RecipientWrapper,
  RecipientName,
  MessagePreview,
  Time,
  MessageInfo,
} from './styles'

interface Props {
  message: string
  userName: string
  avatarPath?: string
  time: string
  id: string
}

export const Recipient = React.memo(({ message, userName, avatarPath, time }: Props) => {
  const messageTime = dayjs(time)
  const nowTime = dayjs(new Date())

  return (
    <RecipientWrapper>
      <Avatar imagePath={avatarPath} />
      <MessageInfo>
        <RecipientName>{userName}</RecipientName>
        <MessagePreview>{message}</MessagePreview>
      </MessageInfo>
      <Time>{
        messageTime.diff(nowTime, 'days') < 0 ?
          messageTime.format('DD.MM.YY') :
          messageTime.format('HH:mm')
      }</Time>
    </RecipientWrapper>
  )
})