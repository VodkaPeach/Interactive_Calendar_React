import React, { useState } from "react";
import EventAdd from "./components/EventAdd";

export default function AddEventButton(){
    const [add, setAdd] = useState(false);
    function handleClick(){
        setAdd(true)
    }
    function cancel(){
        setAdd(false);
    }
    return(
        <>
            <button className="addEventBtn" onClick={handleClick}>
                Add A Event
            </button>
            {add ? <EventAdd name="Add" cancel={cancel}/> : null}
        </>
    );
}