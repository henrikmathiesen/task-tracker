const getTasks = () => { 

    return [

        {
            id: 1,
            text: 'This is task 1',
            day: new Date(2021, 3-1, 20),
            reminder: true
        },

        {
            id: 2,
            text: 'This is task 2',
            day: new Date(2021, 5-1, 22),
            reminder: true
        },

        {
            id: 3,
            text: 'This is task 3',
            day: new Date(2021, 7-1, 15),
            reminder: false
        },

    ];

};

export { getTasks };