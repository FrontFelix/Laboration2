
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import LoginPage from "./pages/LoginPage";
import StartPage from "./pages/StartPage";
import AdminPage from "./pages/AdminPage";
import PostsPage from "./pages/PostsPage";
import RegisterPage from "./pages/RegisterPage"
import TestPage from "./pages/TestPage.js";
import TestButtons from "./TestButtons.js";
// import { LoginProvider } from "./contexts/LoginContext"

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
