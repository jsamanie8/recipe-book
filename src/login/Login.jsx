import React, { useState } from 'react';

const Login = () => {
    const [user, handleUser] = useState({ name: '', password: '' });

    const handleChange = (event) => {
        handleUser({ name: event.target.value, password: '' });
    }

    return (
        <>
            <div>Hello from the login page!!</div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </label>
            </form>
        </>
    );
}

export default Login;