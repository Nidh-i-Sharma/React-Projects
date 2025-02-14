import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

export const Login = () => {
    const [username, setUserName] = useState(null);
    const [password, setPassword] = useState(null);

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange= {(e)=>setUserName(e.target.value)} placeholder='username' />
            <input type="text" value={password} onChange= {(e)=>setPassword(e.target.value)} placeholder='password' />
            <button onClick={handleSubmit}> Login </button>
        </div>
    )
}
