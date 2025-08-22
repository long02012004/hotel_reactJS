import styles from "./RoomSelection.module.scss";
import {
  FaUsers,
  FaRulerCombined,
  FaBed,
  FaCity,
  FaSmokingBan,
  FaWind,
  FaDog,
} from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { CiWifiOn } from "react-icons/ci";

const RoomCard = ({
  image,
  title,
  guests,
  size,
  beds,
  view,
  address,
  desc,
  price,
  oldPrice,
  discount,
  booking,
}) => {
  return (
    <div className={styles["room-card"]}>
      {/* Hình ảnh */}
      <div className={styles["room-image"]}>
        <img src={image} alt={title} />
      </div>

      {/* Thông tin phòng */}
      <div className={styles["room-info"]}>
        <h3>{title}</h3>
        <div className={styles["sub-info"]}>
          <div>
            <FaUsers /> tối đa {guests} khách &nbsp;&nbsp;
          </div>
          <div>
            <FaRulerCombined /> {size} m²
          </div>
        </div>

        <div className={styles["features"]}>
          {beds.map((bed, i) => (
            <span key={i}>
              <FaBed /> {bed}
            </span>
          ))}
          <span>
            <FaCity /> {view}
          </span>
          <span>
            <FaSmokingBan /> Phòng không hút thuốc
          </span>
          <span>
            <FaWind /> Máy sấy tóc
          </span>
          <span>
            <TbAirConditioning /> Máy lạnh
          </span>
          <span>
            <CiWifiOn /> Wifi miễn phí
          </span>
          <span>
            {" "}
            <FaDog />
            Cho phép thú cưng
          </span>
        </div>

        <p className={styles["address"]}>{address}</p>
        <p className={styles["desc"]}>{desc}</p>

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
              Đăng ký và thanh toán <b>{price}₫</b>
            </p>
            <p className={styles["main-price"]}>
              <span className={styles["old-price"]}>{oldPrice}₫</span>
              <span className={styles["discount"]}>-{discount}%</span>
              <span className={styles["final-price"]}>{price}₫</span>
            </p>
            <button className={styles["choose-btn"]}>Chọn</button>
          </div>
        </div>
      </div>

      {/* Booking box */}
      <div className={styles["booking-box"]}>
        <h4>Đơn đặt phòng của tôi</h4>
        <div className={styles["stay-info"]}>
          <p>{booking.nights} đêm</p>
          <p>
            <b>{booking.checkIn}</b> — <b>{booking.checkOut}</b>
            <br />
            {booking.checkInDetail}
            <br />
            {booking.checkOutDetail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
