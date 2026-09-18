import { Routes, Route, BrowserRouter } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";

import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

       
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;