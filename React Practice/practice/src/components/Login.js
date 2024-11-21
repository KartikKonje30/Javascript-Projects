
import { useState } from "react"

export default function Login () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isloggedIn, setIsLoggedIn] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if(username === 'admin' && password === '123456'){
            setIsLoggedIn(true);
            setMessage('Welcome, User!')
        }
        else {
            setMessage('Invalid username or password')
            setTimeout( () => {setMessage('')}, 5000);
        }
    }

    return (
    <>
    <div>
        
        {
            !isloggedIn ? (
            <form className="" style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', gap: '10px'}}>
            <h1>Login Credentials</h1>
            <div> 
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
            <label htmlFor="password">Password: </label>
            <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" onClick={handleSubmit}>submit</button>
            <p>{message}</p>
            </form>
            )
            :
            (
            <div> 
            <p>{message}</p>
            <button type="submit" onClick={() => {setIsLoggedIn(false); setMessage('')}}>Log out</button>
            </div>
            )
        }
        
    </div>
    </>
    )
}
