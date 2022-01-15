import React, { useState } from 'react';


const HookForm = (props) => {
    //instantiating/ defining so they are available locally 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [userError, setUserError] = useState("");
    const [emailerror, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    //takes inputs from form 
    const createUser = (e) => {
        setHasBeenSubmitted(true)
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };

    //form submit logic
    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    //username error logic
    const handleUsername = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length < 1) {
            setUserError("User name is required!");
        } else if(e.target.value.length < 3) {
            setUserError("User name must be 3 characters or longer!");
        } else {
            setUserError("")
        }
    };
    
    //email error logic
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Email must be 3 characters or longer!");
        } else {
            setEmailError("")
        }
    };

    //handle password logic 
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 7) {
            setPasswordError("Password must be 7 characters or longer!");
        } else {
            setPasswordError("")
        }
    };

    //logic for confirm password check
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 7) {
            setConfirmPasswordError("Confirm Password is required!");
        } else if(e.target.value !== password) {
            setConfirmPasswordError("Confirm Password must match password!");
        } else {
            setConfirmPasswordError("")
        }
    };


//this goes to app.js where it renders
    return (
        <div>
            <form onSubmit={createUser}>
            <h3>{ formMessage() }</h3>
                <div className='form-group'>
                    <label>User name: </label>
                    <input type="text" onChange={handleUsername} className='form-control' value ={username}/>
                    {/* ternary operator checking if user error is truthy or falsey */}
                    {
                    userError ?
                    <p style={{color:'red'}}>{ userError }</p> :
                    <p>&nbsp;</p>
                    }
                </div>
                <div className='form-group'>
                    <label>Email Address: </label>
                    <input type="text" onChange={handleEmail} className='form-control' value = {email}/>
                    {
                    emailerror ?
                    <p style={{color:'green'}}>{emailerror} </p> :
                        <p>&nbsp;</p>
                    }
                </div>
                <div className='form-group'>
                    <label>Password: </label>
                    <input type="text" onChange={handlePassword} className='form-control' value ={password}/>
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    <p>&nbsp;</p>
                    }
                </div>
                <div className='form-group'>
                    <label> Confirm Password: </label>
                    <input type="text" onChange={handleConfirmPassword} className='form-control' value = {confirmPassword} />
                    {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    <p>&nbsp;</p>
                    }
                </div>
                <input type="submit" value="Create User" className='btn btn-primary'/>
            </form>
            {/* display info on page  */}
            {/* <p>Username: {username}</p>
            <p>Email: {email}</p> */}

        </div>
    );
};

export default HookForm;