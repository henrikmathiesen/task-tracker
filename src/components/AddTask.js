import { useState } from 'react';
import PropTypes from 'prop-types';
import './AddTask.css';


const AddTask = ({ onSubmit, showAddTask }) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onFormSubmit = (e) => {
        e.preventDefault();

        // TODO: validation

        onSubmit({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false)
    }

    return (
        <form className="mb-5" noValidate onSubmit={onFormSubmit}>

            <div className="row">
                <div className="col-sm-6">
                    <label htmlFor="text">Task (required)</label>
                    <textarea id="text" className="form-control AddTask-form-control-text" required disabled={!showAddTask} value={text} onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <div className="col-sm-6 mt-3 mt-sm-0">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="day">Day (required, YYYY-MM-DD)</label>
                            <input type="text" id="day" className="form-control AddTask-form-control-day" required disabled={!showAddTask} value={day} onChange={(e) => setDay(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col align-self-center text-center">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" id="reminder" className="custom-control-input AddTask-form-control-switch" disabled={!showAddTask} value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                                <label htmlFor="reminder" className="custom-control-label">Reminder</label>
                            </div>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger btn-block" disabled={!showAddTask}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )

};

AddTask.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    showAddTask: PropTypes.bool.isRequired
};

export default AddTask;
