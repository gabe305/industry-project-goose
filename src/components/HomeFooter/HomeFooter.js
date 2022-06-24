import React from "react";
import "./HomeFooter.scss";
import img from "../../assets/Images/discoverStore.png";
import icon from "../../assets/Icons/chevron.svg";
import logoCircle from "../../assets/Logos/logo-circle.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__discover">
          <h3 className="footer__subheader">DISCOVER YOUR NEAREST STORE</h3>
          <img
            className="footer__discover-img"
            src={img}
            alt="inside of store"
          />
          <p className="footer__discover-text">
            Experience our Canada Goose retail stores in person
          </p>
          <div className="footer__find-a-store">
            <p className="footer__find-a-store--text">Find a Store</p>
            <img
              className="footer__find-a-store--img"
              src={icon}
              alt="logo circle"
            />
          </div>
        </div>
        <div className="footer__column footer__help">
          <h3 className="footer__subheader footer__subheader-right">
            HOW CAN WE HELP?
          </h3>
          <p>Contact Us</p>
          <p>Shop Live</p>
          <p>Delivery</p>
          <p>Returns and Exchanges</p>
          <p>Product Care</p>
          <p>Warranty</p>
          <p>Size Charts</p>
          <p>Payment</p>
          <p>Klarna</p>
          <p>FAQs</p>
        </div>
        <div className="footer__column footer__products">
          <h3 className="footer__subheader footer__subheader-right">
            OUR PRODUCTS
          </h3>
          <p>Craftsmanship</p>
          <p>Customization</p>
          <p>Fusion Fit</p>
          <p>Counterfeit</p>
        </div>
        <div className="footer__column footer__more">
          <h3 className="footer__subheader footer__subheader-right">MORE</h3>
          <p>Locations</p>
          <p>Our History</p>
          <p>Press</p>
          <p>Canada Goose & Film</p>
          <p>Careers</p>
          <p>Gift Cards</p>
          <p>Investor Relations</p>
          <p>Workwear</p>
        </div>
        <div className="footer__inbox">
          <h3 className="footer__subheader footer__subheader-right">
            GET US IN YOUR INBOX
          </h3>
          <form className="footer__email">
            <div className="footer__form-group">
              <input
                className="footer__email-input"
                id="footerEmail"
                type="text"
                name="footerEmail"
                placeholder="Email Address"
              />
            </div>
          </form>
          <div className="footer__icons">
            <div className="footer__icon-single footer__facebook"></div>
            <div className="footer__icon-single footer__twitter"></div>
            <div className="footer__icon-single footer__instagram"></div>
            <div className="footer__icon-single footer__youtube"></div>
          </div>
          <p className="footer__feedback-button">Give Feedback</p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <div className="footer__copyright">
            <img src={logoCircle} alt="logo image" />
            <p className="footer__copyright-text">
              Copyright 2022 Canada Goose Inc.
            </p>
          </div>
          <div className="footer__links-container">
            <p className="footer__links">Accessibility Statement</p>
            <p className="footer__links">Privacy Policy</p>
            <p className="footer__links">Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
