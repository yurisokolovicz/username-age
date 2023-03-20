import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const handleUsername = event => {
        // console.log(event);
        // console.log(event.target.value);
        setUsername(event.target.value); // State is altereted from '' to the typed text: rendering
    };

    const handleAge = event => {
        // console.log(event);
        // console.log(event.target.value);
        setAge(event.target.value); // State is altereted from '' to the typed numbers: rendering
    };

    const addUserHandler = event => {
        event.preventDefault();
        // Make the code below executes only with valid inputs
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({ title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values).' });
            return; // the lines below will not be executed
        }
        if (+age < 1) {
            setError({ title: 'Invalid age', message: 'Please enter a valid age (> 0).' });
            return; // the lines below will not be executed
        }
        console.log(username, age);
        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card cssClass={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Usernames</label>
                    <input id="username" type="text" value={username} onChange={handleUsername} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={age} onChange={handleAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
