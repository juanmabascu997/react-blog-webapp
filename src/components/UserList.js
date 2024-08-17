import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(response => setUsers(response.data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="user-list">
      <h3>User List</h3>
      {users.map(user => (
        <div key={user.id} className="user-item">
          <img src={user.img} alt={user.firstName} />
          <p>{user.firstName} {user.lastName}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
