import React, { useState } from "react";
import mainlogo from "../media/headerlogo.png";

const Contact = ({ location, history }) => {
  const [terms, setTerms] = useState(false);
  const titleTabs = [
    { title: "Terms of Service +" },
    { title: "Shipping and Returns +" },
    { title: "Privacy Policy +" },
  ];
  const contentTabs = [
    {
      title: `Terms of Service − WORLDWIDE - $10 standard shipping $25 express shipping. We ship via registered air mail with a tracking number. PLEASE NOTE - Most of our items are made-to-order, and take different times to produce. Please expect up to three weeks for production, in most cases your item will be ready sooner. Shipment from Israel may take up to 21 days, although it will usually arrive faster. Please contact us for express shipping options. `,
      title1: `Please note that the essence of a handmade product is that it doesn't look machine made and every piece is unique. If you experience any problems with a piece you have purchased, please contact us via mail - bfromrock@gmail.com and we will resolve it in any way we can. We accept returns/ exchanges within 14 business days of receipt of your package upon approval by Born From Rock. Item must be returned in its original packaging and condition via registered insured mail. The customer is responsible for return shipping. We recommend that any return made to us will be fully insured and via a carrier that provides tracking information. In the event that a returned package is lost or damaged during the shipment back, we will not be able to refund you.`,
    },
    { title: "Shipping and Returns +" },
    { title: "Privacy Policy +" },
  ];
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="d-flex flex-column flex-sm-row">
          <div className="col-12 col-sm-6 d-flex justify-content-end">
            <div className="left-contact d-flex flex-column">
              <div className="d-flex flex-column left-contact-wrapper">
                <div className="d-block d-sm-none main-logo-mobile">
                  <img src={mainlogo} alt="mainlogo" />
                </div>
                <h5>INFO</h5>
                <h5>info@sehnsucht-atelier.com</h5>
              </div>
              <div className="left-contact-wrapper">
                <h5>PRESS</h5>
                <h5>rebecca@sehnsucht-atelier.com</h5>
              </div>
              <div className="left-contact-wrapper">
                <h5>FOLLOW</h5>
                <h5>
                  instagram <br />
                  @sehnsucht_atelier
                </h5>
                <h6></h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div>
              <div className="right-contact d-flex flex-column">
                <div className="terms-tab">
                  <h5 className="tems-header">TERMS OF SERVICE +</h5>
                  <h5 className="tems-header">SHIPPING AND RETURNS +</h5>
                  <h5 className="tems-header">PRIVACY POLICY +</h5>
                  {/* <div className={terms ? "terms-wrapper active":"terms-wrapper"}>
                    <div className="terms-content">
                      <span>Terms of Service − WORLDWIDE - $10 standard shipping $25 express shipping. We ship via</span>
                      <br/>
                      <span>registered air mail with a tracking number. PLEASE NOTE - Most of our</span>
                      <br/>
                      <span>items are made-to-order, and take different times to produce. Please expect</span>
                      <br/>
                      <span>up to three weeks for production, in most cases your item will be ready</span>
                      <br/>
                      <span>sooner. Shipment from Israel may take up to 21 days, although it will usually</span>
                      <br/>
                      <span>arrive faster. Please contact us for express shipping options.</span>
                    </div>
                    <br/>
                    <div className="terms-content">
                      <span>Please note that the essence of a handmade product is that it doesn't look</span>
                      <br/>
                      <span>machine made and every piece is unique. If you experience any problems</span>
                      <br/>
                      <span>with a piece you have purchased, please contact us via mail -</span>
                      <br/>
                      <span>bfromrock@gmail.com and we will resolve it in any way we can. We accept</span>
                      <br/>
                      <span>returns/ exchanges within 14 business days of receipt of your package upon</span>
                      <br/>
                      <span>approval by Born From Rock. Item must be returned in its original packaging</span>
                      <br/>
                      <span>and condition via registered insured mail. The customer is responsible for</span>
                      <br/>
                      <span>return shipping. We recommend that any return made to us will be fully</span>
                      <br/>
                      <span>and condition via registered insured mail. The customer is responsible for</span>
                      <br/>
                      <span>insured and via a carrier that provides tracking information. In the event</span>
                      <br/>
                      <span>that a returned package is lost or damaged during the shipment back, we</span>
                      <br/>
                      <span>will not be able to refund you.</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
