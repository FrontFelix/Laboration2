import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import LoginPage from "./LoginPage.jsx";
import TestButtons from "./TestButtons.jsx";
import StartPage from "./StartPage.jsx"
import AdminPage from "./AdminPage.jsx";

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <div className="layout-div">
        <Routes>
          <Route path="/" element={ <StartPage />}/>
          <Route path="/loginPage" element={ <LoginPage />}/>
          <Route path="/adminPage" element={ <AdminPage />}/>
        </Routes>
          <TestButtons />
      </div>
    </BrowserRouter>
  );
}

export default Layout;
