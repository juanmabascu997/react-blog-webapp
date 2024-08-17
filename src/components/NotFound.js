import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Volver al Inicio
      </Link>
    </div>
  );
}

export default NotFound;
