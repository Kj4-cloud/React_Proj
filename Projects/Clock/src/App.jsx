import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentTime from './CurrentTime';

function App() {
  let current = Date().t
  return(
    <div className="App text-center">
      <h1>Bharat Clock</h1>
      <h3>This is the clock that shows the time in Bharat at all times</h3>
     <div>This is the current time :<CurrentTime /></div>
    </div>
  );

}

export default App
