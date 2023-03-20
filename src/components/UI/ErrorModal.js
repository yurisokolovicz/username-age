import React from 'react';
import Card from './Card'; // Using this component in more than 1 place in this project
import Button from './Button'; // Using this component in more than 1 place in this project
import classes from './ErrorModal.module.css';

const ErrorModal = props => {
    return (
        <div>
            <div onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;
