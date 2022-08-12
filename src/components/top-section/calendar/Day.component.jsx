import React, { useState, useContext } from "react";
import { CalendarContext } from "../../../context/calendar.context";

function Day(props) {
  const { setGDay, gDay } = useContext(CalendarContext);
  // const [hasEvent, setHasEvent] = useState(false);
  let txtColor = "black";
  const fontWeight = props.hasEvent ? "bold" : "normal";
  const bgColor = props.isToday ? "lightblue" : "white";
  const bdColor = props.isSelected ? "red" : "black";
  const [isHover, setIsHover] = useState(bdColor);

  if (props.isInThisMonth !== "this") {
    txtColor = "darkgray";
  }
  let nameISO = props.name;
  if (Number(props.name) < 10) {
    nameISO = "0" + props.name;
  }
  const divStyle = {
    fontSize: "large",
    color: txtColor,
    fontWeight: fontWeight,
    backgroundColor: bgColor,
    borderColor: isHover,
    borderRadius: "20% / 50%",
  };

  function handleClick() {
    if (props.isInThisMonth === "this") {
      setGDay(gDay.slice(0, 8) + nameISO);
    } else {
      let monthNum;
      let yearNum = Number(gDay.slice(0, 4));
      if (props.isInThisMonth === "last") {
        monthNum = Number(gDay.slice(5, 7)) - 1;
        if (monthNum === 0) {
          yearNum -= 1; // back to last year.
          monthNum = 12;
        }
      } else {
        monthNum = Number(gDay.slice(5, 7)) + 1;
        if (monthNum === 13) {
          yearNum += 1;
          monthNum = 1;
        }
      }
      const newMonth =
        monthNum < 10 ? "0" + String(monthNum) : String(monthNum);
      setGDay(String(yearNum) + "-" + newMonth + "-" + nameISO);
    }
  }
  const chosen = (
    <button
      id={props.id}
      className="dayBtn"
      style={divStyle}
      onMouseEnter={() => setIsHover("lightcoral")}
      onMouseLeave={() => setIsHover(bdColor)}
      onClick={handleClick}
    >
      {props.name}
    </button>
  );
  return chosen;
}
export default Day;
