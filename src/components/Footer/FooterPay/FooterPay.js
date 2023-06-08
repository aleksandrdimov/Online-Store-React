import westernUn from "../../../images/icon_western_union.svg";
import masterCard from "../../../images/icon_master_card.svg";
import payPal from "../../../images/icon_paypal.svg";
import visa from "../../../images/icon_visa.svg";

const FooterPay = () => {
  return (
    <div>
      <img className="footer__pay_item" src={westernUn} alt="westen union" />
      <img className="footer__pay_item" src={masterCard} alt="master card" />
      <img className="footer__pay_item" src={payPal} alt="paypal" />
      <img className="footer__pay_item" src={visa} alt="visa" />
    </div>
  );
};
export default FooterPay;
