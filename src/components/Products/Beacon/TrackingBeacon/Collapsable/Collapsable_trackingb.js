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
            Physical Characteristics
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
                        <b> Dimension</b> - 34 x 36 x 10 mm
                        <br /> <b>Material</b> - Polycarbonate
                        <br /> <b>Size Tolerance</b> - 1mm
                        <br />
                        <b> Environmental Sealing </b>- IP-65 rating
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
            RF Features
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
                        <b> Based on </b> - NRF52805
                        <br /> <b>CPU </b> - 64 MHz Arm Cortex-M4
                        <br /> <b>Antenna </b> - Internal PCB Antenna
                        <br />
                        <b>Memory </b>- 192 KB Flash + 24 KB RAM
                        <br /> <b>Performance </b> -144 Coremark/mA
                        <br /> <b>Efficiency </b>-65 CoreMark/mA
                        <br /> <b>Wireless protocol support </b> - Bluetooth Low
                        Energy/2.4 GHz proprietary
                        <br /> <b>On-air data rate </b>- Bluetooth LE : 2 Mbps/1
                        Mbps
                        <br /> 2.4 GHz proprietary : 2 Mbps/1 Mbps
                        <br />
                        <b> TX power </b> - +4 dBm to -20 dBm
                        <br />
                        <b> RX sensitivity </b> - -97 dBm at 1 Mbps
                        <br />
                        <b> Maximum range </b> - 100m
                        <br />
                        <b> Battery </b> - Coin cell (CR2032)
                        <br />
                        <b> Switch </b> - Yes
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
            User Environment
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
                        <b> Sound </b> <b>-</b>Buzzer
                        <br /> <b>Visual </b> - Multi Colour Led
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
                        Tracking Beacon{" "}
                      </IonText>
                    </IonCol>
                    <IonCol size="3" className="file_btn">
                      <a
                        href="/Downloadfile/Tracking_beacon.pdf"
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
