import React from "react";
import "./Collapsable_sm.scss";
import { Link } from "react-router-dom";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import { IonRow, IonCol, IonText } from "@ionic/react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

class CollapsableSM extends React.Component {
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
      <div className="collapsable_irp menu">
        <IonRow className="btn_row_c2 irpc_rows">
          <IonCol
            size="3"
            onClick={() => {
              this.toggle(1);
              if (this.state.isOpen2 === true) {
                this.toggle(2);
              } else if (this.state.isOpen3 === true) {
                this.toggle(3);
              } else if (this.state.isOpen4 === true) {
                this.toggle(4);
              } else if (this.state.isOpen5 === true) {
                this.toggle(5);
              } else if (this.state.isOpen6 === true) {
                this.toggle(6);
              }
            }}
            className="togglecol_clk "
            className={cx("app__toggle", " btn_collap", {
              "app__toggle--active": this.state.isOpen1,
            })}
          >
            Products
          </IonCol>
          <IonCol size="2" className="drp_icn_cirp2">
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
                  <IonCol size="10" className="col_pctxt2">
                    <IonText className="pc_desc bld_600">
                      <IonCol size="7" className="inner_text_irp">
                        <ul>
                          <li>
                            <IonRow className="btn_row_c2 irpc_rows">
                              <IonCol
                                size="4"
                                onClick={() => {
                                  this.toggle(2);
                                  if (this.state.isOpen3 === true) {
                                    this.toggle(3);
                                  } else if (this.state.isOpen4 === true) {
                                    this.toggle(4);
                                  } else if (this.state.isOpen5 === true) {
                                    this.toggle(5);
                                  } else if (this.state.isOpen6 === true) {
                                    this.toggle(6);
                                  }
                                }}
                                className="togglecol_clk "
                                className={cx("app__toggle", " btn_collap", {
                                  "app__toggle--active": this.state.isOpen2,
                                })}
                              >
                                RFID
                              </IonCol>
                              <IonCol size="2" className="drp_icn_cirp2">
                                {this.state.isOpen2 ? (
                                  <ArrowDropUpIcon
                                    style={{ fontSize: "4rem" }}
                                  />
                                ) : (
                                  <ArrowDropDownIcon
                                    style={{ fontSize: "4rem" }}
                                  />
                                )}
                              </IonCol>

                              <Collapse
                                isOpen={this.state.isOpen2}
                                className={
                                  "app__collapse2 app__collapse--gradient " +
                                  (this.state.isOpen2
                                    ? "app__collapse--active"
                                    : "")
                                }
                                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                                aria-hidden={
                                  this.state.isOpen2 ? "false" : "true"
                                }
                                elementType="article"
                                render={(collapseState) => (
                                  <React.Fragment>
                                    <div className="pc_irpc_text">
                                      <IonCol size="10" className="col_pctxt2">
                                        <IonText className="pc_desc bld_600">
                                          <IonCol
                                            size="7"
                                            className="inner_text_irp"
                                          >
                                            <ul>
                                               
                                            <li className="listitem"> 
                                              
                                            arun sharm a
                                             
                                              </li>
                                              <li
                                                className="he tocursor text_grey_900 "
                                                onClick={() =>
                                                  this.props.setOpen(
                                                    !this.props.open
                                                  )
                                                }
                                              >
                                                <Link to="/products/ir">
                                                  {" "}
                                                  One Port Integrated Reader
                                                </Link>
                                              </li>
                                              <li
                                                className="he tocursor text_grey_900"
                                                onClick={() =>
                                                  this.props.setOpen(
                                                    !this.props.open
                                                  )
                                                }
                                              >
                                                <Link to="/products/ir-port2">
                                                  Two Port Integrated Reader
                                                </Link>
                                              </li>
                                              <li
                                                className="he tocursor text_grey_900"
                                                onClick={() =>
                                                  this.props.setOpen(
                                                    !this.props.open
                                                  )
                                                }
                                              >
                                                <Link to="/products/fr-port2">
                                                  Two Port Fixed Reader
                                                </Link>
                                              </li>
                                              <li
                                                className="he tocursor text_grey_900"
                                                onClick={() =>
                                                  this.props.setOpen(
                                                    !this.props.open
                                                  )
                                                }
                                              >
                                                {" "}
                                                <Link to="/products/fr-port4">
                                                  Four Port Fixed Reader
                                                </Link>
                                              </li>
                                            </ul>
                                          </IonCol>
                                        </IonText>
                                      </IonCol>
                                    </div>
                                  </React.Fragment>
                                )}
                              />
                            </IonRow>
                          </li>
                          <li>
                            <IonRow className="btn_row_c2 irpc_rows2">
                              <IonCol
                                onClick={() => {
                                  this.toggle(3);
                                  if (this.state.isOpen2 === true) {
                                    this.toggle(2);
                                  } else if (this.state.isOpen4 === true) {
                                    this.toggle(4);
                                  } else if (this.state.isOpen5 === true) {
                                    this.toggle(5);
                                  } else if (this.state.isOpen6 === true) {
                                    this.toggle(6);
                                  }
                                }}
                                className="togglecol_clk "
                                className={cx("app__toggle", " btn_collap", {
                                  "app__toggle--active": this.state.isOpen3,
                                })}
                              >
                                Antenna
                              </IonCol>
                              <IonCol size="2" className="drp_icn_cirp2">
                                {this.state.isOpen3 ? (
                                  <ArrowDropUpIcon
                                    style={{ fontSize: "4rem" }}
                                  />
                                ) : (
                                  <ArrowDropDownIcon
                                    style={{ fontSize: "4rem" }}
                                  />
                                )}
                              </IonCol>

                              <Collapse
                                isOpen={this.state.isOpen3}
                                className={
                                  "app__collapse2 app__collapse--gradient " +
                                  (this.state.isOpen3
                                    ? "app__collapse--active"
                                    : "")
                                }
                                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                                aria-hidden={
                                  this.state.isOpen3 ? "false" : "true"
                                }
                                elementType="article"
                                render={(collapseState) => (
                                  <React.Fragment>
                                    <div className="pc_irpc_text">
                                      <IonCol size="10" className="col_pctxt2">
                                        <IonText className="pc_desc bld_600">
                                          <IonCol
                                            size="7"
                                            className="inner_text_irp"
                                          >
                                            <ul>
                                              <li
                                                className="he tocursor text_grey_900"
                                                onClick={() =>
                                                  this.props.setOpen(
                                                    !this.props.open
                                                  )
                                                }
                                              >
                                                <Link to="/products/linear-antenna" className="text-dark">
                                                  {" "}
                                                  Linear Polarized Antenna
                                                </Link>
                                              </li>
                                              <li
                                                className="listitem"
                                                onClick={() =>
                                                  this.props.setOpen(
                                                    !this.props.open
                                                  )
                                                }
                                              >
                                                <Link to="/products/circular-antenna">
                                                  Circular Polarized Antenna
                                                </Link>
                                              </li>
                                            </ul>
                                          </IonCol>
                                        </IonText>
                                      </IonCol>
                                    </div>
                                  </React.Fragment>
                                )}
                              />
                            </IonRow>
                          </li>
                          <li>
                            <IonRow className="btn_row_c2 irpc_rows2">
                              <IonCol
                                onClick={() => {
                                  this.toggle(4);
                                  if (this.state.isOpen2 === true) {
                                    this.toggle(2);
                                  } else if (this.state.isOpen3 === true) {
                                    this.toggle(3);
                                  } else if (this.state.isOpen5 === true) {
                                    this.toggle(5);
                                  } else if (this.state.isOpen6 === true) {
                                    this.toggle(6);
                                  }
                                }}
                                className="togglecol_clk "
                                className={cx("app__toggle", " btn_collap", {
                                  "app__toggle--active": this.state.isOpen4,
                                })}
                              >
                                Beacon
                              </IonCol>
                              <IonCol size="2" className="drp_icn_cirp2">
                                {this.state.isOpen4 ? (
                                  <ArrowDropUpIcon
                                    style={{ fontSize: "4rem" }}
                                  />
                                ) : (
                                  <ArrowDropDownIcon
                                    style={{ fontSize: "4rem" }}
                                  />
                                )}
                              </IonCol>

                              <Collapse
                                isOpen={this.state.isOpen4}
                                className={
                                  "app__collapse2 app__collapse--gradient " +
                                  (this.state.isOpen4
                                    ? "app__collapse--active"
                                    : "")
                                }
                                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                                aria-hidden={
                                  this.state.isOpen4 ? "false" : "true"
                                }
                                elementType="article"
                                render={(collapseState) => (
                                  <React.Fragment>
                                    <div className="pc_irpc_text">
                                      <IonCol size="10" className="col_pctxt2">
                                        <IonText className="pc_desc bld_600">
                                          <IonCol
                                            size="7"
                                            className="inner_text_irp"
                                          >
                                            <ul>
                                              <li
                                                className="he tocursor text_grey_900"
                                                onClick={() =>
                                                  this.props.setOpen(
                                                    !this.props.open
                                                  )
                                                }
                                              >
                                                <Link to="/products/tracking-beacon">
                                                  {" "}
                                                  Tracking Beacon
                                                </Link>
                                              </li>
                                            </ul>
                                          </IonCol>
                                        </IonText>
                                      </IonCol>
                                    </div>
                                  </React.Fragment>
                                )}
                              />
                            </IonRow>
                          </li>
                          <li>
                            <IonRow className="btn_row_c2 irpc_rows2">
                              <IonCol
                                onClick={() => {
                                  this.toggle(5);
                                  if (this.state.isOpen2 === true) {
                                    this.toggle(2);
                                  } else if (this.state.isOpen3 === true) {
                                    this.toggle(3);
                                  } else if (this.state.isOpen4 === true) {
                                    this.toggle(4);
                                  } else if (this.state.isOpen6 === true) {
                                    this.toggle(6);
                                  }
                                }}
                                className="togglecol_clk "
                                className={cx("app__toggle", " btn_collap", {
                                  "app__toggle--active": this.state.isOpen5,
                                })}
                              >
                                Logger
                              </IonCol>
                              <IonCol size="2" className="drp_icn_cirp2">
                                {this.state.isOpen5 ? (
                                  <ArrowDropUpIcon
                                    style={{ fontSize: "4rem" }}
                                  />
                                ) : (
                                  <ArrowDropDownIcon
                                    style={{ fontSize: "4rem" }}
                                  />
                                )}
                              </IonCol>

                              <Collapse
                                isOpen={this.state.isOpen5}
                                className={
                                  "app__collapse2 app__collapse--gradient " +
                                  (this.state.isOpen5
                                    ? "app__collapse--active"
                                    : "")
                                }
                                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                                aria-hidden={
                                  this.state.isOpen5 ? "false" : "true"
                                }
                                elementType="article"
                                render={(collapseState) => (
                                  <React.Fragment>
                                    <div className="pc_irpc_text">
                                      <IonCol size="10" className="col_pctxt2">
                                        <IonText className="pc_desc bld_600">
                                          <IonCol
                                            size="7"
                                            className="inner_text_irp"
                                          >
                                            <ul>
                                              <li
                                                className="he tocursor text_grey_900"
                                                onClick={() =>
                                                  this.props.setOpen(
                                                    !this.props.open
                                                  )
                                                }
                                              >
                                                <Link to="/products/ambitag">
                                                  {" "}
                                                  Data Logger
                                                </Link>
                                              </li>
                                            </ul>
                                          </IonCol>
                                        </IonText>
                                      </IonCol>
                                    </div>
                                  </React.Fragment>
                                )}
                              />
                            </IonRow>
                          </li>
                        </ul>
                      </IonCol>
                    </IonText>
                  </IonCol>
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

export default CollapsableSM;
