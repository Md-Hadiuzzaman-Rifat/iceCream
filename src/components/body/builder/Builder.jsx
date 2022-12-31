import React from "react";
import Items from "./items/Items";
import classes from "../builder/Builder.module.css";
import TotalPrice from "../builder/totalPrice/TotalPrice";
import Modal from "./modal/Modal";

const Builder = () => {
  return (
    <div className="react" id="builder">
      <div className={classes.builder}>
        <h3>Build your own Ice Cream Sundae</h3>
        <Items></Items>
        <TotalPrice></TotalPrice>
        <button
          type="button"
          onclick="next()"
          className={`${classes.order} rounded`}
        >
          Add to Cart
        </button>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default Builder;
