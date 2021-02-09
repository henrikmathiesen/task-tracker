import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks }) => {

    const isLast = (t) => {
        const lastIndex = tasks.length - 1;
        return tasks.indexOf(t) === lastIndex;
    };

    return (
        <>
            { tasks.map(t => <Task key={t.id} task={t} isLast={isLast(t)} />)}
        </>
    )

};

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;
