import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import LoginPage from "./LoginPage.jsx";
import TestButtons from "./TestButtons.jsx";

function Layout() {
    return (
        <div>
            <Header/>
            <LoginPage/>
            <TestButtons/>
        </div>
    )
}

export default Layout