import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ErrorMessage from './assets/components/ErrorMessage';
import FoodItems  from './assets/components/FoodItems';
import Container from './assets/components/Container';
import FoodInput from './assets/components/FoodInput';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {

  let [foodItems,setFoodItems]=useState([
           "Sabji", "Rice", "Veggies"
  ]);
 
    const OnKeyDown =(event)=>{
      if(event.key ==='Enter' ){
         let newFood = event.target.value;
         event.target.value="";
         let newItem = [...foodItems,newFood];
        setFoodItems(newItem);
      } 

    //       console.log(event.key.value);
    // setTextState(event.target.value);
  };

  return ( 
    <>
      <Container>
        <h1 className="Health_food">Healthy food</h1>
        <FoodInput handleOnKeyDown={OnKeyDown} />
        <ErrorMessage foodName={foodItems} />
        <FoodItems foodName={foodItems}  />
      </Container>
    </>
  );
}

export default App;