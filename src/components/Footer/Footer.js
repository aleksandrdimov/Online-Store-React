import CreatedBy from "../common/CreatedBy/CreatedBy";
import "./Footer.scss";
import FooterContact from "./FooterContact/FooterContact";
import FooterFollow from "./FooterFollow/FotterFollow";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterItem from "./FooterItem/FooterItem";
import FooterPay from "./FooterPay/FooterPay";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__box">
          <FooterInfo />
          <FooterFollow />
          <FooterContact />
        </div>
        <div className="footer__container">
          <div>
            <h4 className="footer__item-title">Information</h4>
            <FooterItem />
          </div>
          <div>
            <h4 className="footer__item-title">Service</h4>
            <FooterItem />
          </div>
          <div>
            <h4 className="footer__item-title">My Account</h4>
            <FooterItem />
          </div>
          <div>
            <h4 className="footer__item-title">Our Offers</h4>
            <FooterItem />
          </div>
        </div>
        <div className="footer__pay">
          <CreatedBy />
          <FooterPay />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
