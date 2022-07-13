import React, { useState, useEffect } from "react";
import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
Date.prototype.toTemporalInstant = toTemporalInstant;

function Form(props){
    const today=Temporal.Now.plainDateISO().toString();
    const [day, setDay] = useState(today);
    const [isToday, setIsToday] = useState(true);
    
    function handleChange(e){
        setDay(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        props.clickDay(day);
        setIsToday(day===today);
    }
    
    const dayPicker=(
      <input type="date" value={day} onChange={handleChange}/>
    );

    const dayReturn=(
        <button onClick={()=>setDay(today)}>
          Return to today
        </button>
      );

    const goBack = (
        <form onSubmit={handleSubmit}>
                {dayReturn}
        </form>
    );
    
    /* const searchBar=(
        <input
        type="text"
        id="new-query"
        className="queryInput"
        name="text"
        // the browser will render {value} with the content of {name}.
        value={props.name}
        autoComplete="off"

        // listen to user input.
        //onChange={handleChange}
      />
    ) */

    return(
        <div className='query'>
            <div className='selectDate'>
            <form onSubmit={handleSubmit}>
                {dayPicker}
                <button type="submit"
                className="btn_submit_search">
                    Go!
                </button>
            </form>
            </div>
            {/* <div className='SearchDate'>
            <form>
                {searchBar}
                <button type="submit"
                className="btn_submit_search">
                    Search
                </button>
            </form>
            </div> */}
            {isToday? <span></span> : goBack}
        </div>
    );
}
export default Form;