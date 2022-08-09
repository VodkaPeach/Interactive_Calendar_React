import ModeButton from "../calendar/ModeButton.component";
import { todayDate } from "../../../utils/time";

export default function TopBar({
  mode,
  clickDay,
  gDay,
  handleChange,
  toggleMode,
  currentUser,
}) {
  const goBack = (
    <button onClick={() => clickDay(todayDate)}>Return to Today</button>
  );
  const dayPicker = <input type="date" value={gDay} onChange={handleChange} />;
  return (
    <section className="topBar">
      <div className="todayDate">{dayPicker}</div>
      <div>
        <ModeButton id={"Month"} key={"Month"} toggleMode={toggleMode} />
      </div>
      {/*         <div>
          <ModeButton id={"Week"} key={"Week"} toggleMode={toggleMode} />
        </div> */}
      <div>
        <ModeButton id={"Course"} key={"Course"} toggleMode={toggleMode} />
      </div>
      <div>
        {gDay === todayDate || mode === "Course" ? <span></span> : goBack}
      </div>
      <div className="Account">
        <a href="/Account">Register/Login</a>
      </div>
      <div className="Account">
        <p>{currentUser && currentUser.username}</p>
      </div>
    </section>
  );
}
