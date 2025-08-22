import React from "react";
import styles from "./RoomSelection.module.scss";
import { FaCheck } from "react-icons/fa";
import RoomCard from "./RoomCard";

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
      </div>

      {/* Filter */}
      <div className={styles["filter-bar"]}>
        <button>
          <p>Tùy chọn giường</p> <FaCheck />
        </button>
        <button>
          <p>Hướng cửa sổ</p> <FaCheck />
        </button>
      </div>

      {/* Room Card */}
      <div className={styles["room-list"]}>
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
    </div>
  );
};

export default RoomSelection;
