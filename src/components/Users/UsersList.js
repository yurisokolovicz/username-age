import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = props => {
    return (
        <Card cssClass={classes.users}>
            <ul>
                {props.propsnamex.map(user => (
                    <li>{user.name} (user.age) years old</li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;

// map() method is to transform the user data into JSX elements which will be rendered in the DOM.
