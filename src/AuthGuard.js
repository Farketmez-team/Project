import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  //console.log(user)
  return user;
  //return true;
}

function AuthGuard() {
  const auth = useAuth();
  return (auth) ? <Outlet /> : <Navigate to="/auth" />;
}

export default AuthGuard
{ }