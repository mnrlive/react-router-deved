import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');

    const items = await data.json();
    setUsers(items);
  };

  return (
    <div>
      {users.map(item => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;