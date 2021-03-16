import { taskHasValidationError } from './validateTask';

describe('validateTask tests', () => {

    describe('text is required, day is required', () => {

        it('1', () => {

            const task = {
                text: '',
                day: ''
            };

            const validationErrors = taskHasValidationError(task);

            expect(validationErrors.textValidationMessage).toBe('Task is required');
            expect(validationErrors.dayValidationMessage).toBe('Required in format YYYY-MM-DD');

        });

        it('2', () => {

            const task = {
                text: null,
                day: null
            };

            const validationErrors = taskHasValidationError(task);

            expect(validationErrors.textValidationMessage).toBe('Task is required');
            expect(validationErrors.dayValidationMessage).toBe('Required in format YYYY-MM-DD');

        });

        it('3', () => {

            const task = {
                text: 'Foo',
                day: ''
            };

            const validationErrors = taskHasValidationError(task);

            expect(validationErrors.textValidationMessage).not.toBeDefined();
            expect(validationErrors.dayValidationMessage).toBe('Required in format YYYY-MM-DD');

        });

        it('4', () => {

            const task = {
                text: '',
                day: '2022-12-24'
            };

            const validationErrors = taskHasValidationError(task);

            expect(validationErrors.textValidationMessage).toBe('Task is required');
            expect(validationErrors.dayValidationMessage).not.toBeDefined();

        });

        it('5', () => {

            const task = {
                text: 'foo',
                day: '2022-12-24'
            };

            const validationErrors = taskHasValidationError(task);

            expect(validationErrors).toBe(null);
        });

    });

    describe('day must be a valid date string, in format yyyy-MM-dd', () => {

        it('1', () => { 

            const task = {
                text: 'foo',
                day: '2022-12-32'
            };

            const validationErrors = taskHasValidationError(task);
            expect(validationErrors.dayValidationMessage).toBe('Required in format YYYY-MM-DD');
        });

        it('2', () => { 

            const task = {
                text: 'foo',
                day: '20221224'
            };

            const validationErrors = taskHasValidationError(task);
            expect(validationErrors.dayValidationMessage).toBe('Required in format YYYY-MM-DD');
        });

        it('3', () => { 

            const task = {
                text: 'foo',
                day: '2022-02-29'
            };

            const validationErrors = taskHasValidationError(task);
            expect(validationErrors.dayValidationMessage).toBe('Required in format YYYY-MM-DD');
        });

        it('4', () => { 

            const task = {
                text: 'foo',
                day: '2000-02-29' // leap year, so ok.
            };

            const validationErrors = taskHasValidationError(task);
            expect(validationErrors).toBe(null);
        });

    });

    // I have done many more tests like these, see regular-expressions > basics-04.test.js

});
