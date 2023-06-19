import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {


    const {currentUser} = useAuth();

    const {logout} = useAuth();

    const navigate = useNavigate();


    async function handleLogOut() {
        try {
            await logout()
            // localStorage.removeItem('userData')
            navigate('/login')
        }catch(err) {
            console.log(err);
        }   
        
    }

  return (
    <div className='container'>
        <div className="btn" onClick={handleLogOut}>Log Out</div>
    </div>
  )
}
