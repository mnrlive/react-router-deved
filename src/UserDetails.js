import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function UserDetails({ match }) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);

        const details = await data.json();
        setUser(details);
    };

    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
}

export default UserDetails;