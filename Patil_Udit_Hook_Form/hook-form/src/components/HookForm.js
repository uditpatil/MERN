import React, {useState} from 'react';

const HookForm = (props) =>{
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmPass};
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
    };

    return(
        <form onSubmit={ createUser }>
            <div>
                <label className="hook">First Name </label>
                <input type="text" value={firstname} 
                onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label className="hook">Last Name </label>
                <input type="text" value={lastname} 
                onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label className="hook">Email </label>
                <input type="text" value={email} 
                onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label className="hook">Password </label>
                <input type="password" value={password} 
                onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label className="hook">Confirm Password</label>
                <input type="password" value={confirmPass} 
                onChange={ (e) => setConfirmPass(e.target.value) } />
            </div>
            <div className="info">
                <p>Your Form Data</p>
                <p>Fisrt Name {firstname} </p>
                <p>Last Name {lastname}</p>
                <p>Email {email}</p>
                <p>Password {password}</p>
                <p>Confirm Password {confirmPass}</p>
            </div>

        </form>
    
    );
};

export default HookForm;