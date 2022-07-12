//import { nanoid } from "nanoid"
import Day from "./components/Day"
import Event from "./components/Event"


function App(props) {

  const days = props.dayList.map(day=><Day id={day.id} name={day.name} isToday={day.isToday} 
  hasEvent={day.hasEvent} isSelected={day.isSelected}/>)
  const events = props.eventList.map(event=><Event id={event.id} name={event.name}/>)
  let grid=(
    <div className="gridMonth">
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thu</div>
    <div>Fri</div>
    <div>Sat</div>
    <div>Sun</div>
    {days}
    </div>
  );
  
 if(props.displayMode==="Week"){
    grid=(
      <div className="gridWeek">
      <div></div>
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
      <div className="ts1">9:00</div>
      <div className="ts2">10:00</div>
      <div className="ts3">11:00</div>
      <div className="ts4">12:00</div>
      <div className="ts5">13:00</div>
      <div className="ts6">14:00</div>
      <div className="ts7">15:00</div>
      <div className="ts8">16:00</div>
      <div className="ts9">17:00</div>
      <div className="ts10">18:00</div>
      <div className="ts11">19:00</div>
      <div className="ts12">20:00</div>
      </div>
    );
  }else if(props.displayMode==="Course"){
    <div className="gridCourse">
    <div></div>
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thu</div>
    <div>Fri</div>
    <div>Sat</div>
    <div>Sun</div>
    </div>
  }
  return (
    <main className="calendarApp stack-large">
      <section className="topBar">
        <div className="todayDate">
          <button>Today's date.</button>
        </div>
        <div className="searchBar">
          <button>Search.</button>
        </div>
        <div className="Month">
          <button>Month</button>
        </div>
        <div className="Week">
          <button>Week</button>
        </div>
        <div className="courseMode">
          <button>Course Mode</button>
        </div>
        <div className="functionalities">
          <button>Extra Functionalities.</button>
        </div>
      </section>
      {grid}
      <div className="events">
        <h2>Events</h2>
        {events}
      </div>
    </main>
  );
}

export default App;
