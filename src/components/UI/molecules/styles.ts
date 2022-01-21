import styled from 'styled-components'

/* ---------- RECIPIENT ---------- */ 

export const RecipientWrapper = styled.div`
  border-bottom: 1px solid #D9D9D9;
  padding: 16px 13px 18px 16px;
  background: #fff;
  transition: 0.25s;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #F4F4F4;
  }
`

export const RecipientName = styled.div`
  font-family: 'ProximaNova-Semibold';
  color: #FF0028;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Time = styled.span`
  color: #676767;
  font-size: 0.875rem;
  margin-left: auto;
`

export const MessageInfo = styled.div`
  padding-left: 16px;
  max-width: 230px;
`

export const MessagePreview = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

/* ---------- CHAT TOPBAR ---------- */ 

export const ChatTopbarWrapper = styled.header`
  width: 100%;
  height: 72px;
  padding: 0 16px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  border-bottom: 1px solid #D9D9D9;
`

export const ChatInfo = styled.div`
  padding-left: 16px;
  max-width: calc(100% - 100px);
`

export const UserName = styled.div`
  color: #0C0C0C;
  font-family: 'ProximaNova-Semibold';
`

/* ---------- MESSAGE ---------- */ 

export const MessageWrapper = styled.div`
  margin-bottom: 8px;
  font-family: 'ProximaNova-Light';
  width: 100%;
`

export const MessageTime = styled.div`
  width: 100%;
  font-size: 0.875rem;
  text-align: center;
  color: #676767;
`

export const MessageContent = styled.div`
  display: flex;

  &.inbox {
    justify-content: start;
  }

  &.outbox {
    justify-content: end;
  }
`

export const MessageText = styled.div`
  display: inline-flex;
  padding: 16px 24px;
  max-width: 80%;

  &.inbox {
    background: #F4F4F4;
    border-radius: 1px 24px 24px 24px;
    color: #0C0C0C;
  }
  
  &.outbox {
    background: #10A14C;
    border-radius: 24px 1px 24px 24px;
    color: #fff;
  }
`

/* ---------- CHAT FORM ---------- */ 

export const ChatFormWrapper = styled.form`
  padding: 16px 24px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: end;
`

export const FormButton = styled.button`
  width: 112px;
  height: 44px;
  background: #FF0028;
  border-radius: 24px;
  color: #fff;
  font-size: 1.125rem;
  cursor: pointer;
  font-family: 'ProximaNova-Bold';
`

export const InputWrapper = styled.div`
  border: 1px solid #D9D9D9;
  border-radius: 24px;
  min-height: 44px;
  width: calc(100% - 120px);
  padding: 10px 50px 10px 24px;
  display: flex;
  align-items: center;
  position: relative;

  textarea {
    border: none;
    outline: none;
    resize: none;
    width: 100%;
    font-family: 'ProximaNova-Regular';
    font-size: 1rem;
  }
`

export const InputFile = styled.input`
  display: none;
`

export const FileButton = styled.label`
  cursor: pointer;
  margin-left: auto;
  position: absolute;
  bottom: 3px;
  right: 13px;
`