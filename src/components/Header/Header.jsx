import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, avatar } from "../../assets/images/img";
import styles from "./Header.module.scss";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => setNavActive(!navActive);

  return (
    <header className={styles.header}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${logo})` }} // đổi logo thành ảnh bạn muốn
      ></div>
      <Link to="/">
        <img src={logo} alt="Khách Sạn ABC" className={styles.header__logo} />
      </Link>
      <button className={styles.header__toggle} onClick={toggleNav}>
        &#9776;
      </button>
      <ul className={`${styles.nav} ${navActive ? styles.active : ""}`}>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/">
            Trang chủ
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/food">
            Ẩm thực
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/convenient">
            Tiện Ích
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/blog">
            Blog
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/endow">
            Ưu Đãi
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/view-room">
            Xem Phòng
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/contact">
            Liên hệ
          </Link>
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
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/profile">
            <img
              src={avatar}
              alt="Avatar"
              className={styles.header__logo}
              style={{ width: 30, height: 30, borderRadius: "50%" }}
            />
            <span>Quang Long</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;