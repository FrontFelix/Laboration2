import Cookies from 'js-cookie';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import LoginPage from "./pages/LoginPage";
<<<<<<< Updated upstream:src/components/Layout.jsx
import TestButtons from "./TestButtons.jsx";
import StartPage from "./pages/StartPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import TestPage from "./pages/TestPage.tsx";
import RegisterPage from "./pages/RegisterPage"
=======
import StartPage from "./pages/StartPage";
import AdminPage from "./pages/AdminPage";
import PostsPage from "./pages/PostsPage";
import RegisterPage from "./pages/RegisterPage"
// import { LoginProvider } from "./contexts/LoginContext"
>>>>>>> Stashed changes:src/components/Layout.tsx

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
