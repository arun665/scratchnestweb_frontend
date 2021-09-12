import React from "react";
import "./Collapsable.scss";

import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import { IonRow, IonCol, IonText } from "@ionic/react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import GetAppIcon from "@material-ui/icons/GetApp";

class Collapsable extends React.Component {
  state = {
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false,
    isOpen6: false,
    isOpen7: false,
    spy3: {},
  };

  render() {
    return (
      <div className="collapsable_irp">
        <IonRow className="btn_row_c irpc_rows" onClick={() => this.toggle(1)}>
          <IonCol
            className="togglecol_clk "
            className={cx("app__toggle", " btn_collap", {
              "app__toggle--active": this.state.isOpen,
            })}
          >
            Physical Characterstics
          </IonCol>
          <IonCol size="2" className="drp_icn_cirp">
            {this.state.isOpen1 ? (
              <ArrowDropUpIcon style={{ fontSize: "4rem" }} />
            ) : (
              <ArrowDropDownIcon style={{ fontSize: "4rem" }} />
            )}
          </IonCol>

          <Collapse
            isOpen={this.state.isOpen1}
            className={
              "app__collapse app__collapse--gradient " +
              (this.state.isOpen1 ? "app__collapse--active" : "")
            }
            transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
            aria-hidden={this.state.isOpen1 ? "false" : "true"}
            elementType="article"
            render={(collapseState) => (
              <React.Fragment>
                <div className="pc_irpc_text">
                  <IonCol size="10" className="col_pctxt">
                    <IonText className="pc_desc bld_600">
                      <IonCol size="7" className="inner_text_irp">
                        {" "}
                        <b> Dimension</b> - 300 x 300 x 50 mm
                        <br /> <b>Material</b> - Polycarbonate and Aluminium
                        alloy
                        <br /> <b>Communication Interfaces</b> - USB, RS-232,
                        RS-485, Wiegand, and LAN
                        <br />
                        <b> Input Voltage </b>- 9-24 V DC supply
                        <br /> <b>Current Rating</b> - 2 A<br />{" "}
                        <b>Cooling Mode </b>- Air cooling
                        <br /> <b> Ethernet Interface</b> - 10/100 Base
                        T-Ethernet (RJ45)
                        <br /> <b>GPIO </b>- 4 input and 4 output
                        <br />
                        <b>Dense Reader Mode</b> - Supported
                        <br />
                        <br />
                      </IonCol>
                    </IonText>
                  </IonCol>
                </div>
              </React.Fragment>
            )}
          />
        </IonRow>
        <IonRow className="btn_row_c irpc_rows" onClick={() => this.toggle(2)}>
          <IonCol
            className="togglecol_clk "
            className={cx("app__toggle", " btn_collap", {
              "app__toggle--active": this.state.isOpen2,
            })}
          >
            User Enviroment
          </IonCol>
          <IonCol size="2" className="drp_icn_cirp">
            {this.state.isOpen2 ? (
              <ArrowDropUpIcon style={{ fontSize: "4rem" }} />
            ) : (
              <ArrowDropDownIcon style={{ fontSize: "4rem" }} />
            )}
          </IonCol>

          <Collapse
            isOpen={this.state.isOpen2}
            className={
              "app__collapse app__collapse--gradient " +
              (this.state.isOpen2 ? "app__collapse--active" : "")
            }
            transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
            aria-hidden={this.state.isOpen2 ? "false" : "true"}
            elementType="article"
            render={(collapseState) => (
              <React.Fragment>
                <div className="pc_irpc_text">
                  <IonCol size="10" className="col_pctxt">
                    <IonText className="pc_desc bld_600">
                      <IonCol size="7" className="inner_text_irp">
                        {" "}
                        <b> Environmental Sealing</b> - IP65 rating
                        <br /> <b>Operating Temperature </b> <b>-</b> -25 to 65
                        °C
                        <br /> <b>Storage Temperature </b> <b>-</b> -45 to 90 °C
                        <br />
                        <b> Relative Humidity </b>- 10% to 90%
                        <br />
                        <br />
                      </IonCol>
                    </IonText>
                  </IonCol>
                </div>
              </React.Fragment>
            )}
          />
        </IonRow>
        <IonRow className="btn_row_c irpc_rows" onClick={() => this.toggle(3)}>
          <IonCol
            className="togglecol_clk "
            className={cx("app__toggle", " btn_collap", {
              "app__toggle--active": this.state.isOpen3,
            })}
          >
            UHF RFID
          </IonCol>
          <IonCol size="2" className="drp_icn_cirp">
            {this.state.isOpen3 ? (
              <ArrowDropUpIcon style={{ fontSize: "4rem" }} />
            ) : (
              <ArrowDropDownIcon style={{ fontSize: "4rem" }} />
            )}
          </IonCol>

          <Collapse
            isOpen={this.state.isOpen3}
            className={
              "app__collapse app__collapse--gradient " +
              (this.state.isOpen3 ? "app__collapse--active" : "")
            }
            transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
            aria-hidden={this.state.isOpen3 ? "false" : "true"}
            elementType="article"
            render={(collapseState) => (
              <React.Fragment>
                <div className="pc_irpc_text">
                  <IonCol size="10" className="col_pctxt">
                    <IonText className="pc_desc bld_600">
                      <IonCol size="7" className="inner_text_irp">
                        {" "}
                        <b> Operating Frequency</b> - 840 - 960 MHz
                        <br /> <b>Protocol </b> -EPC Class1 Gen2 (ISO 18000-6C),
                        ISO 18000-6A/B
                        <br /> <b>Antenna </b> - Inbuilt 9 dBi Circular
                        Polarized Antenna
                        <br />
                        <b> MCU </b>-Arm Cortex-M4
                        <br /> <b>RF Power</b> - 31.5 dBm, adjustable via
                        software
                        <br /> <b>RF Sensitivity </b>- {"<"} -90 dBm
                        <br /> <b>RSSI </b> - Supported
                        <br /> <b>Maximum Tag Read Rate </b>- 700 tags/s (with
                        16-bit tag EPC length)
                        <br />
                        <b> Tag Read Indication</b> - LED and buzzer
                        <br />
                        <b> Carrier Cancellation Circuitry </b> - Enabling pre-
                        and re-tuning
                        <br />
                        <br />
                      </IonCol>
                    </IonText>
                  </IonCol>
                </div>
              </React.Fragment>
            )}
          />
        </IonRow>
        <IonRow className="btn_row_c irpc_rows" onClick={() => this.toggle(4)}>
          <IonCol
            className="togglecol_clk "
            className={cx("app__toggle", " btn_collap", {
              "app__toggle--active": this.state.isOpen4,
            })}
          >
            Visual & Sound Indicator
          </IonCol>
          <IonCol size="2" className="drp_icn_cirp">
            {this.state.isOpen4 ? (
              <ArrowDropUpIcon style={{ fontSize: "4rem" }} />
            ) : (
              <ArrowDropDownIcon style={{ fontSize: "4rem" }} />
            )}
          </IonCol>

          <Collapse
            isOpen={this.state.isOpen4}
            className={
              "app__collapse app__collapse--gradient " +
              (this.state.isOpen4 ? "app__collapse--active" : "")
            }
            transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
            aria-hidden={this.state.isOpen4 ? "false" : "true"}
            elementType="article"
            render={(collapseState) => (
              <React.Fragment>
                <div className="pc_irpc_text">
                  <IonCol size="10" className="col_pctxt">
                    <IonText className="pc_desc bld_600">
                      <IonCol size="7" className="inner_text_irp">
                        {" "}
                        <b> Power </b> <b>-</b> Red LED
                        <br /> <b>Inbuilt Antenna </b> - Yellow LED
                        <br /> <b>External Antenna </b> - Yellow LED
                        <br /> <b>Tag </b> - Green LED and buzzer
                        <br />
                        <br />
                      </IonCol>
                    </IonText>
                  </IonCol>
                </div>
              </React.Fragment>
            )}
          />
        </IonRow>
        <IonRow className="btn_row_c irpc_rows" onClick={() => this.toggle(5)}>
          <IonCol
            className="togglecol_clk "
            className={cx("app__toggle", " btn_collap", {
              "app__toggle--active": this.state.isOpen5,
            })}
          >
            Accessories Included
          </IonCol>
          <IonCol size="2" className="drp_icn_cirp">
            {this.state.isOpen5 ? (
              <ArrowDropUpIcon style={{ fontSize: "4rem" }} />
            ) : (
              <ArrowDropDownIcon style={{ fontSize: "4rem" }} />
            )}
          </IonCol>

          <Collapse
            isOpen={this.state.isOpen5}
            className={
              "app__collapse app__collapse--gradient " +
              (this.state.isOpen4 ? "app__collapse--active" : "")
            }
            transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
            aria-hidden={this.state.isOpen5 ? "false" : "true"}
            elementType="article"
            render={(collapseState) => (
              <React.Fragment>
                <div className="pc_irpc_text">
                  <IonCol size="10" className="col_pctxt">
                    <IonText className="pc_desc bld_600">
                      <IonCol size="7" className="inner_text_irp">
                        {" "}
                        <b>
                          Reader
                          <br />
                          Power adapter
                          <br />
                          Mounting brackets <br />
                          USB cable
                          <br />
                          User manual
                        </b>
                        <br />
                        <br />
                      </IonCol>
                    </IonText>
                  </IonCol>
                </div>
              </React.Fragment>
            )}
          />
        </IonRow>
        <IonRow className="btn_row_c irpc_rows">
          <IonCol
            size="10"
            className="togglecol_clk "
            className={cx("app__toggle", " btn_collap", {
              "app__toggle--active": this.state.isOpen6,
            })}
            onClick={() => this.toggle(6)}
          >
            Downloads
          </IonCol>
          <IonCol size="2" className="drp_icn_cirp">
            {this.state.isOpen6 ? (
              <ArrowDropUpIcon style={{ fontSize: "4rem" }} />
            ) : (
              <ArrowDropDownIcon style={{ fontSize: "4rem" }} />
            )}
          </IonCol>

          <Collapse
            isOpen={this.state.isOpen6}
            className={
              "app__collapse app__collapse--gradient " +
              (this.state.isOpen6 ? "app__collapse--active" : "")
            }
            transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
            aria-hidden={this.state.isOpen6 ? "false" : "true"}
            elementType="article"
            render={(collapseState) => (
              <React.Fragment>
                <div className="app__content">
                  <IonRow className="btn-down">
                    <IonCol size="3" className="filename_btn">
                      <IonText className="textfile bdn_600">
                        Integrated Reader 2port
                      </IonText>
                    </IonCol>
                    <IonCol size="3" className="file_btn">
                      <a
                        href="/Downloadfile/ir2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <i className="fas fa-download" />
                        <GetAppIcon style={{ fontSize: "29px" }} />
                      </a>
                    </IonCol>
                  </IonRow>
                </div>
              </React.Fragment>
            )}
          />
        </IonRow>
      </div>
    );
  }

  toggle = (index) => {
    let collapse = "isOpen" + index;

    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };
}

export default Collapsable;
