import React from "react";
const style2 = {
	background: "lightblue",
	border: " 2px solid darkblue",
	fontSize: "15px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
    padding :"25px"

};

function Square(props) {
  return (
    <button  style={style2} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;
