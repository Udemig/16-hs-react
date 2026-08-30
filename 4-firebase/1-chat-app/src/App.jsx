import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/index";
import Chat from "./pages/chat/index";
import Room from "./pages/room/index";
import Protected from "./components/protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Protected />}>
          <Route path="/" element={<Room />} />
          <Route path="/chat/:room" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
