import React, { useEffect, useRef } from "react";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import "./Linearant.css";

import { useState } from "react";
import AOS from "aos";
import Featurecaurosel from "./Caurosel/Featurecaurosel_Linear.js";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import FormatColorResetIcon from "@material-ui/icons/FormatColorReset";
import StorefrontIcon from "@material-ui/icons/Storefront";
import FaceIcon from "@material-ui/icons/Face";
import TollIcon from "@material-ui/icons/Toll";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import AccessibleIcon from "@material-ui/icons/Accessible";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import DirectionsRailwayIcon from "@material-ui/icons/DirectionsRailway";
import Collapsable from "./Collapsable/Collapsable_Linear.js";
import ReactPlayer from "react-player";
import InboxIcon from "@material-ui/icons/Inbox";
import { useHistory } from "react-router";

interface JQuery {
  switchClass(): void;
}

function LinearAnt(props: any) {
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
    <div className="pirrfid">
      <IonGrid className="pgridrfid">
        <IonRow className="rowirp_player fcolor">
          <IonCol size="12" className="hdl imgdl">
            <ReactPlayer
              url="https://res.cloudinary.com/dpysmqax5/video/upload/v1619030717/anteena_linear_rcy4s1.mp4"
              width="100vw"
              height="95vh"
              playing={true}
              muted={true}
              loop={true}
            />
          </IonCol>
        </IonRow>
        <IonGrid className="irpgrid">
          <IonRow className="irrfid_caurosel">
            <Featurecaurosel />
          </IonRow>
          <IonRow className="Product_heading_1" data-aos="zoom-in-right">
            <IonCol size="7" className="col_p_head ">
              <IonText className="irproducthead bd_600">ScratchNest</IonText>
            </IonCol>
            <IonCol size="7" className="col_p_text">
              <IonText className="irproduct_text_head bd">
                Linear Polarized Antenna
              </IonText>
            </IonCol>
            <IonCol size="7" className="col_p_text2">
              <IonText className="irproduct_text head bd">9 dBi</IonText>
            </IonCol>
            <IonCol size="7" className="col_p_text3">
              <IonText className="irproduct_text2 head bd_600">
                SN-LA 101
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="qote_row_irp">
            <IonCol size="6" className="qote_col_irp">
              <button
                className="button_exp tocursor qote_btn_irp"
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
        </IonGrid>
        <IonGrid className="irpgrid_2">
          <IonRow className="pd_rowir">
            <IonCol size="5" className="pd_colir">
              <IonText className="pd_irtext_head bd_600">
                Product Description
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="pd_rowir_des">
            <IonCol size="11" className="pd_txt_colir">
              <IonText className="pd_irtext bd_500">
                The ScratchNest SN-LA 101 is a far-field 9 dBi linear polarized
                RFID antenna that provides reception and transmission of signals
                in the UHF frequency band. Both US and EU versions are available
                in this model. The ScratchNest far-field RFID antenna comes with
                a heavy-duty polycarbonate housing, possesses female TNC
                connectors and excellent VSWR and axial ratios.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="features_irp_row">
            <IonCol size="5" className="col_irp_features">
              <IonRow className="pd_rowir_feature">
                <IonCol size="5" className="pd_colir">
                  <IonText className="pd_irtext_head bd_600">Features</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="5" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <AcUnitIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count ga_2560">
                    Greater accuracy
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <RssFeedIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">Far field antenna</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <ChatBubbleOutlineIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Global frequency coverage
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <AssignmentLateIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    All orientation tag-reading
                  </IonText>
                </IonCol>
              </IonRow>

              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <RssFeedIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Excellent matching{" "}
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <FormatColorResetIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Completely water resistant
                  </IonText>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol size="5" className="col_irp_features">
              <IonRow className="pd_rowir_feature">
                <IonCol size="5" className="pd_colir">
                  <IonText className="pd_irtext_head bd_600">Functions</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="5" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <StorefrontIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count ga_2560">
                    Warehouse Management
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <TollIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Toll Collection Management
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <DirectionsRailwayIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">Railways</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <ShowChartIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Inventory Management
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <LocalParkingIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Smart Parking Areas
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <AccessibleIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">Access Control</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <PersonAddIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Smart Attendance Systems
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <InboxIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">Logistics</IonText>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRow className="linear_img1_product" data-aos="zoom-in-right">
          <IonCol size="12" className="imgcol_circular_p"></IonCol>
        </IonRow>
        <IonRow className="ipr_img1_product" data-aos="zoom-in-left">
          <IonCol size="12" className="imgcol_linear_p2"></IonCol>
        </IonRow>
        <IonGrid className="irpgrid_3">
          <IonRow className="dropdown_irp_row">
            <IonCol size="10" className="collapsable_irp">
              <Collapsable />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRow className="bigqote_row_irp">
          <IonCol size="6" className="bigqote_col_irp">
            <button
              className="button_exp tocursor bigqote_btn_irp"
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

        <div className="contact_footer_dlp irpfooter" data-aos="zoom-in-left">
  
        </div>
      </IonGrid>
    </div>
  );
}

export default LinearAnt;
