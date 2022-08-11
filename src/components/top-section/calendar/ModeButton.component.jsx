import {useContext} from "react";
import {CalendarContext} from "../../../context/calendar.context";

function ModeButton(props) {
  const {setMode} = useContext(CalendarContext);
  return (
    <button
      type="button"
      className="Month_button"
      onClick={() => setMode(props.id)}
    >
      {props.id}
    </button>
  );
}
export default ModeButton;
