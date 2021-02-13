
const AddTask = () => {

    return (
        <form className="mb-5">
            <div className="form-group">
                <label htmlFor="text">Text (required)</label>
                <textarea id="text" className="form-control" required></textarea>
            </div>
            <div className="form-group row">
                <div className="col-sm-6">
                    <label htmlFor="day">Day (required, YYYY-MM-DD)</label>
                    <input type="text" id="day" className="form-control" required />
                </div>
                <div className="col-sm-6 align-self-end mt-3 mt-sm-0 text-center">
                    <div className="custom-control custom-switch">
                        <input type="checkbox" id="reminder" className="custom-control-input" />
                        <label htmlFor="reminder" className="custom-control-label">Reminder</label>
                    </div>
                </div>
            </div>
        </form>
    )

};

export default AddTask;
