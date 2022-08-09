export default function BottomBar({ adding, mode, currentUser, handleAddEvent }) {
    return (
    <section className="event_top_bar">
      <div>
        <h2>{mode === "Course" ? "Courses" : "Events"}</h2>
        {!adding && mode !== "Course" && currentUser && (
          <button onClick={() => handleAddEvent(true)}>Add a new event</button>
        )}
      </div>
    </section>
  );
}
