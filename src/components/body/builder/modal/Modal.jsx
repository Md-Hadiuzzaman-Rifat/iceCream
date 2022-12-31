import React from "react";
import classes from "./Modal.module.css"
import Form from "./form/From"

const Modal = () => {
  return (
    <div className="react" id="modal">
      <div className={classes.backdrop} onclick="removeModal()"></div>
      <div className={classes.modalBody}>
        <div className="formContainer react" id="orderForm">
          <h1>Complete the form below and hit submit</h1>
          <Form></Form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
