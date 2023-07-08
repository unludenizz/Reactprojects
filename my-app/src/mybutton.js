import React from "react";

function Mybutton({name , clicked}){
  return <button className={name} onClick={clicked}>{name}</button>
}

export default Mybutton;