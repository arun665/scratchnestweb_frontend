import React, { useEffect, useRef } from "react";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonSlide,
  IonModal,
  IonText,
} from "@ionic/react";
import "./Datalogger.css";

import Footer from "../Footer/Footer";

import ReactPlayer from "react-player";
import { useState } from "react";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import TimerIcon from "@material-ui/icons/Timer";
import UsbIcon from "@material-ui/icons/Usb";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import AlarmIcon from "@material-ui/icons/Alarm";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import DevicesIcon from "@material-ui/icons/Devices";
import AOS from "aos";
import { useHistory } from "react-router";

interface JQuery {
  switchClass(): void;
}

function DataLogger(props: any) {
  const history = useHistory();
  const menuRef: any = useRef(null);
  const handleClick = React.useCallback((e: any) => {
    console.log("CLICK");
    if (menuRef && menuRef.current && !menuRef.current.contains(e.target)) {
      document.removeEventListener("click", handleClick);
      setShowModal(false);
      console.log("outside click");
      return;
    }
  }, []);

  const [showModal, setShowModal] = useState(false);
  console.log(showModal, " Modall");

  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
    if (showModal) {
      //attach event listner to close menu on outside click.
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }
  }, [handleClick, showModal]);

  return (
    <div className="pdatalogger">
      <IonGrid className="pgriddata">
        <IonRow className="rowdl">
          <IonCol size="12" className="hdl imgdl">
            <ReactPlayer
              url="https://res.cloudinary.com/dpysmqax5/video/upload/v1618569162/ambiTag_1.60_ciyvah.mp4"
              width="100vw"
              height="95vh"
              playing={true}
              muted={true}
              loop={true}
            />
          </IonCol>
        </IonRow>
        <IonRow className="rowhow">
          <IonCol size="10" className="colhow">
            <ReactPlayer
              url="https://res.cloudinary.com/dpysmqax5/video/upload/v1617693634/VID-20210406-WA0000_p7cf2h.mp4"
              width="55vw"
              height="70vh"
              playing={true}
              muted={true}
              loop={true}
              className="video_howto_dl"
            />
          </IonCol>
        </IonRow>

        <IonRow className="Features" data-aos="zoom-in-right">
          <IonCol size="12" className="colspecdl atext">
            <IonText className="aheading">Features</IonText>
          </IonCol>
          <IonCol size="7" className="aslider">
            <div className="containertable_f">
              <div className="gallery">
                <div className="gallery-item_f">
                  <IonText className="pdf_im_dl">
                    <PictureAsPdfIcon className="icon_p_dl pdf_iF" />
                  </IonText>
                  <IonText>Auto-generated PDF report</IonText>
                </div>

                <div className="gallery-item_f">
                  <TimerIcon className=" icon_p_dl timer_iF" />
                  <IonText className="gallerytext">
                    {" "}
                    90 days logging period
                  </IonText>
                </div>

                <div
                  className="gallery-item_f pd_6"
                  style={{ backgroundColor: "gray", color: "white" }}
                >
                  <UsbIcon className="icon_p_dl usb_iF" />
                  <IonText>Inbuilt USB</IonText>
                </div>

                <div className="gallery-item_f">
                  <InvertColorsIcon className="icon_p_dl water_iF" />
                  <IonText className="gallerytext">
                    {" "}
                    Waterproof (IP67 Rating)
                  </IonText>
                </div>

                <div className="gallery-item_f">
                  <SettingsInputComponentIcon className="icon_p_dl pnp_iF" />
                  <IonText>
                    Plug {"&"} play device, no <br />
                    extra software needed
                  </IonText>
                </div>

                <div
                  className="gallery-item_f"
                  style={{ backgroundColor: "gray", color: "white" }}
                >
                  <AlarmIcon className="icon_p_dl alarm_iF" />
                  <IonText className="gallerytext">
                    {" "}
                    Alarm for low and(or) <br /> high temperatures
                  </IonText>
                </div>
                <div
                  className="gallery-item_f"
                  style={{ backgroundColor: "gray", color: "white" }}
                >
                  <TimelapseIcon className="icon_p_dl timezone_iF" />
                  <IonText className="gallerytext">
                    {" "}
                    Multi-timezone support
                  </IonText>
                </div>
                <div className="gallery-item_f">
                  <DevicesIcon className="icon_p_dl design_iF" />
                  <IonText className="gallerytext">
                    {" "}
                    Slim and compact design
                  </IonText>
                </div>
              </div>
            </div>
          </IonCol>
        </IonRow>
        <IonRow className="qote_row" data-aos="zoom-in-left">
          <IonCol size="6" className="qote_col">
            <button
              className="button_exp tocursor qote_btn"
              style={{
                background: "white",
                color: "black",
                borderRadius: "10%",
              }}
              onClick={() => history.push("/contact")}
            >
              Get Quote
            </button>
          </IonCol>
        </IonRow>
        <IonRow className="specdl" data-aos="zoom-in-right">
          <IonCol size="12" className="colspecdl atext">
            <IonText className="aheading spec_headdl">Specifications</IonText>
          </IonCol>
          <IonCol size="7" className="spectable">
            <IonSlide className="specslider">
              <div className="text-container">
                <table>
                  <tbody>
                    <div className="content hideContent">
                      <tr>
                        <td className="bld">Type</td>
                        <td className="bld_500">Single-use </td>
                      </tr>
                      <tr>
                        <td className="bld">Measurement Range</td>
                        <td className="bld_500">40 °C to +85 °C</td>
                      </tr>
                      <tr>
                        <td className="bld">Accuracy </td>
                        <td className="bld_500">±0.5 °C</td>
                      </tr>
                      <tr>
                        <td className="bld"> Resolution </td>
                        <td className="bld_500">0.25 °C</td>
                      </tr>
                      <tr>
                        <td className="bld">Memory Capacity</td>
                        <td className="bld_500"> 13000</td>
                      </tr>
                      <tr>
                        <td className="bld">Battery </td>
                        <td className="bld_500"> 3V Lithium CR2032</td>
                      </tr>
                      <tr>
                        <td>Recording Interval </td>
                        <td className="bld_500"> 10 minutes (customisable)</td>
                      </tr>
                      <tr>
                        <td className="bld">Recording Duration </td>
                        <td className="bld_500"> 90 days</td>
                      </tr>
                      <tr>
                        <td className="bld">Battery </td>
                        <td className="bld_500"> 3V Lithium CR2032</td>
                      </tr>
                    </div>
                  </tbody>
                </table>
                <div ref={menuRef} className="show-more_spec">
                  <button
                    className="button_exp tocursor show_more_specbtn"
                    onClick={() => setShowModal(!showModal)}
                    style={{
                      background: "white",
                      color: "black",
                      borderRadius: "10%",
                    }}
                  >
                    Show more
                  </button>
                </div>
              </div>
            </IonSlide>
          </IonCol>
        </IonRow>
        {showModal && (
          <IonModal
            isOpen={showModal}
            onDidDismiss={() => setShowModal(false)}
            mode="ios"
            cssClass="modal_spec_dl"
            animated={false}
          >
            <IonRow className="modal_row" data-aos="zoom-in-left">
              <IonCol size="10" className="colmodal">
                <div className="text-container_modal">
                  <table>
                    <tbody>
                      <div className="full_ctntbl">
                        <tr>
                          <td className="bld">Type</td>
                          <td className="bld_500">Single-use </td>
                        </tr>
                        <tr>
                          <td className="bld">Measurement Range</td>
                          <td className="bld_500">40 °C to +85 °C</td>
                        </tr>
                        <tr>
                          <td className="bld">Accuracy </td>
                          <td className="bld_500">±0.5 °C</td>
                        </tr>
                        <tr>
                          <td className="bld"> Resolution </td>
                          <td className="bld_500">0.25 °C</td>
                        </tr>
                        <tr>
                          <td className="bld">Memory Capacity</td>
                          <td className="bld_500"> 13000</td>
                        </tr>
                        <tr>
                          <td className="bld">Battery </td>
                          <td className="bld_500"> 3V Lithium CR2032</td>
                        </tr>
                        <tr>
                          <td>Recording Interval </td>
                          <td className="bld_500">
                            {" "}
                            10 minutes (customisable)
                          </td>
                        </tr>
                        <tr>
                          <td className="bld">Recording Duration </td>
                          <td className="bld_500"> 90 days</td>
                        </tr>
                        <tr>
                          <td className="bld">Initial Delay </td>
                          <td className="bld_500"> 30 mins</td>
                        </tr>
                        <tr>
                          <td className="bld">Protection Class </td>
                          <td className="bld_500"> IP67</td>
                        </tr>
                        <tr>
                          <td className="bld">Report </td>
                          <td className="bld_500"> Secured PDF</td>
                        </tr>
                        <tr>
                          <td className="bld">Report Type </td>
                          <td className="bld_500">
                            {" "}
                            Graphical and Tabular manner in PDF
                          </td>
                        </tr>
                        <tr>
                          <td className="bld"> Connectivity </td>
                          <td className="bld_500"> USB 2.0</td>
                        </tr>
                        <tr>
                          <td className="bld">Alarm Type </td>
                          <td className="bld_500"> High {"&"} low alarm</td>
                        </tr>
                        <tr>
                          <td className="bld">High Alarm </td>
                          <td className="bld_500"> 8 °C (Customisable)</td>
                        </tr>
                        <tr>
                          <td className="bld">Low Alarm </td>
                          <td className="bld_500"> 2 °C (Customisable)</td>
                        </tr>
                        <tr>
                          <td className="bld">Re-programmable </td>
                          <td className="bld_500">Yes </td>
                        </tr>
                        <tr>
                          <td className="bld">Shelf Life </td>
                          <td className="bld_500"> 12 months</td>
                        </tr>
                      </div>
                    </tbody>
                  </table>
                </div>
              </IonCol>
            </IonRow>
          </IonModal>
        )}

        <IonRow className="dlimg1_product" data-aos="zoom-in-right">
          <IonCol size="12" className="imgcol1_p"></IonCol>
        </IonRow>
        <IonRow className="dlimg2_product" data-aos="zoom-in-left">
          <IonCol size="12" className="imgcol2_p"></IonCol>
        </IonRow>
        <IonRow className="contact_pr_dl" data-aos="zoom-in-right">
          <IonCol size="12" className="conatctRow">
            <IonText className="headcontact">
              <h1 className="aheading">Let Us Help You</h1>
              <table className="contact_tbl">
                <tbody>
                  <tr
                    style={{ backgroundColor: "whitesmoke", fontWeight: 700 }}
                  >
                    <b>
                      <td>
                        <span>For Sales Support : sales@scratchnest.com</span>
                      </td>
                    </b>
                    <td>For Tech Support : info@scratchnest.com</td>
                  </tr>
                </tbody>
              </table>
            </IonText>
          </IonCol>
        </IonRow>

        <div className="contact_footer_dlp" data-aos="zoom-in-left">
          <Footer />
        </div>
      </IonGrid>
    </div>
  );
}

export default DataLogger;
