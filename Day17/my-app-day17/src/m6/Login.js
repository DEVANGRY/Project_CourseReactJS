import { useState } from "react";

const Login = () => {
    const handleSubmit = () => {
        alert("submit from");
    };
    const handleChange = (evt) => {
        console.log(evt.target.value);
        setUsername(evt.target.value);
    };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <from name="login" method="post" action="" onSubmit={handleSubmit}>
                <div>
                    <label>UserName/Email</label>
                    <input
                        type="text"
                        className="username"
                        value={username}
                        onChange={(event) => {
                            handleChange(event);
                        }}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        className="password"
                        value={password}
                    />
                </div>

                <button>Login</button>
            </from>
        </>
    );
};

export default Login;
