import { Fragment } from "react"; // Dùng cho trang không có Layout
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Convenient from "./pages/Convenient/Convenient";
import Endow from "./pages/Endow/Endow";
import Food from "./pages/Food/Food";
import Login from "./pages/LogIn/Login";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import ViewRoom from "./pages/ViewRoom/ViewRoom";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/convenient" element={<Convenient />} />
        <Route path="/endow" element={<Endow />} />
        <Route path="/food" element={<Food />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/viewroom" element={<ViewRoom />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
