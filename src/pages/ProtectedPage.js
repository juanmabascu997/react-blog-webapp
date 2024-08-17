import { Navigate } from 'react-router-dom';
import UserList from '../components/UserList';
import { useEffect, useState } from 'react';

function ProtectedPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if(user) setIsAuthenticated(true)
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <UserList />
    </div>
  );
}

export default ProtectedPage;
