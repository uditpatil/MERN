import React, {useState} from 'react';
const MoreForms = (props) => {
    
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')

    const createUser = {
        firstname, lastname, email, password, confPass
    }

    const formHandler = (e) => {
        e.preventDefault()
        if(firstname && lastname && email && password && confPass)
            if ((firstname.length < 2)&&(lastname.length<2)&&(email.length<5)&&(password.length<8)&&(password === confPass))
                console.log(createUser)
            else{
                setFirstname('')
                setLastname('')
                setEmail('')
                setPassword('')
                setConfPass('')
            }
        else{
            setFirstname('')
            setLastname('')
            setEmail('')
            setPassword('')
            setConfPass('')
        }
    }
    return (
        <div>
            <form className="form col-3 mx-auto" onSubmit={formHandler}>
                <label className="form-label ">First Name:</label>
                <input type="text" onChange={(e)=>setFirstname(e.target.value)} value={firstname} placeholder="Search"className="form-control"/>
                {
                    firstname && firstname.length < 2 ? <p>First Name must be at least 2 characters</p>:null
                }
                <label className="form-label">Last Name:</label>
                <input type="text" onChange={(e)=>setLastname(e.target.value)} value={lastname} placeholder="Search"className="form-control"/>
                {
                    lastname && lastname.length < 2 ? <p>Last Name must be at least 2 characters</p>:null
                } 
                <label className="form-label">Email:</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Search"className="form-control"/>
                {
                    email && email.length < 5 ? <p>Email must be at least 5 characters</p>:null
                }
                <label className="form-label">Password:</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Search"className="form-control"/>
                {
                    password && password.length <8 ? <p>Password must be at least 8 characters</p>:null
                }
                <label className="form-label">Confirm Password:</label>
                <input type="password" onChange={(e)=>setConfPass(e.target.value)} value={confPass} placeholder="Search"className="form-control"/>
                {
                    confPass && password !== confPass ? <p>Passwords must match</p>:null
                }
            </form>
        </div>
    )
}

export default MoreForms