import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import "./sidemenu.scss";

import CollapsableSM from "./Collapsable_sidemenu/Collapsable_sm.js";

function Sidemenu(props: any) {
  const history = useHistory();
  const menuRef: any = useRef(null);
  const { open, setOpen } = props;

  const handleClick = React.useCallback((e: any) => {
    console.log("CLICK");
    if (menuRef && menuRef.current && !menuRef.current.contains(e.target)) {
      document.removeEventListener("click", handleClick);
      setOpen(false);
      console.log("outside click");
      return;
    }
  }, []);

  useEffect(() => {
    if (open) {
      //attach event listner to close menu on outside click.
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }
  }, [handleClick, open]);

  const goToView = (view: string, closeMenu?: boolean) => {
    console.log(closeMenu);
    console.log(view);
    if (!!closeMenu) {
      setOpen(false);
    }
    history.push(`/${view}`);
  };

  return (
    <div className="sidemenu">
      <IonGrid className="p_0">
        <div>
          <IonRow className="ion-align-items-center text_white">
            <IonCol className="d-flex justify_content_end">
              <div ref={menuRef} className="menuBars">
                <IonRow className="userMenu d-flex ion-justify-content-between ion-align-items-center">
                  {open ? (
                    <div className="Prof_Dropdown">
                      <ul className="li">
                        <li
                          className="loginli tocursor text_grey_900"
                          onClick={() => setOpen(!open)}
                        >
                          <Link to="/sector/rfid">RFID</Link>
                        </li>
                        <li
                          className="pr tocursor text_grey_900"
                          onClick={() => setOpen(!open)}
                        >
                          {" "}
                          <Link to="/sector/Beacon">Beacon</Link>
                        </li>
                        <li
                          className="signupli tocursor text_grey_900"
                          onClick={() => setOpen(!open)}
                        >
                          <Link to="/sector/datalogger">Data Logger</Link>
                        </li>
                        <li
                          className="hr text_grey_900 tocursor"
                          onClick={() => setOpen(!open)}
                        >
                          <Link to="/sector/education">Education</Link>
                        </li>

                        <li
                          className="he tocursor text_grey_900"
                          onClick={() => setOpen(!open)}
                        >
                          <Link to="/support">Help</Link>
                        </li>
                        <li
                          className="he tocursor text_grey_900"
                          onClick={() => setOpen(!open)}
                        >
                          <Link to="/about">About</Link>
                        </li>
                        <li
                          className="he tocursor text_grey_900"
                          onClick={() => setOpen(!open)}
                        >
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        <li className="he tocursor text_grey_900">
                          <CollapsableSM setOpen={setOpen} open={open} />
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </IonRow>
              </div>
            </IonCol>
          </IonRow>
        </div>
      </IonGrid>
    </div>
  );
}

export default Sidemenu;
