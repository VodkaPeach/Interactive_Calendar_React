//import { nanoid } from "nanoid"
import Day from "./components/Day"
import Event from "./components/Event"


function App(props) {
  const days = props.dayList.map(day=><Day id={day.id} name={day.name}/>)
  const events = props.eventList.map(event=><Event id={event.id} name={event.name}/>)

  return (
    <main className="calendarApp stack-large">
      <section className="topBar">
        <div className="todayDate">
          <button>Today's date.</button>
        </div>
        <div className="searchBar">
          <button>Search.</button>
        </div>
        <div className="functionalities">
          <button>Extra Functionalities.</button>
        </div>
        <div className="courseMode">
          <button>Course Mode</button>
        </div>
      </section>
      <div className="grid">
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
          <div>Four</div>
          <div>Five</div>
          <div>Six</div>
          <div>Seven</div>
          {days}
        </div>
      <div className="events">
        <h2>Events</h2>
        {events}
      </div>
    </main>
  );
}

export default App;
