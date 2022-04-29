import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/LoginContext";
import Header from "./Header";
import LoginPage from "./pages/LoginPage";
import PostsPage from "./pages/PostsPage";
import RegisterPage from "./pages/RegisterPage";
import StartPage from "./pages/StartPage";

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
              <Route path="/posts" element={<PostsPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default Layout;
