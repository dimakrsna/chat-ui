import TextareaAutosize from 'react-textarea-autosize'
import { ReactSVG } from 'react-svg'
import stapleIcon from '../../../assets/svg/staple.svg'
import {
  ChatFormWrapper,
  FormButton,
  InputWrapper,
  InputFile,
  FileButton,
} from './styles'

export const ChatForm = () => {

  return (
    <ChatFormWrapper>
      <InputFile type="file" id="file-btn" />
      <InputWrapper>
        <TextareaAutosize placeholder='Napište zprávu' maxRows={4} />
        <FileButton htmlFor="file-btn">
          <ReactSVG src={stapleIcon} />
        </FileButton>
      </InputWrapper>
      <FormButton>Odeslat</FormButton>
    </ChatFormWrapper>
  )
}