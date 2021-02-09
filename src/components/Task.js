import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import './Task.css';

const Task = ({ task, isLast }) => {

    const { reminder, day, text } = task;

    return (
        <div className={`card ${!isLast && 'mb-3'} ${reminder && 'border-dark'}`}>
            <div className="card-header d-flex justify-content-between align-items-center">
                <div className="Task-day">{day.toDateString()}</div>
                <div>
                    {reminder && <span className="badge badge-dark mr-2 Task-reminder">Reminder</span>}
                    <button className="btn btn-sm text-danger" aria-label="Delete">
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
    task: PropTypes.object.isRequired
};

Task.defaultProps = {
    isLast: false
};

export default Task;