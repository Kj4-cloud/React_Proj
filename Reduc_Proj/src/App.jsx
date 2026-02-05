import "./App.css";
import { Header } from "./components/Header";
import { ButtonUse } from "./components/ButtonsToInc";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "./components/container";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PrivecyMsg } from "./components/PrivecyMsg";

function App() {


const privecy =useSelector(store => store.privecy) 


  return (
    <center>
      <Container>
       {privecy ? <PrivecyMsg/>  : <Header/>}
        <ButtonUse />
      </Container>
    </center>
  );
}

export default App;