import { BrowserRouter, Routes, Route } from "react-router"

import MainLayout from "./components/MainLayout"
import Auth from "./components/Auth";
import Protected from "./components/Protected";
import Signin from "./components/Signin";
import Signup from './components/Signup';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/signin" element={<Signin />}></Route>
          <Route path="/auth/signup" element={<Signup />}></Route>
        </Route>
        <Route element={<Protected />}>
          <Route path="*" element={<MainLayout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
