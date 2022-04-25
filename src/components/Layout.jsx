import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import LoginPage from "./pages/LoginPage";
import TestButtons from "./TestButtons.jsx";
import StartPage from "./pages/StartPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import TestPage from "./pages/TestPage.tsx";

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <div className="layout-div">
        <TestButtons />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/testpage" element={<TestPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
