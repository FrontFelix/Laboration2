import Cookies from 'js-cookie';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import LoginPage from "./LoginPage.jsx";
import TestButtons from "./TestButtons.jsx";
import StartPage from "./StartPage.jsx";
import AdminPage from "./AdminPage.jsx";
import PostsPage from "./PostsPage.jsx";
import TestPage from "./TestPage.tsx";
import RegisterPage from "./RegisterPage.jsx";

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <TestButtons />
      <div className="layout-div">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/testPage" element={<TestPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
