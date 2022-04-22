import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import LoginPage from "./LoginPage.jsx";
import TestButtons from "./TestButtons.jsx";
import StartPage from "./StartPage.jsx"
import AdminPage from "./AdminPage.jsx";
import PostsPage from "./PostsPage.jsx";

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <div className="layout-div">
          <TestButtons />
        <Routes>
          <Route path="/" element={ <StartPage />}/>
          <Route path="/login" element={ <LoginPage />}/>
          <Route path="/admin" element={ <AdminPage />}/>
          <Route path="/posts" element={ <PostsPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
