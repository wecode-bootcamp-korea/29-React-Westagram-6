import React, { useState, useEffect } from 'react';

function Fetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/chaehyun/data.json')
      .then(res => res.json())
      .then(res => setUsers(res));
  });

  return (
    <ul>
      {users.map(user => {
        return <li key={user.id}>{user.name ? '' : ''}</li>;
      })}
    </ul>
  );
}

export default Fetch;
