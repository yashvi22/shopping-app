import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../button/button.component";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"/>
        <div className="button">
          <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
     
    </div>
  );
}

export default CartDropdown;
