const getTasks = () => {

    return [

        {
            id: 1,
            text: 'This is task 1',
            day: new Date(2021, 3 - 1, 20),
            reminder: true
        },

        {
            id: 2,
            text: 'This is task 2',
            day: new Date(2021, 5 - 1, 22),
            reminder: true
        },

        {
            id: 3,
            text: 'This is task 3',
            day: new Date(2021, 7 - 1, 15),
            reminder: false
        },

    ];

};

const submitTask = (tasks, task) => {
    const id = Math.floor(Math.random() * 10000);
    const day = new Date(task.day);
    
    const newTask = { ...task };
    newTask.id = id;
    newTask.day = day;

    return [...tasks, newTask];
};

const deleteTask = (tasks, id) => {
    return tasks.filter(t => t.id !== id);
};

const setReminderOnTask = (tasks, id) => {
    return tasks.map(t => t.id === id ? { ...t, reminder: !t.reminder } : t);
};

export { getTasks, submitTask, deleteTask, setReminderOnTask };
