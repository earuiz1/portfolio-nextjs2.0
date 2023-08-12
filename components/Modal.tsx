"use client";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";

const Modal = () => {
  const [domReady, setDomReady] = useState<boolean>(false);

  //const modalDestination = document.querySelector("#modal-root");

  useEffect(() => {
    setDomReady(true);
  }, []);

  return domReady ? (
    <>{ReactDOM.createPortal(<ModalOverlay />, document.body)}</>
  ) : null;
};

export default Modal;
