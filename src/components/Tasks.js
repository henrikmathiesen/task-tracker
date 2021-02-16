import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, onDeleteClick, onReminderDoubleClick }) => {

    return (
        <>
            {
                tasks.map((t, i, arr) => { 
                    return <Task key={t.id} task={t} isLast={arr.length - 1 === i} onDeleteClick={onDeleteClick} onReminderDoubleClick={onReminderDoubleClick} />
                })
            }
        </>
    )

};

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onReminderDoubleClick: PropTypes.func.isRequired
}

export default Tasks;
