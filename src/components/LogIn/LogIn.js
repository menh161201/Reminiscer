import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from '../contexts/AuthContext';
import Logo from  '../../img/Logo.svg';
import Google from '../../img/logo-google.png';

export default function LogIn() {

    const {login, signInWithGoogle}  =  useAuth(); 
    const [load, setLoad] =  useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState('');

    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate();

    async function handleLogIn() {
        try {
            setErr('')
            await login(email, password)
            
        }catch {
            setErr('Your email or password is incorrect')
            
        }
    }

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) setTimeout(function() {
            navigate("/dashboard");
        },1000) 
    }, [user, loading]);

  return (
    
    <div className='container'>
           
        <div className="logo">
            <Link to="/"><img src={Logo} alt="" /></Link>
        </div>
        <div className="sign-container">
            <div className="sign-content">
                <h3 className='heading-tertiary'>Welcome Back</h3>
                <div className="error" style={err === '' ? {display: "none"} : {display: "block"}}>{err}</div>
                <div className="sign-up-form">
                    <div className="sign-up-form-group">
                        
                        <div className="input-group">
                            <span className="email">Email</span>
                            <input required type="email" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="input-group">
                            <span className="password">Password</span>
                            <input required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                    </div>
                    
                    <button disabled={load} className='btn btn-long' type='submit' onClick={handleLogIn}>Log In</button>
                    <div className="or">
                        <h2>or</h2>
                    </div>
                    <div className="btn btn-long" onClick={signInWithGoogle}>
                        <div className="google-logo">
                            <img src={Google} alt="" />
                            <span>Log in with Google</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="log-in">
            <span>Already have an account? <span><Link className='to-log-in' to='/signup'>Sign Up</Link></span> </span>
        </div>
    </div>
  )
}
