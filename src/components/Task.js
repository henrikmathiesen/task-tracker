import PropTypes from 'prop-types';

const Task = ({ task, isLast }) => {

    const { reminder, day, text } = task;

    return (
        <div className={`card ${isLast === false ? 'mb-3' : ''} ${reminder ? 'border-dark': ''}`}>
            <div className="card-header d-flex justify-content-between">
                <div>{day.toDateString()}</div>
                { reminder &&
                    <div>
                        <span className="badge badge-dark">Reminder</span>
                    </div> }
            </div>
            <div className="card-body">
                <h2 className="h5 card-title">{text}</h2>
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
