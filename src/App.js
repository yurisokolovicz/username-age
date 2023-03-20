import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList(prevUsersLists => {
            return [...prevUsersLists, { name: uName, age: uAge, id: Math.random().toString() }];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList propsnamex={usersList} />
        </div>
    );
}

export default App;
