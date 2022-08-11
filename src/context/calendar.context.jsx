import { createContext, useState } from "react";
import {todayDate} from "../utils/time"

export const CalendarContext = createContext({
    gDay: todayDate,
    mode: "Month",
    setGDay: () => null,
    setMode: () => null,
})

export const CalendarProvider = ({children})=>{
    const [gDay, setGDay] = useState(todayDate);
    const [mode, setMode] = useState("Month");
    const value = {gDay, mode, setGDay, setMode};

    return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>;
}