const _dateIsValid = (value) => {

    if (!value) {
        return false;
    }

    // yyyy-MM-dd
    const pattern01 = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;

    const isValidPattern = pattern01.test(value);

    if (!isValidPattern) {
        return false;
    }

    const noDashes = value.replace(/-/g, '');

    const yearPart = noDashes.slice(0, 4);
    const monthPart = noDashes.slice(4, 6);
    const dayPart = noDashes.slice(6, 8);

    const dateObj = new Date(`${yearPart}-${monthPart}-${dayPart}`);

    return dateObj.getFullYear() === +yearPart &&
        (dateObj.getMonth() + 1) === +monthPart &&
        dateObj.getDate() === +dayPart;

}

const taskHasValidationError = (task) => {
    let validationErrors = {};

    if (!task.text) {
        validationErrors.textValidationMessage = 'Task is required';
    }

    if (!_dateIsValid(task.day)) {
        validationErrors.dayValidationMessage = 'Required in format YYYY-MM-DD';
    }

    if (validationErrors.textValidationMessage || validationErrors.dayValidationMessage) {
        return validationErrors;
    }

    return null;
};

export { taskHasValidationError }

