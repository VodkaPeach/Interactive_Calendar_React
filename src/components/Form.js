import React, { useState, useEffect } from "react";
import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
Date.prototype.toTemporalInstant = toTemporalInstant;

function Form(props){
    const today=Temporal.Now.plainDateISO().toString();
    const [day, setDay] = useState(today);
    
    function handleChange(e){
        setDay(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        props.clickDay(day);
    }
    
    const dayPicker=(
      <input type="date" value={day} onChange={handleChange}/>
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
        </div>
    );
}
export default Form;