function ModeButton(props) {
  return (
    <button
      type="button"
      className="Month_button"
      onClick={() => props.toggleMode(props.id)}
    >
      {props.id}
    </button>
  );
}
export default ModeButton;
