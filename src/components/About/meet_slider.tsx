import React from "react";
import {
  IonRow,
  IonGrid,
  IonText,
  IonCol,
  IonSlides,
  IonSlide,
  IonContent,
} from "@ionic/react";

import "./about.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";
import Footer from "../Footer/Footer";

function MeetSliderMob() {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <div className="slider_mob">
      <IonCol size="12" className="meet_slider">
        <IonContent className="content_meet">
          <IonSlides
            pager={true}
            options={slideOpts}
            className=" whyslide_lef"
            id="person_slider_abt"
          >
            <IonSlide className="rohan_meet_row">
              <IonRow className="meet_us_row">
                <div className="container_about">
                  <div className="row team-row">
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922167/akshit_wdadcm.png"
                              alt=""
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Founder {"&"} Director</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Akshit
                              </h2>
                              <span className="white-text name_text_about">
                                Founder
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922165/amit_gqij6s.png"
                              alt=""
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Founder {"&"} Director</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Amit
                              </h2>
                              <span className="white-text name_text_about">
                                Founder
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                  </div>
                </div>
              </IonRow>
            </IonSlide>
            <IonSlide className="rohan_meet_row">
              <IonRow className="meet_us_row">
                <div className="container_about">
                  <div className="row team-row">
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member last text-center">
                          <div className="team-img">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922163/Jeevant_vuay3o.jpg"
                              alt=""
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Founder {"&"} Director</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Jeevant
                              </h2>
                              <span className="white-text name_text_about">
                                Founder
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922088/lalit_ynvmj0.png"
                              alt="akshit"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Director {"&"} CTO</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Lalit
                              </h2>
                              <span className="white-text name_text_about">
                                Dirctor {"&"} CTO
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                  </div>
                </div>
              </IonRow>
            </IonSlide>
            <IonSlide className="rohan_meet_row">
              <IonRow className="meet_us_row">
                <div className="container_about">
                  <div className="row team-row mrg">
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member last text-center">
                          <div className="team-img ">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922080/sumansir_nnj8up.png"
                              alt="Non Executive Director"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Non Executive Director</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Suman
                              </h2>
                              <span className="white-text name_text_about">
                                Non Executive Director
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922157/kamal_qycesr.png"
                              alt=""
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Technical Advisor</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Kamaljeet
                              </h2>
                              <span className="white-text name_text_about">
                                Technical Advisor
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                  </div>
                </div>
              </IonRow>
            </IonSlide>
            <IonSlide className="rohan_meet_row">
              <IonRow className="meet_us_row">
                <div className="container_about">
                  <div className="row team-row mrg">
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922168/abhijeet_n2tfzt.jpg"
                              alt="Business Advisor"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Business Advisor</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Abhijeet
                              </h2>
                              <span className="white-text name_text_about">
                                Business Advisor
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922164/Dr_K_P_S_Pasricha_ukyf7f.jpg"
                              alt="Business Advisor"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Sales Exceutive</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Dr. KPS
                              </h2>
                              <span className="white-text name_text_about">
                                Sales Exceutive
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                  </div>
                </div>
              </IonRow>
            </IonSlide>
            <IonSlide className="rohan_meet_row">
              <IonRow className="meet_us_row">
                <div className="container_about">
                  <div className="row team-row mrg">
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps tme">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618759402/vikas_Malav_PCB_Engineer_uhacdz.jpg"
                              alt="Vikas Malav"
                              className="tme"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Vikas Malav</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Vikas
                              </h2>
                              <span className="white-text name_text_about">
                                PCB Engineer
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol className="col_teams firmlef">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps tme">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618759418/Ridhima_firmware_Engineer_cr9qma.jpg"
                              alt=""
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Firmware Engineer</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="11" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Ridhima
                              </h2>
                              <span className="white-text name_text_about">
                                Firmware Engineer
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                  </div>
                </div>
              </IonRow>
            </IonSlide>
            <IonSlide className="rohan_meet_row">
              <IonRow className="meet_us_row">
                <div className="container_about">
                  <div className="row team-row mrg">
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps tme">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618759566/_RADHIKA_RAINA_RF_Engineer_sdssyr.jpg"
                              alt="RF Engineer"
                              className="tme"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>RF Engineer</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Radhika
                              </h2>
                              <span className="white-text name_text_about">
                                RF Engineer
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol className="col_teams firmlef">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps tme">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618759568/Mr._Jyoti_Accounts_fgp757.jpg"
                              alt=""
                              className="tme"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Accounts</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Jyoti
                              </h2>
                              <span className="white-text name_text_about">
                                Accounts
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                  </div>
                </div>
              </IonRow>
            </IonSlide>
            <IonSlide className="rohan_meet_row">
              <IonRow className="meet_us_row">
                <div className="container_about">
                  <div className="row team-row mrg">
                    <IonCol className="col_teams firmlef">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps tme">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922084/shreya_btqvhl.png"
                              alt=""
                              className="tme"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Content {"&"} Social Media Manager</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Shreya
                              </h2>
                              <span className="white-text name_text_about">
                                Social Media Manager
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol className="col_teams firmlef">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps tme">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922070/vivek_h0x1er.png"
                              alt="Sales Manager"
                              className="tme"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Sales Manager</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Vivek
                              </h2>
                              <span className="white-text name_text_about">
                                Sales Manager
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                  </div>
                </div>
              </IonRow>
            </IonSlide>
            <IonSlide className="rohan_meet_row">
              <IonRow className="meet_us_row">
                <div className="container_about sujlef">
                  <div className="row team-row">
                    <IonCol className="col_teams firmlef">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps tme">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922082/sujal_s9pd4i.png"
                              alt="Business Advisor"
                              className="tme"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Product Associate</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Sujal
                              </h2>
                              <span className="white-text name_text_about">
                                Product Associate
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol className="col_teams firmlef">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps tme">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922085/rohan_dzrv2q.png"
                              alt=""
                              className="tme"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Graphic Designer</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Rohan
                              </h2>
                              <span className="white-text name_text_about">
                                Graphic Designer
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                  </div>
                </div>
              </IonRow>
            </IonSlide>
            <IonSlide className="rohan_meet_row">
              <IonRow className="meet_us_row">
                <div className="container_about sujlef">
                  <div className="row team-row sujlef">
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps ">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618759788/Nitin_Singh_3D_designer_dhsman.jpg"
                              alt="Vikas Malav"
                              className="tme"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Nitin Singh</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Nitin
                              </h2>
                              <span className="white-text name_text_about">
                                3D Designer
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps tme">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618954540/Rohit.jpg"
                              alt="Rohit"
                              className="tme"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>3D Artist</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Rohit
                              </h2>
                              <span className="white-text name_text_about">
                                3D Artist
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                  </div>
                </div>
              </IonRow>
            </IonSlide>
            <IonSlide className="rohan_meet_row">
              <IonRow className="meet_us_row">
                <div className="container_about sujlef">
                  <div className="row team-row sujlef">
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618954575/Ranjit.jpg"
                              alt="Ranjit"
                              className="tme"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>Ranjit</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Ranjit
                              </h2>
                              <span className="white-text name_text_about">
                                3D Artist
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol className="col_teams">
                      <div className="col-md-4 col-sm-6 team-wrap">
                        <div className="team-member text-center">
                          <div className="team-img drkps">
                            <img
                              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618954540/Rohit.jpg"
                              alt="Rohit"
                              className="tme"
                            />
                            <div className="overlay">
                              <div className="team-details text-center">
                                <p>3D Artist</p>
                              </div>
                            </div>
                          </div>
                          <IonRow className="text-row-intro">
                            <IonCol size="10" className="text-intro">
                              <h2 className="team-title white-text name_text_about">
                                Rohit
                              </h2>
                              <span className="white-text name_text_about">
                                3D Artist
                              </span>
                            </IonCol>
                          </IonRow>
                        </div>
                      </div>
                    </IonCol>
                  </div>
                </div>
              </IonRow>
            </IonSlide>
          </IonSlides>
        </IonContent>
      </IonCol>
    </div>
  );
}

export default MeetSliderMob;
