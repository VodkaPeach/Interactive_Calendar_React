//import React, { useState } from "react";

function Day(props){
    //const [isToday, setIsToday] = useState(false);
    // const [hasEvent, setHasEvent] = useState(false);
    let txtColor="black";
    const bgColor=props.isToday?"lightblue":"white";
    const bdColor=props.isSelected?"red":"black";
    const textDeco=props.hasEvent?"dotted":"none"; 
    if(!props.isInThisMonth){
        txtColor="darkgray";
    }
    const divStyle={
        fontSize: "large",
        color: txtColor,
        backgroundColor: bgColor,
        borderColor:bdColor,
    };

    const chosen=(
        <button className="dayBtn" style={divStyle}>
            {props.name}
        </button>
    );
    return (
        chosen
    );
}
export default Day;