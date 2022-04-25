// import cookieSession from "cookie-session";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import LoginPage from "./LoginPage.jsx";
import TestButtons from "./TestButtons.jsx";
import Cookies from 'js-cookie';

function Layout() {
    console.log(Cookies.get('session'))
    return (
        <div>
            <Header/>
            <LoginPage/>
            <TestButtons/>
        </div>
    )
}

export default Layout