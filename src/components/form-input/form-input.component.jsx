export default FormInput = ({ label, ...otherProps}) => {
    return (
        <div className="group">
            <input className="" {...otherProps}/>
            <label className="form-input-label">
                {label}
            </label>
        </div>
    )
}