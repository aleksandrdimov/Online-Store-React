import HomeBanner from "./HomeBanner/HomeBanner";
import HomeBestSeller from "./HomeBestSeller/HomeBestSeller";
import "./HomePage.scss";
import HomeTop from "./HomeTop/HomeTop";

const HomePage = () => {
  return (
    <section className="home">
      <HomeBanner />
      <HomeTop />
      <HomeBestSeller />
    </section>
  );
};
export default HomePage;
