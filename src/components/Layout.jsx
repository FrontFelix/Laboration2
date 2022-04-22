import Header from "./Header.jsx";
import LoginPage from "./LoginPage.jsx";
import TextButtons from "./TestButtons.jsx";
import TestPage from "./TestPage.tsx";

function Layout() {
  return (
    <div>
      <Header />
      <LoginPage />
      <TextButtons />
      <TestPage />
    </div>
  );
}

export default Layout;
