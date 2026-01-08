
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Calculations from "./components/Calculation";

function App() {
  

  // let handleOnClick = (buttonElement) => {
  //   if (buttonElement === "=") {
  //     let Ans = eval(CalVal).toString();
  //     setCalVal(Ans);
  //   } else if (buttonElement === "C") {
  //     setCalVal(" ");
  //   } else {
  //     let use = CalVal + buttonElement;
  //     setCalVal(use);
  //   }
  // }

  return (
    // <div className="calculator">
    //   <Display DisplayValue={CalVal}></Display>
    //   <DisplayButton handleOnClick={handleOnClick} />
    // </div>
    <Calculations/>

  );
}

export default App;
