import ModeButton from "../calendar/ModeButton.component";
import { todayDate } from "../../../utils/time";
import { useContext } from "react";
import { CalendarContext } from "../../../context/calendar.context";
import { UserContext } from "../../../context/user.context";
import { Link } from "react-router-dom";
export default function TopBar() {
  const { gDay, mode, setGDay } = useContext(CalendarContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  function handleChange(e) {
    e.preventDefault();
    setGDay(e.target.value);
  }
  function handleLogout(){
    setCurrentUser(null);
  }

  const goBack = (
    <button onClick={() => setGDay(todayDate)}>Return to Today</button>
  );
  const dayPicker = <input type="date" value={gDay} onChange={handleChange} />;
  return (
    <section className="topBar">
      <div className="todayDate">{dayPicker}</div>
      <div>
        <ModeButton id={"Month"} key={"Month"} />
      </div>
      {/*         <div>
          <ModeButton id={"Week"} key={"Week"} toggleMode={toggleMode} />
        </div> */}
      <div>
        <ModeButton id={"Course"} key={"Course"} />
      </div>
      <div>
        {gDay === todayDate || mode === "Course" ? <span></span> : goBack}
      </div>
      <div className="Account">
        {!currentUser ? (
          <button>
            <Link to="/Account">Register/Login</Link>
          </button>
        ) : (
          <button onClick={handleLogout}>
            <p>Logout</p>
          </button>
        )}
      </div>
      <div className="Account">
        <p>{currentUser && currentUser.username}</p>
      </div>
    </section>
  );
}
