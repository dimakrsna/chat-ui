import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chat } from './pages/Chat';
import { GlobalStyle } from './GlobalStyle'
import './assets/css/fonts.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Chat />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export const history = createBrowserHistory();

export default App
