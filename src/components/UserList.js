import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((response) => setUsers(response.users))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="post-detail">
      <h3>User List</h3>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <img src={user.image} alt={user.firstName} className="user-image" />
            <p className="user-name">
              {user.firstName} {user.lastName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
