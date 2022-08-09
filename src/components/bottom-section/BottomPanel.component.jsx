import { useState } from "react";
import BottomBar from "./bar/BottomBar.component";
import Course from "./course/course.component";
import EventAdd from "./event/EventAdd.component";
import Event from "./event/Event.component"

export default function BottomPanel({ gDay, mode, currentUser, events }) {
  // controls the showing of the add event form
  const [adding, setAdding] = useState(false);
  // toggle cancel adding a event
  function handleAddEvent(val) {
    setAdding(val);
  }

  return (
    <section>
      <BottomBar
        adding={adding}
        mode={mode}
        currentUser={currentUser}
        handleAddEvent={handleAddEvent}
      />

      {mode === "Course" ? (
        <Course data={require("../../courses.json")} />
      ) : (
        currentUser &&
        events
          .filter((event) => event.date.slice(0, 10) === gDay)
          .map((event) => (
            <Event
              id={event._id}
              key={event._id}
              name={event.name}
              date={event.date}
              startTime={event.startTime}
              endTime={event.endTime}
              description={event.description}
              creator={event.creator}
            />
          ))
      )}
      {adding && <EventAdd name="Add" handleAddEvent={handleAddEvent} />}
    </section>
  );
}
