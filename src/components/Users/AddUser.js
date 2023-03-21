import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        // Make the code below executes only with valid inputs
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({ title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values).' });
            return; // the lines below will not be executed
        }
        if (+enteredAge < 1) {
            setError({ title: 'Invalid age', message: 'Please enter a valid age (> 0).' });
            return; // the lines below will not be executed
        }

        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card cssClass={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Usernames</label>
                    <input id="username" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;

// Input fields now with ref are uncontrolled components. If we add 2 input in the, the first can appears as it was the last.
