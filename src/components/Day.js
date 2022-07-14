import React, { useState } from "react";

function Day(props){
    const [isHover, setIsHover] = useState(false);
    // const [hasEvent, setHasEvent] = useState(false);
    let txtColor="black";
    const bgColor=props.isToday?"lightblue":"white";
    const bdColor=props.isSelected?"red":"black";
    const hoverColor=isHover?"lightcoral":bdColor;

    if(!props.isInThisMonth){
        txtColor="darkgray";
    }
    const divStyle={
        fontSize: "large",
        color: txtColor,
        backgroundColor: bgColor,
        borderColor:hoverColor,
    };

    const chosen=(
        <button className="dayBtn" style={divStyle}
        onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            {props.name}
        </button>
    );
    return (
        chosen
    );
}
export default Day;