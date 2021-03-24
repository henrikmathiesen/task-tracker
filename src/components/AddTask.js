import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './AddTask.css';
import { taskHasValidationError } from '../util/validateTask';


const AddTask = ({ onSubmit, showAddTask }) => {

    let textInputRef = useRef(null);

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const [textValidationMessage, setTextValidationMessage] = useState('');
    const [dayValidationMessage, setdayValidationMessage] = useState('');

    let validationErrors;

    const clearForm = () => {
        setText('');
        setDay('');
        setReminder(false);
        setTextValidationMessage('');
        setdayValidationMessage('');
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        validationErrors = taskHasValidationError({ text, day });

        if (!validationErrors) {
            onSubmit({ text, day, reminder });
            clearForm();
            return;
        }

        setTextValidationMessage(validationErrors.textValidationMessage);
        setdayValidationMessage(validationErrors.dayValidationMessage);
    }

    useEffect(() => {
        if (showAddTask) {
            setTimeout(() => {
                textInputRef.current.focus();
            }, 500);
        } else {
            clearForm();
        }
    }, [showAddTask]);

    return (
        <form className="mb-5" noValidate onSubmit={onFormSubmit}>

            <div className="row">
                <div className="col-sm-6">
                    <label htmlFor="text">Task (required)</label>
                    <textarea id="text" className="form-control AddTask-form-control-text" required disabled={!showAddTask} value={text} onChange={(e) => setText(e.target.value)} ref={textInputRef}></textarea>
                    {textValidationMessage && <div className="text-danger">{textValidationMessage}</div>}
                </div>
                <div className="col-sm-6 mt-3 mt-sm-0">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="day">Day (required, YYYY-MM-DD)</label>
                            <input type="text" id="day" className="form-control AddTask-form-control-day" required disabled={!showAddTask} value={day} onChange={(e) => setDay(e.target.value)} />
                            {dayValidationMessage && <div className="text-danger">{dayValidationMessage}</div>}
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
