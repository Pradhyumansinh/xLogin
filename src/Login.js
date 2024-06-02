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
                    Username:<input type="text" required onChange={(e) => setUserName(e.target.value)} value={username} placeholder="username" /><br></br>
                    Password:<input type="password" required onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password" /><br></br>
                    <button type="submit">Submit</button>
                </form>
            }
        </>
    )
}

export default Login;