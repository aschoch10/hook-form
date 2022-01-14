import React, { useState } from  'react';
    
    
const HookForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div className='form-group'>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) }className='form-control' />
            </div>
            <div  className='form-group'>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) }className='form-control'  />
            </div>
            <div  className='form-group'>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) }className='form-control'  />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
    
        </div>
    );
};
    
export default HookForm;