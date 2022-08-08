import React, { useState } from "react";
import TimeSlotBtn from "../calendar/TimeSlotBtn";
export default function CourseDisplay(){
    const [courses, setCourses] = useState([])
    const btnList=[]
    for (let i=1; i<=84; i++){
        btnList.push(<TimeSlotBtn id={i+"course"} key={i+"course"}/>)
    }
    return (btnList);
}