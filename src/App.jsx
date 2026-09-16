import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PublicLayout from "./layouts/PublicLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={PublicLayout} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
