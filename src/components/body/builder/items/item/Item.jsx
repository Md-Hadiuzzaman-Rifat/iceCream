import React from "react";
import classes from "./Item.module.css";

const Item = () => {
  return (
    <div>
      <li className={`${classes.item} react`} id="item">
        <span>Vanilla</span>
        <span className={classes.quantity}>2</span>
        <div className="right">
          <button type="button" className={`${classes.plus} round`}>
            +
          </button>
          <button type="button" className={`${classes.minus} round`}>
            -
          </button>
        </div>
      </li>
      {/* <li class="item">
            <span>Chocolate</span>
            <div class="right">
              <button type="button" class="plus rounded">+</button>
              <button type="button" class="minus rounded">-</button>
            </div>
          </li>

          <li class="item">
            <span>Strawberry</span>
            <div class="right">
              <button type="button" class="plus rounded">+</button>
              <button type="button" class="minus rounded">-</button>
            </div>
          </li>

          <li class="item">
            <span>Orange</span>
            <div class="right">
              <button type="button" class="plus rounded">+</button>
              <button type="button" class="minus rounded">-</button>
            </div>
          </li> */}
    </div>
  );
};

export default Item;
