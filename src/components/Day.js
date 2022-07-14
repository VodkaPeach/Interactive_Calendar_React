import React, { useState } from "react";

function Day(props){
    
    // const [hasEvent, setHasEvent] = useState(false);
    let txtColor="black";
    const bgColor=props.isToday?"lightblue":"white";
    const bdColor=props.isSelected?"red":"black";
    const [isHover, setIsHover] = useState(bdColor);

    if(!props.isInThisMonth){
        txtColor="darkgray";
    }
    const divStyle={
        fontSize: "large",
        color: txtColor,
        backgroundColor: bgColor,
        borderColor:isHover,
    };

    const chosen=(
        <button id={props.id} className="dayBtn" style={divStyle}
        onMouseEnter={()=>setIsHover("lightcoral")} onMouseLeave={()=>setIsHover(bdColor)}>
            {props.name}
        </button>
    );
    return (
        chosen
    );
}
export default Day;