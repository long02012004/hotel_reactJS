import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Tự động đọc trạng thái từ localStorage (nếu có)
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      {/*    <Footer /> */}
    </>
  );
}

export default App;
