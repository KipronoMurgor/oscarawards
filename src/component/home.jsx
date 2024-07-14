//import myImage from "../assets/react.svg";

const Home = (props) => (
  <div className="main-content">
    <div className="container">
      <h2>{props.title}</h2>

      <div
        style={{
          width: 50,
          height: 50,
          backgroundColor: "white",
           backgroundImage: "url(/stat.jpg)",
          //backgroundImage: `url(${myImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>

      <div className="home-image"></div>
      <div className="thumbnail-container">
        <div className="home-thumbnail-1"></div>
        <div className="home-thumbnail-2"></div>
        <div className="home-thumbnail-3"></div>
      </div>
    </div>
  </div>
);

export default Home;
