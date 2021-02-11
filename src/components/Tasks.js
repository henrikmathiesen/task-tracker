import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, onDeleteClick, onReminderDoubleClick }) => {

    const isLast = (t) => {
        const lastIndex = tasks.length - 1;
        return tasks.indexOf(t) === lastIndex;
    };

    return (
        <>
            { tasks.map(t => <Task key={t.id} task={t} isLast={isLast(t)} onDeleteClick={onDeleteClick} onReminderDoubleClick={onReminderDoubleClick} />)}
        </>
    )

};

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onReminderDoubleClick: PropTypes.func.isRequired
}

export default Tasks;
