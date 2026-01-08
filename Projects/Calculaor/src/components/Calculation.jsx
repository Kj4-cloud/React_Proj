import DisplayButton from "./ButtonsContainer";
import Display from "./Display";
import { useState } from "react";

function Calculations(){
 
    let [CalVal, setCalVal] = useState("");

    let handleOnClick = (buttonElement) => {
    if (buttonElement === "=") {
      let Ans = eval(CalVal).toString();
      setCalVal(Ans);
    } else if (buttonElement === "C") {
      setCalVal(" ");
    } else {
      let use = CalVal + buttonElement;
      setCalVal(use);
    }
  }


  return (
  <div className="calculator">
      <Display DisplayValue={CalVal}></Display>
      <DisplayButton handleOnClick={handleOnClick} />
    </div>
  )

}

export default Calculations;