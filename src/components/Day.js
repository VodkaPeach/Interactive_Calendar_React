//import React, { useState } from "react";

function Day(props){
    //const [isToday, setIsToday] = useState(false);
    // const [hasEvent, setHasEvent] = useState(false);
    const txtColor=props.hasEvent?"yellow":"black";
    const bgColor=props.isToday?"blue":"white";
    const bdColor=props.isSelected?"red":"black";
    const divStyle={
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