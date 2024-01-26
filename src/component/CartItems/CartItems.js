import React from 'react';
import './CartItems.css'
const CartItems = ({additems}) => {
    return (
        <div className="cart-item">
            <h1>Selected Items: {additems.length}</h1>
        </div>
    );
};

export default CartItems;