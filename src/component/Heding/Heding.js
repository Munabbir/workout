import React from 'react';
import './Heding.css'
const Heding = () => {
    return (
        <div className="nav-bar">
            <div className="nav-List">
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Heding;