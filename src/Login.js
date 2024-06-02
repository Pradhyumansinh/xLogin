import React, { useState } from "react";


const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [successMsg, setSuccessMsf] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "user" && password === "password") {
            setSuccessMsf(true);
            setErrorMsg("");
        } else {
            setErrorMsg("Invalid username or password");
            setSuccessMsf(false);
        }
    }

    return (
        <>
            <h1>Login Page</h1>

            {errorMsg && <p>{errorMsg}</p>}
            {successMsg
                ?
                <p>{successMsg && <p>Welcome, {username}!</p>}</p>
                :
                <form onSubmit={handleSubmit}>
                    <label for="Username">Username</label>:<input type="text" required onChange={(e) => setUserName(e.target.value)} value={username} placeholder="username" id="Username" /><br></br>
                    <label for="Password">Password</label>:<input type="password" required onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password" id="Password" /><br></br>
                    <button type="submit">Submit</button>
                </form>
            }
        </>
    )
}

export default Login;