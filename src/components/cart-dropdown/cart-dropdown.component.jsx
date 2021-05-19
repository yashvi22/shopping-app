import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../button/button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

function CartDropdown({cartItems}) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)
        }
      </div>
        <div className="button">
          <CustomButton inverted>GO TO CHECKOUT</CustomButton>
        </div>
     
    </div>
  );
}


const mapStateToProps=({cart:{cartItems}})=>({
  cartItems
})
export default connect(mapStateToProps)(CartDropdown);
