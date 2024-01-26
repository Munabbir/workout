import React, { useEffect, useState } from 'react';
import './GymItems.css'
import Items from '../Items/Items';
import CartItems from '../CartItems/CartItems';
const GymItems = () => {
    const[items, setitems] = useState([])
    const [additems, setadditems] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setitems(data))
    },[])
    

    const handelClick = (Items) =>{
        console.log(Items);
        const newAdditems =[...additems, Items]
        setadditems(newAdditems);
    }
    return (
        <div className="gymItems">
            <div className="item-Container">
                {
                    items.map(item => <Items
                    key={item.id}
                    item = {item}
                    handelClick={handelClick}
                    ></Items>)
                }
            </div>
            <div className="cart-items">
                <CartItems additems={additems}></CartItems>
            </div>
        </div>
    );
};

export default GymItems;