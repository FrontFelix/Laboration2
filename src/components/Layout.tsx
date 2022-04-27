
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import LoginPage from "./pages/LoginPage";
import StartPage from "./pages/StartPage";
import AdminPage from "./pages/AdminPage";
import PostsPage from "./pages/PostsPage";
import RegisterPage from "./pages/RegisterPage"
<<<<<<< Updated upstream
import TestPage from "./pages/TestPage.js";
import TestButtons from "./TestButtons.js";
// import { LoginProvider } from "./contexts/LoginContext"
=======
import TestPage from "./pages/TestPage";
import TestButtons from "./TestButtons";
import { UserProvider } from "./contexts/LoginContext"
>>>>>>> Stashed changes

function Layout() {
  return (
    <div>
      <UserProvider>
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
      </UserProvider>
    </div>
  );
}

export default Layout;
