import "./styles.css";
import Login from "./Login";
import {  ReactComponent as BannerImage } from '../../assets/banner.svg';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <Login />
          <div className="home-banner">
            <h1>Avalie Filmes</h1>
            <p>Diga o que você achou do seu filme favorito</p>
            <BannerImage/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
