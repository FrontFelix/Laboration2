import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import LoginPage from "./pages/LoginPage";
import StartPage from "./pages/StartPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import RegisterPage from "./pages/RegisterPage"
import { LoginProvider } from "./contexts/LoginContext"

function Layout() {
  return (
      <BrowserRouter>
        <Header />
        <div className="layout-div">
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/posts" element={<PostsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default Layout;
