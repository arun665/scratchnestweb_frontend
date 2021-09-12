import React, { useEffect, useRef } from "react";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import "./Trackingb.css";
import Footer from "../../../Footer/Footer";
import { useState } from "react";
import AOS from "aos";
import Featurecaurosel from "./Caurosel/Featurecaurosel_trackingb.js";
import GradeIcon from "@material-ui/icons/Grade";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import StorefrontIcon from "@material-ui/icons/Storefront";
import FaceIcon from "@material-ui/icons/Face";
import BluetoothSearchingIcon from "@material-ui/icons/BluetoothSearching";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import AccessibleIcon from "@material-ui/icons/Accessible";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";
import DirectionsRailwayIcon from "@material-ui/icons/DirectionsRailway";
import Collapsable from "./Collapsable/Collapsable_trackingb.js";
import ReactPlayer from "react-player";
import InboxIcon from "@material-ui/icons/Inbox";
import { useHistory } from "react-router";
import {Helmet} from "react-helmet";

interface JQuery {
  switchClass(): void;
}

function Trackingb(props: any) {
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
        <IonRow className="rowirp_player darkgry">
          <IonCol size="12" className="hdl imgdl">
            <ReactPlayer
              url="https://res.cloudinary.com/dpysmqax5/video/upload/v1619894003/beacon_s_uronzf.mp4"
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
                Tracking Beacon
              </IonText>
            </IonCol>

            <IonCol size="7" className="col_p_text3">
              <IonText className="irproduct_text2 head bd_600">
                SN - TB 101
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
                ScratchNest SN-BE 101 is a compact and powerful Bluetooth low
                energy beacon with long battery life and It can be used in
                various industrial applications like asset tracking, inventory
                management. Our beacon can help organisations to monitor their
                assets in real-time.
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
                    <SettingsInputAntennaIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count ga_2560">
                    Long Range
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <BluetoothSearchingIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Based on Bluetooth 5.2
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <IndeterminateCheckBoxIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">Compact design</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <HomeWorkIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Useable indoors and outdoors
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <GradeIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    IP65 rating (optional)
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <FindReplaceIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    On-field battery replacement
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <BatteryChargingFullIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">Long Battery life</IonText>
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
                    <AccessibleIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">Access Control</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <InboxIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Inventory Management
                  </IonText>
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

              <IonRow className="feature_irp">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <FaceIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">Employee tracking</IonText>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRow className="bcn_img1_product" data-aos="zoom-in-right">
          <IonCol size="12" className="imgcol_ipr_p"></IonCol>
        </IonRow>
        <IonRow className="ipr_img1_product" data-aos="zoom-in-left">
          <IonCol size="12" className="imgcol_bcn_p2"></IonCol>
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
          <Footer />
        </div>
      </IonGrid>
    </div>
  );
}

export default Trackingb;
