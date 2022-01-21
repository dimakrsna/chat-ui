import { 
  TitleWrapper,
  Title
} from './styles'

interface Props {
  title: string
}

export const PageTitle = ({ title }: Props) => (
  <TitleWrapper>
    <Title>{title}</Title>
  </TitleWrapper>
)