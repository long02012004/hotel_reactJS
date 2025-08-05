import { useState } from "react";
import { Link, Outlet, useNavigate, NavLink } from "react-router-dom";
import { logo, avatar } from "../../assets/images/img";
import styles from "./Header.module.scss";

const Header = ({ isLoggedIn }) => {
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => setNavActive(!navActive);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
    window.location.reload(); // hoặc bạn có thể truyền hàm setIsLoggedIn(false)
  };

  return (
    <>
      <div className="header-container">
        <header className={styles.header}>
          <Link to="/home">
            <img
              src={logo}
              alt="Khách Sạn ABC"
              className={styles.header__logo}
            />
          </Link>
          <button className={styles.header__toggle} onClick={toggleNav}>
            &#9776;
          </button>
          <ul className={`${styles.nav} ${navActive ? styles.active : ""}`}>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/home">
                Trang chủ
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/food">
                Ẩm thực
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/convenient">
                Tiện Ích
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/blog">
                Blog
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/endow">
                Ưu Đãi
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/viewroom">
                Xem Phòng
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/contact">
                Liên hệ
              </NavLink>
            </li>

            <li className={`${styles.nav__item} ${styles.nav__lang}`}>
              <span className={styles.nav__link} tabIndex={0}>
                Tiếng Việt <i className="bx bx-chevron-down"></i>
                <ul className={styles.nav__subnav}>
                  <li>
                    <a href="#">Tiếng Anh</a>
                  </li>
                  <li>
                    <a href="#">Tiếng Hàn</a>
                  </li>
                  <li>
                    <a href="#">Tiếng Trung</a>
                  </li>
                </ul>
              </span>
            </li>

            {isLoggedIn ? (
              <>
                <li className={styles.nav__item}>
                  <Link className={styles.nav__link} to="/profile">
                    <img
                      src={avatar}
                      alt="Avatar"
                      className={styles.header__logo}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        marginRight: 8,
                      }}
                    />
                    <span>Quang Long</span>
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <button
                    className={styles.nav__link}
                    onClick={handleLogout}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Đăng xuất
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className={styles.nav__item}>
                  <Link className={styles.nav__btn} to="/login">
                    Đăng nhập
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <Link className={styles.nav__btn} to="/sign-up">
                    Đăng ký
                  </Link>
                </li>
              </>
            )}
          </ul>
        </header>
        
      </div>
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
};

export default Header;
