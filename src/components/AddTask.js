
const AddTask = () => {

    return (
        <form>
            <div className="form-group">
                <label htmlFor="text">Text (required)</label>
                <textarea id="text" className="form-control" required></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="day">Day (required)</label>
                <input type="text" id="day" className="form-control" required />
            </div>
            <div className="form-group">
                <div className="custom-control custom-switch">
                    <input type="checkbox" id="reminder" className="custom-control-input" />
                    <label htmlFor="reminder" className="custom-control-label">Reminder</label>
                </div>
            </div>
        </form>
    )

};

export default AddTask;
