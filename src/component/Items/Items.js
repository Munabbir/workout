import React from 'react';
import'./Items.css'
const Items = (props) => {
    const {img, name, age, id}=props.item
    console.log(props);
    return (
        <div  className="list">
            <img src={img} alt="" />
        <div className="list-info">
            <p className="list-name">Name: {name}</p>
            <p>Age: {age}</p>
            <h5>ID: {id}</h5>
        </div>
            <button onClick={()=> props.handelClick(props.item)} className="btn-cart"><p>Add Cart</p></button>
        </div>
    );
};

export default Items;