import React from "react";
import Navbar from './Components/Navbar';
import TecTacToe from './Components/TecTacToe';

const App = () => {

  return (
    <div>
    <Navbar title="TecTacToe_Game" home="Home" about="About" Contact="Contact"/>
      <TecTacToe/>
    </div>
  )
}

export default App

