import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/login/index';
import Chat from './pages/chat/index';
import Room from './pages/room/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Room />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/chat/:room" element={<Chat />}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App