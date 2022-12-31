import React from "react";
import IceCream from "./iceCream/IceCream"
import classes from "./Body.module.css"

const Body = () => {
  return (
    <div className={`${classes.mainBody} react`} id="body">
      <div className="container react" id="iceCreamBuilder">
        {/* <!-- icecream start --> */}
            <IceCream></IceCream>
        {/* <!-- ice cream end --> */}

        {/* <!-- builder start --> */}
        <div className="react" id="builder">
          <div className="builder">
            <h3>Build your own Ice Cream Sundae</h3>
            {/* <!-- items start --> */}
            <div className="react" id="items">
              <ul>
                {/* <!-- item start --> */}
                <li className="react item" id="item">
                  <span>Vanilla</span>
                  <span className="quantity">2</span>
                  <div className="right">
                    <button type="button" className="plus rounded">
                      +
                    </button>
                    <button type="button" className="minus rounded">
                      -
                    </button>
                  </div>
                </li>
                {/* <!-- item end --> */}

                <li className="item">
                  <span>Chocolate</span>
                  <div className="right">
                    <button type="button" className="plus rounded">
                      +
                    </button>
                    <button type="button" className="minus rounded">
                      -
                    </button>
                  </div>
                </li>

                <li className="item">
                  <span>Strawberry</span>
                  <div className="right">
                    <button type="button" className="plus rounded">
                      +
                    </button>
                    <button type="button" className="minus rounded">
                      -
                    </button>
                  </div>
                </li>

                <li className="item">
                  <span>Orange</span>
                  <div className="right">
                    <button type="button" className="plus rounded">
                      +
                    </button>
                    <button type="button" className="minus rounded">
                      -
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- items end --> */}

            {/* <!-- total price start --> */}
            <div className="total react" id="total">
              <div>Total Price</div>
              <div>3000.00 Tk</div>
            </div>
            {/* <!-- total price end --> */}
            <button type="button" onclick="next()" className="order rounded">
              Add to Cart
            </button>
          </div>

          {/* <!-- modal start --> */}
          <div className="react" id="modal">
            <div className="backdrop" onclick="removeModal()"></div>
            <div className="modalBody">
              <div className="formContainer react" id="orderForm">
                <h1>Complete the form below and hit submit</h1>
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
              </div>
            </div>
          </div>
          {/* <!-- modal end --> */}
        </div>
        {/* <!-- builder end --> */}
      </div>
    </div>
  );
};

export default Body;
