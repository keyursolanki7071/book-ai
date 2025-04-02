import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

function AuthLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  }, [])
  return (
    <div>
        <h1>Auth Layout</h1>
        <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout
