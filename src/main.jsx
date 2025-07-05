import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Thêm các import dưới đây (đúng đường dẫn tới các component của bạn)
import Contact from "./pages/Contact/Contact.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Convenient from "./pages/Convenient/Convenient.jsx";
import Endow from "./pages/Endow/Endow.jsx";
import Food from "./pages/Food/Food.jsx";
import Login from "./pages/Login/LogIn.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import ViewRoom from "./pages/ViewRoom/ViewRoom.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/convenient" element={<Convenient />} />
          <Route path="/endow" element={<Endow />} />
          <Route path="/food" element={<Food />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/viewroom" element={<ViewRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
