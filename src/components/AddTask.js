import './AddTask.css';


const AddTask = () => {

    return (
        <form className="mb-5" noValidate>

            <div className="row">
                <div className="col-sm-6">
                    <label htmlFor="text">Text (required)</label>
                    <textarea id="text" className="form-control Add-Task-text-area" required></textarea>
                </div>
                <div className="col-sm-6 mt-3 mt-sm-0">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="day">Day (required, YYYY-MM-DD)</label>
                            <input type="text" id="day" className="form-control" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col align-self-center text-center">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" id="reminder" className="custom-control-input" />
                                <label htmlFor="reminder" className="custom-control-label">Reminder</label>
                            </div>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger btn-block">Go!</button>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )

};

export default AddTask;
