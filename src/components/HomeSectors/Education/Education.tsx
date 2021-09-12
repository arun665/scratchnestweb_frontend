import React from "react";
import "./education.css";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";

import Footer from "../../Footer/footer2";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="education page-section element" id="education">
      <>
        <div className="education_row">
          <IonRow className="ion-row_c">
            <img
              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616422067/1440x638_qavewn.jpg"
              alt="education_image"
              className="education_img"
            />
            <IonCol size="12" className="education_col">
              <IonText className="education_text">
                <span>Education</span>
              </IonText>
            </IonCol>
            <IonRow className="ts_16_e lef4 pdt_23 ">
              <IonText className="education_text2">
                <span>Spreading</span>
                <br />
                Our
                <br />
                Knowledge
              </IonText>
            </IonRow>
            <IonRow className="button_explore_row tocursor btn_e_ed">
              <IonCol size="5" className="btn_explore_col">
                <Link to="/sector/education">
                  <button
                    className="button_exp tocursor"
                    style={{
                      background: "black",
                      color: "White",
                      borderRadius: "10%",
                    }}
                  >
                    Explore Now
                  </button>
                </Link>
              </IonCol>
            </IonRow>
            <IonRow className="footer_row_e">
              <Footer />
            </IonRow>
          </IonRow>
        </div>
      </>
    </div>
  );
}

export default Education;
