import React from "react";
import styles from "./RoomSelection.module.scss";
import {
  FaUsers,
  FaRulerCombined,
  FaBed,
  FaCity,
  FaSmokingBan,
  FaWind,
} from "react-icons/fa";

const RoomSelection = () => {
  return (
    <div className={styles["room-wrapper"]}>
      {/* Title */}
      <h2 className={styles["section-title"]}>Chọn phòng</h2>

      {/* Banner */}
      <div className={styles["promo-banner"]}>
        <div className={styles["promo-left"]}>
          <h3>ĐẶT PHÒNG Ở GIÁ TỐT NHẤT!</h3>
          <ul>
            <li>Giảm thêm 10% cho khách hàng đăng ký thành viên</li>
            <li>Đảm bảo giá tốt nhất</li>
            <li>Ở trọn 24 giờ</li>
          </ul>
        </div>
        <div className={styles["promo-right"]}>
          <p>Giá tốt nhất của chúng tôi</p>
          <span>2.745.000 ₫</span>
        </div>
      </div>

      {/* Filter */}
      <div className={styles["filter-bar"]}>
        <button>Tùy chọn giường ⌄</button>
        <button>Hướng cửa sổ ⌄</button>
      </div>

      {/* Room Card */}
      <div className={styles["room-card"]}>
        <div className={styles["room-image"]}>
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/455020064.jpg"
            alt="Wink Luxe Cityview"
          />
        </div>

        <div className={styles["room-info"]}>
          <h3>Wink Luxe Cityview</h3>
          <p className={styles["sub-info"]}>
            <FaUsers /> tối đa 3 khách &nbsp;&nbsp; <FaRulerCombined /> 30 m²
          </p>

          <div className={styles["features"]}>
            <span>
              <FaBed /> Giường King size
            </span>
            <span>
              <FaBed /> Giường tầng
            </span>
            <span>
              <FaCity /> Quang cảnh thành phố
            </span>
            <span>
              <FaSmokingBan /> Phòng không hút thuốc
            </span>
            <span>
              <FaWind /> Máy sấy tóc
            </span>
            <span>+16</span>
          </div>

          <p className={styles["address"]}>
            550000, Da Nang, Hai Chau, 178 Tran Phu, Phuoc Ninh
          </p>

          <p className={styles["desc"]}>
            (30sqm) Located at upper floor with 1 King and 1 Bunk bed. Come
            together, stay together. Family Room with space to sprawl for
            families...
          </p>

          <button className={styles["more-btn"]}>Hiển thị thêm ⌄</button>
        </div>

        <div className={styles["booking-box"]}>
          <h4>Đơn đặt phòng của tôi</h4>
          <div className={styles["stay-info"]}>
            <p>1 đêm</p>
            <p>
              <b>21 tháng 8</b> — <b>22 tháng 8</b>
              <br />
              Thứ Năm từ lúc 14:00
              <br />
              Thứ Sáu đến 12:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
