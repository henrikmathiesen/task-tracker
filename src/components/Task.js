import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import './Task.css';

const Task = ({ task, isLast, onDeleteClick, onReminderDoubleClick }) => {

    const { reminder, day, text, id } = task;

    return (
        <div className={`card ${!isLast && 'mb-3'} ${reminder && 'border-dark'}`} onDoubleClick={() => { onReminderDoubleClick(id) }}>
            <div className="card-header d-flex justify-content-between align-items-center">
                <div className="Task-day">{day.toDateString()}</div>
                <div>
                    {reminder && <span className="badge badge-dark mr-2 Task-reminder">Reminder</span>}
                    <button className="btn btn-sm text-danger" aria-label="Delete" onClick={() => { onDeleteClick(id) }}>
                        <span aria-hidden="true"><FaTimes /></span>
                    </button>
                </div>
            </div>
            <div className="card-body">
                <h2 className="h5 card-title Task-card-title">{text}</h2>
            </div>
        </div>
    )

};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onReminderDoubleClick: PropTypes.func.isRequired
};

Task.defaultProps = {
    isLast: false
};

export default Task;
