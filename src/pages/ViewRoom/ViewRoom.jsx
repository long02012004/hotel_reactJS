import RoomHeader from "./RoomHeader";
import styles from "./ViewRoom.module.scss";
import RoomSelection from "./RoomSelection";
const ViewRoom = () => {
  return (
    <div className={styles["view-room"]}>
      <RoomHeader />
      <div className={styles["room-selection"]}>
        <RoomSelection />
      </div>
    </div>
  );
};

export default ViewRoom;
// // src/pages/ViewRoom/ViewRoom.jsx
