import VideoHome from"../../assets/Video/videohome.mp4";
const Home = () => {
  return (
  <>
      <video  autoPlay loop muted >
        <source 
        src={VideoHome} 
        type="video/mp4" />
      </video>  
  </>
  );
};

export default Home;
