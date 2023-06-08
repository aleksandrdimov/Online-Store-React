import homeBannerPic from "../../../images/banner.png";
import "./HomeBanner.scss";

const HomeBanner = () => {
  return (
    <div className="home-banner__container">
      <img className="home-banner__picture" src={homeBannerPic} alt="banner" />
      <div className="home-banner__content">
        <h1 className="home-banner__title">
          Super Flash Sale
          <br /> 50% Off
        </h1>
      </div>
    </div>
  );
};
export default HomeBanner;
