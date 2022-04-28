import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import LoginPage from "./pages/LoginPage";
import StartPage from "./pages/StartPage";
import AdminPage from "./pages/AdminPage";
import PostsPage from "./pages/PostsPage";
import RegisterPage from "./pages/RegisterPage"
// import TestPage from "./pages/TestPage";
import TestButtons from "./TestButtons";
import { UserProvider } from "./contexts/LoginContext"

function Layout() {
  return (
    <div>
      <UserProvider>
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
      </UserProvider>
    </div>
  );
}

export default Layout;
