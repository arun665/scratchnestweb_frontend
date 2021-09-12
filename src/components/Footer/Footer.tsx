import { IonCol, IonGrid, IonMenu, IonRow, IonText } from "@ionic/react";
import React from "react";
import "./footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <IonGrid className="footergrid">

        <IonRow className="logo_footer">
          <IonCol size="2" className="footer-l">
            <img
              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1615074337/logo_white_solid__copy_dqpf6l.png"
              className="f_l"
            />
          </IonCol>
        </IonRow>
        <IonRow className="menu_foot">
          <IonCol size="5" className="quicklink1_heading">
            <h1 className="quicklink1_head_txt white-text">QuickLinks</h1>
          </IonCol>
          <IonCol size="5" className="menus_quicklink">
            <li className="white-text">
              <Link to="/">Home</Link>
            </li>
            <li className="white-text">
              <Link to="/about">About Us</Link>
            </li>
            <li className="white-text ">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="white-text ">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="white-text ">
              <Link to="/support">Support</Link>
            </li>
          </IonCol>
          <IonCol size="2" className="menus_quicklink3">
            <li className="white-text tocursor">
              <a href="https://www.linkedin.com/company/scratchnest-private-limited/">
                <LinkedInIcon
                  style={{ color: "whitesmoke", fontSize: "25px" }}
                />
              </a>
            </li>
            <li className="white-text tocursor">
              <a href="https://www.facebook.com/ScratchNestPvtLtd">
                <FacebookIcon
                  style={{ color: "whitesmoke", fontSize: "25px" }}
                />
              </a>
            </li>
            <li className="white-text tocursor">
              <a href="https://www.instagram.com/scratchnest/">
                <InstagramIcon
                  style={{ color: "whitesmoke", fontSize: "25px" }}
                />
              </a>
            </li>
            <li className="white-text  tocursor">
              <a href="https://twitter.com/NestScratch">
                <TwitterIcon
                  style={{
                    color: "whitesmoke",
                    fontSize: "25px",
                    marginLeft: "-19px",
                  }}
                />
              </a>
            </li>
            <li className="white-text  tocursor">
              <EmailIcon
                style={{
                  color: "whitesmoke",
                  fontSize: "25px",
                  marginLeft: "-16px",
                }}
                onClick={() =>
                  window.open(
                    "mailto:info@scratchnest.com?subject=subject&body=body"
                  )
                }
              />
            </li>
          </IonCol>
          <IonCol size="5" className="secpages_heading">
            <h1 className="secpages_head_txt white-text">Sector</h1>
          </IonCol>
          <IonCol size="6" className="menus_quicklink2">
            <li className="white-text">
              <Link to="/sector/rfid">RFID</Link>
            </li>
            <li className="white-text">
              <Link to="sector/beacon">Beacon</Link>
            </li>
            <li className="white-text dl">
              <Link to="sector/datalogger">Data Logger</Link>
            </li>

            <li className="white-text ">
              <Link to="sector/education">Education</Link>
            </li>
          </IonCol>
        </IonRow>
        {window.innerWidth > 700 ? (
          <IonRow className="Address_row">
            <IonCol size="2" className="adress col">
              <IonText>
                <h1 className="add_heading white-text">Address</h1>
              </IonText>
            </IonCol>
            <IonCol size="2" className="adress_text col">
              <IonText className="add_text white-text">
                Room No 6, 3rd floor, East Wing
              </IonText>
              <br />
              <IonText className="add_text white-text">
                M. Visvesvaraya Block,
              </IonText>
              <br />
              <IonText className="add_text white-text">
                IIT Ropar, Rupnagar,
              </IonText>
              <br />
              <IonText className="add_text white-text">
                Punjab, India - 140001
              </IonText>
            </IonCol>
          </IonRow>
        ) : (
          <IonRow className="Address_row">
            <IonCol size="2" className="adress col">
              <IonText>
                <h1 className="add_heading white-text">Address</h1>
              </IonText>
            </IonCol>
            <IonCol size="4" className="adress_text_mb add_text white-text col">
              Room no6, 3rd floor, East Wing M. Visvesvaraya Block, IIT Ropar,
              Rupnagar, Punjab, India - 140001
            </IonCol>
          </IonRow>
        )}
      </IonGrid>
    </div>
  );
}

export default Footer;
