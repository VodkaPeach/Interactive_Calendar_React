import React, { useState } from "react";
import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
Date.prototype.toTemporalInstant = toTemporalInstant;

function Return(props){
    const today=Temporal.Now.plainDateISO().toString();
    const [day, setDay] = useState({today});
    
    function handleSubmit(e){
        e.preventDefault();
        props.clickDay(day);
    }
    const dayPicker=(
      <button onClick={()=>setDay(today)}>
        Return to today
      </button>
    );

    return(
        <div className='return'>
            <div className='selectDate'>
            <form onSubmit={handleSubmit}>
                {dayPicker}
            </form>
            </div>
        </div>
    );
}
export default Return;