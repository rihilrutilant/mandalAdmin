import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./Pages/IntroPage";
import AdminLogin from "./Pages/AdminLogin";
import MukhyaMember from "./Pages/MukhyaMember";
import Demo from "./Pages/Demo";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/admin_login" element={<AdminLogin />} />
          <Route path="/mukhiya_member" element={<MukhyaMember/>} />
          <Route path="/demo" element={<Demo/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
