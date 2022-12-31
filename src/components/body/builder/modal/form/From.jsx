import React from 'react';
import classes from "./Form.module.css"

const Form = () => {
    return (
        <form className="orderForm">
        <ul>
          <li>
            <input
              type="text"
              name="name"
              className="fieldStyle fieldSplit alignLeft"
              placeholder="Name"
            />
            <input
              type="text"
              name="phone"
              className="fieldStyle fieldSplit alignRight"
              placeholder="Phone no."
            />
          </li>
          <li>
            <input
              type="text"
              name="email"
              className="fieldStyle fieldFull"
              placeholder="Email"
            />
          </li>
          <li>
            <textarea
              name="address"
              className="fieldStyle"
              placeholder="Address"
            ></textarea>
          </li>
          <li>
            <input type="submit" value="Submit Order" />
          </li>
        </ul>
      </form>
    );
};

export default Form;