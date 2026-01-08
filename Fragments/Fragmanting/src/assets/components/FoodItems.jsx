import Item from "./items";
import React, { useState } from 'react';

const FoodItems = ({ foodName }) => {

  let [activeItems,setActiveItems]= useState([]);

  let onBuyButton =(item,event)=>{

    let newItems = [...activeItems,item];
    setActiveItems(newItems);
  

 }

  return (
    <ul className="list-group ">
      {foodName.map((item) => (
        <Item key={item} 
        food={item} 
        bought={activeItems.includes(item)}
        handleBuyButton ={(event) => onBuyButton(item,event)}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;