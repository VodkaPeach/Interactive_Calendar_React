import React, { useState } from "react";

function Day(props){
    // const [hasEvent, setHasEvent] = useState(false);
    let txtColor="black";
    const bgColor=props.isToday?"lightblue":"white";
    const bdColor=props.isSelected?"red":"black";
    const [isHover, setIsHover] = useState(bdColor);

    if(props.isInThisMonth!=="this"){
        txtColor="darkgray";
    }
    let nameISO = props.name;
    if(Number(props.name)<10){
        nameISO = "0"+props.name;
    }
    const divStyle={
        fontSize: "large",
        color: txtColor,
        backgroundColor: bgColor,
        borderColor:isHover,
    };

    function handleClick(){
        if (props.isInThisMonth==="this"){
            props.selectDate(nameISO);
        } 
    }
    const chosen=(
        <button id={props.id} className="dayBtn" style={divStyle}
        onMouseEnter={()=>setIsHover("lightcoral")} onMouseLeave={()=>setIsHover(bdColor)} onClick={handleClick}>
            {props.name}
        </button>
    );
    return (
        chosen
    );
}
export default Day;