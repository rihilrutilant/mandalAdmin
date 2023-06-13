import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./Pages/IntroPage";
import AdminLogin from "./Pages/AdminLogin";
import MukhyaMember from "./Pages/MukhyaMember";
import Demo from "./Pages/Demo";
import HeadLine from "./Pages/HeadLine";
import Slider from "./Pages/Slider";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/admin_login" element={<AdminLogin />} />
          <Route path="/mukhiya_member" element={<MukhyaMember/>} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/headline" element={<HeadLine />} />
          <Route path="/slider" element={<Slider/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
