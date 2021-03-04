const LOCAL_STORAGE_KEY = 'TaskTracker_tasks';

const _generateId = (tasks) => {
    if (!tasks.length) {
        return 1;
    }

    const currentIds = tasks.map(t => t.id);
    const lastId = currentIds[0];

    return lastId + 1;
};

const _saveToLocalStorage = (tasks) => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}

const getTasks = () => {
    const tasks = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return (tasks && JSON.parse(tasks)) || [];

};

const submitTask = (tasks, task) => {
    const newTask = { ...task, id: _generateId(tasks), day: new Date(task.day) };
    
    const newTasks = [newTask, ...tasks];
    _saveToLocalStorage(newTasks);

    return newTasks;
};

const deleteTask = (tasks, id) => {
    const newTasks = tasks.filter(t => t.id !== id);
    _saveToLocalStorage(newTasks);

    return newTasks;
};

const setReminderOnTask = (tasks, id) => {
    const newTasks = tasks.map(t => t.id === id ? { ...t, reminder: !t.reminder } : t);
    _saveToLocalStorage(newTasks);

    return newTasks;
};

export { getTasks, submitTask, deleteTask, setReminderOnTask };
