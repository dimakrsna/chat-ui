import { Recipient } from "../../molecules/Recipient"
import { RecipientsListWrapper } from './styles'

export const RecipientsList = () => {
  return (
    <RecipientsListWrapper>
      <Recipient
        message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis"
        userName="Skládka Recyklace s.r.o."
        avatarPath="https://picsum.photos/100/100"
        time='2022-01-18T16:00:00.000Z'
        id="123b1k23b12kj3b1k2jb3"
      />
      <Recipient
        message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis"
        userName="Skládka Recyklace Recyklace Recyklace"
        avatarPath="https://picsum.photos/100/100"
        time='2022-01-20T16:00:00.000Z'
        id="123b1k23b12kj3b1k2jb3"
      />
      <Recipient
        message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis"
        userName="Skládka Recyklace Recyklace Recyklace"
        avatarPath="https://picsum.photos/100/100"
        time='2022-01-20T16:00:00.000Z'
        id="123b1k23b12kj3b1k2jb3"
      />
    </RecipientsListWrapper>
  )
} 