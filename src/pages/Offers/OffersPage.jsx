import React from "react";
import OfferCard from "./OfferCard";
import styles from "./OffersPage.module.scss";
import {
  offers,
  offers1,
  offers2,
  offers3,
  offers5,
  offers6,
  offers7,
} from "../../assets/images/img";

const OffersPage = () => {
  return (
    <div className={styles["landing-wrapper"]}>
      {/* --- Exclusive Offer --- */}
      <section className={styles["offer-section"]}>
        <h2 className={styles["title"]}>ƯU ĐÃI ĐỘC QUYỀN</h2>
        <h3 className={styles["sub-title"]}>
          DÀNH CHO DU KHÁCH VIỆT NAM VÀ EXPATS
        </h3>
        <p className={styles["time"]}>
          Thời gian áp dụng: đến hết ngày 29/08/2025
        </p>

        <div className={styles["offer-box"]}>
          <span>Ưu đãi lên tới 23% |</span>
          <span> Chỉ từ 5.490.000 VNĐ/2 khách</span>
        </div>

        <p className={styles["desc"]}>
          Nằm yên bình giữa những dãy núi hùng vĩ của Sapa, Topas Ecolodge là
          một chốn nghỉ dưỡng bình yên dành cho du khách đang kiếm tìm một kỳ
          nghỉ thư giãn giữa thiên nhiên. Chào đón một mùa hè rực rỡ trên núi và
          cùng người thương ghi dấu những kỷ niệm đáng nhớ dưới sắc trời xanh
          trong và thung lũng ruộng bậc thang độc đáo của Sapa.
        </p>

        <p className={styles["note"]}>
          Ưu đãi dành riêng cho du khách Việt Nam và người nước ngoài có thẻ cư
          trú tại Việt Nam.
        </p>

        <p className={styles["highlight"]}>
          <b>
            Đi càng đông, ở càng vui. Ở càng lâu, càng thêm nhiều ưu đãi đang
            chờ đón bạn!
          </b>
        </p>

        <button className={styles["btn"]}>LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN</button>
      </section>

      {/* --- Resort Gallery --- */}
      <section className={styles["gallery-section"]}>
        <div className={styles["gallery-header"]}>
          <div className={styles["top-gallery"]}>
            <img src={offers} alt="Resort view" />
            <img src={offers1} alt="Dinner view" />
            <img src={offers2} alt="Couple picnic" />
          </div>

          <p className={styles["desc"]}>
            Dù là Premium Executive Bungalow mộc mạc, ấm cúng, Suite Bungalow
            hai tầng thông thoáng với tầm nhìn núi rừng choáng ngợp hay Biệt thự
            hồ bơi sang trọng nhìn thẳng ra thung lũng ruộng bậc thang, hãy chọn
            cho mình một ngôi nhà nghỉ dưỡng mùa hè này và tận hưởng nhiều ưu
            đãi hấp dẫn cho kỳ nghỉ của bạn.
          </p>
        </div>

        <div className={styles["villa-list"]}>
          <div className={styles["villa-item"]}>
            <img src={offers3} alt="Pool Villa" />
            <p>Pool Villa</p>
          </div>
          <div className={styles["villa-item"]}>
            <img src={offers7} alt="Garden Suite Bungalow" />
            <p>Garden Suite Bungalow</p>
          </div>
          <div className={styles["villa-item"]}>
            <img src={offers5} alt="Deluxe Suite Bungalow" />
            <p>Deluxe Suite Bungalow</p>
          </div>
          <div className={styles["villa-item"]}>
            <img src={offers6} alt="Premium Executive Bungalow" />
            <p>Premium Executive Bungalow</p>
          </div>
        </div>

        <hr className={styles["divider"]} />
      </section>

      {/* voucher */}
      <div className={styles["wrapper-voucher"]}>
        <h2 className={styles["title"]}>
          ĐẶT VOUCHER TRƯỚC – CHỌN NGÀY ĐI SAU
        </h2>
        <p className={styles["time"]}>THỜI GIAN ÁP DỤNG: 06/05 – 29/08/2025</p>

        <table className={styles["voucher-table"]}>
          <thead>
            <tr>
              <th>HẠNG PHÒNG</th>
              <th>GIÁ KHUYẾN MÃI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Premium Executive Bungalow</td>
              <td>
                <strong>5.490.000 VNĐ</strong>
                <br />
                <span className={styles["old-price"]}>7.116.718 VNĐ</span>
              </td>
            </tr>
            <tr>
              <td>Garden Suite Bungalow</td>
              <td>
                <strong>7.990.000 VNĐ</strong>
                <br />
                <span className={styles["old-price"]}>10.351.590 VNĐ</span>
              </td>
            </tr>
            <tr>
              <td>Deluxe Suite Bungalow</td>
              <td>
                <strong>7.990.000 VNĐ</strong>
                <br />
                <span className={styles["old-price"]}>10.351.590 VNĐ</span>
              </td>
            </tr>
            <tr>
              <td>Pool Villa</td>
              <td>
                <strong>10.990.000 VNĐ</strong>
                <br />
                <span className={styles["old-price"]}>13.974.646 VNĐ</span>
              </td>
            </tr>
          </tbody>
        </table>

        <button className={styles["btn"]}>Đặt phòng ngay</button>
      </div>
      <div className={styles["offers-page"]}>
        <OfferCard
          title="Ưu đãi đặc biệt"
          items={[
            "Tặng 1 liệu trình tắm lá thuốc Dao Đỏ hoặc 30 phút massage khi ở từ 3 đêm trở lên (áp dụng tối đa 2 khách/phòng, không áp dụng cho trẻ em, phụ thu với người lớn thứ 3).",
            "Giảm 30% giá xe Topas Mountain Express khi đặt vé khứ hồi. ",
            "Lớp nghệ thuật tự làm dành cho trẻ em (thời gian linh hoạt, nhưng cần đặt trước ít nhất 5 tiếng). ",
            "Đồ uống chào mừng khi check in. ",
            "1 đêm nghỉ hạng phòng lựa chọn dành cho 2 khách, bao gồm bữa sáng buffet.",
            "Tặng 1 set gà mẹt cho bữa tối hoặc 1 gói classic mountain picnic (*) cho nhóm từ 3 phòng. ",
            "Tặng 1 bữa trưa set menu khi ở 2 đêm (tối đa 2 khách/phòng, phụ thu với trẻ em/người lớn thứ 3).",
          ]}
          image={offers1}
          showButton={false}
        />
        <OfferCard
          title="Ưu đãi đặc biệt"
          items={[
            "Happy hour: Mua 1 Tặng 1, tại Bể bơi vô cực, 16h00-18h00 hàng ngày.",
            "Đồ uống miễn phí khi hoàng hôn 17:00 – 18:00 hàng ngày.",
            "Dịch vụ dọn phòng buổi tối kèm quà ngọt.",
            "Miễn phí sử dụng bể bơi vô cực.",
            "Miễn phí sử dụng xe đạp.",
            "Miễn phí xe shuttle bus từ trung tâm Sa Pa theo lịch trình. Yêu cầu đặt chỗ trước ít nhất 24h. Xe đón trả tại số 015 Lê Văn Tám, Sapa.",
          ]}
          image={offers1}
          showButton={true}
          layout="row"
        />
      </div>
    </div>
  );
};

export default OffersPage;
