import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    if (localStorage.getItem("token")) {
        return children;
      }
      return <Navigate to="/" />;
}

export default ProtectedRoute
