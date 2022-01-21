
import { AvatarWrapper, AvatarImage } from './styles'

interface Props {
  imagePath?: string
}

export const Avatar = ({ imagePath }: Props) => (
  <AvatarWrapper>
    {imagePath ? <AvatarImage src={imagePath} /> : ''}
  </AvatarWrapper>
)