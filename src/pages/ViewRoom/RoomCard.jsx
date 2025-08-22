import styles from "./RoomSelection.module.scss";
import {
  FaUsers,
  FaRulerCombined,
  FaBed,
  FaCity,
  FaSmokingBan,
  FaWind,
  
} from "react-icons/fa";
const RoomCard = () => {
  return (
    <div className={styles["room-card"]}>
      {/* Hình ảnh */}
      <div className={styles["room-image"]}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/455020064.jpg"
          alt="Wink Luxe Cityview"
        />
      </div>

      {/* Thông tin phòng */}
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

        {/* Gói dịch vụ */}
        <div className={styles["room-package"]}>
          <h4>Room and Breakfast</h4>
          <ul>
            <li>🍳 Đã BAO GỒM ăn sáng</li>
            <li>❌ Chính sách huỷ bỏ</li>
            <li>💳 Thanh toán: Thẻ ngân hàng</li>
            <li>🎁 BAO GỒM: Wink Anytime: 24/7 Perks That Don’t Sleep</li>
          </ul>

          <div className={styles["price-box"]}>
            <p className={styles["sub-price"]}>
              Đăng ký và thanh toán <b>1.377.000₫</b>
            </p>
            <p className={styles["main-price"]}>
              <span className={styles["old-price"]}>1.700.000₫</span>
              <span className={styles["discount"]}>-10%</span>
              <span className={styles["final-price"]}>1.530.000₫</span>
            </p>
            <button className={styles["choose-btn"]}>Chọn</button>
          </div>

          <button className={styles["view-all-btn"]}>
            Xem tất cả các gói ⌄
          </button>
        </div>
      </div>

      {/* Booking box */}
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
  );
};
export default RoomCard;
