import React from "react";
import { name, city } from "../data/data.js";




// const blueColor = {
//   color: 'blue'
// } 


function Home() {
  const h1Style = {
    color: 'firebrick',
  }; 
  function click(){
    console.log("im being clicked")
  };
  return <div id="home">
    <h1 style={h1Style} onClick={click}>{name} is a Web Developer from {city}</h1>
  </div>;
}

export default Home;
