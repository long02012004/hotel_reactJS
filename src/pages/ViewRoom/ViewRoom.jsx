import RoomHeader from "./RoomHeader";
import styles from "./ViewRoom.module.scss";
import RoomSelection from "./RoomSelection";
const ViewRoom = () => {
  return (
    <div className={styles["view-room"]}>
      <RoomHeader />
      <RoomSelection />
    </div>
  );
};

export default ViewRoom;
// // src/pages/ViewRoom/ViewRoom.jsx
