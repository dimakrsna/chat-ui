import styled from 'styled-components'

/* ---------- RECIPIENTS LIST ---------- */

export const RecipientsListWrapper = styled.div`
  overflow-y: auto;
  width: 380px;
  border-right: 1px solid #D9D9D9;
  height: 100%;
`

/* ---------- MESSAGES LIST ---------- */

export const MessagesWrapper = styled.div`
  width: calc(100% - 380px);
  display: flex;
  flex-direction: column;
`

export const MessagesListWrapper = styled.div`
  display: flex;
  height: calc(100% - 148px);
  overflow: auto;
  `

export const MessagesListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  padding: 0 24px;
`
