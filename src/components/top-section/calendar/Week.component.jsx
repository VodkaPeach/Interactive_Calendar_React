import CourseDisplay from "../../bottom-section/course/CourseDisplay.component";
function Week(props) {
    const grid = (
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
            <CourseDisplay />
        </div>
    );
    return (grid);
}
export default Week;