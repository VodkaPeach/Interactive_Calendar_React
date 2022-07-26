function ModeButton(props) {
    return (
        <div>
            <button type="button" className="Month_button"
                onClick={() => props.toggleMode("Month")}>
                Month
            </button>
            <button type="button" className="Week_button"
                onClick={() => props.toggleMode("Week")}>
                Week
            </button>
            <button type="button" className="Course_button"
                onClick={() => props.toggleMode("Course")}>
                Course Mode
            </button>
        </div>
    );
}
export default ModeButton;




