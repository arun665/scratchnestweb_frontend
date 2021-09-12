import { IonButton, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//import "./Rfid.css";
import AOS from "aos";

function Rfid() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="rfid page-section element" id="rfid">
        <IonRow className="ion-row" >
          <img
            src="https://res.cloudinary.com/dpysmqax5/image/upload/v1615656942/cc_qvbk0t.jpg"
            alt="RFID_image"
            className="rfid_img"
          />
          <IonCol size="6" className="rfid_col">
            <IonText className="rfid_text">RFID</IonText>
          </IonCol>
          <IonRow className="ts_16 lef pdt_23">
            <IonText className="rfid_text2">
              <span>Automate</span>
              <br />
              Your
              <br />
              Operations
            </IonText>
            <br />
            <IonRow className="button_explore_row_r tocursor">
              <IonCol size="5" className="btn_explore_col">
                <Link to="/sector/rfid">
                  <button
                    className="button_exp btn_2560 tocursor"
                    style={{
                      background: "white",
                      color: "black",
                      borderRadius: "10%",
                    }}
                  >
                    Explore Now
                  </button>
                </Link>
              </IonCol>
            </IonRow>
          </IonRow>
        </IonRow>
      </div>
    </>
  );
}

export default Rfid;
