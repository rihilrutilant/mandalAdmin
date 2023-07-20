import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./Pages/IntroPage";
import AdminLogin from "./Pages/AdminLogin";
import MukhyaMember from "./Pages/MukhyaMember";
import Demo from "./Pages/Demo";
import HeadLine from "./Pages/HeadLine";
import Slider from "./Pages/Slider";
import PageNotFound from "./Pages/PageNotFound";
import FetchData from "./Pages/FetchData";
import Notice from "./Pages/Notice";
import News from "./Pages/News";

function App() {
  const userData = sessionStorage.getItem("Admin_Token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!userData ? (
            <>
              <Route path="/admin_login" element={<AdminLogin />} />
              <Route path="/" element={<IntroPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<IntroPage />} />
              <Route path="/admin_login" element={<AdminLogin />} />
              <Route path="/mukhiya_member" element={<MukhyaMember />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/headline" element={<HeadLine />} />
              <Route path="/slider" element={<Slider />} />
              <Route path="/fetchdata" element={<FetchData />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/news" element={<News />} />
            </>
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
