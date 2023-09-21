import Landing from "./pages/landing/landing";
import Contact from "./pages/contact/contact";
import Register from "./pages/register/register";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Landing />} path='/' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<Register />} path='/register' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
