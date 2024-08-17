import UserList from '../components/UserList';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function ProtectedPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if(user){
     setIsAuthenticated(true)
    } else {
      navigate('/')
    }
  }, []);

  return (
    <div>
      <UserList />
    </div>
  );
}

export default ProtectedPage;
