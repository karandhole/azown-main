import React, { useContext, useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import propertyContext from '../../context/PropertyContext';

const Login = (props) => {
    const [failed,setfailed] = useState(false)
    const [credential, setcredential] = useState({ email: "", password: "" });
    const context = useContext(propertyContext)
    const {  host,getuserdetail } = context
    const history = useNavigate();
    const pageLocation = useLocation()
    const handleModal = ()=>{
        props.toHide();
    }
    // console.log(pageLocation.pathname)
    // const getuserdetail = async () => {
    //     const responce = await fetch(`${host}/api/auth/getuserdetail`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "auth-token": localStorage.getItem("token"),
    //         },
    //     });
    //     const userdetailed = await responce.json();
    //     console.log(userdetailed);
    //     localStorage.setItem('userType', userdetailed.usertype)
    //     localStorage.setItem('userId', userdetailed._id)
    // };
    const login = async (email, password) => {
        const responce = await fetch(`${host}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const json = await responce.json();
       
        if (responce.ok) {
            localStorage.setItem('userDetail',JSON.stringify(json));
            // localStorage.setItem('token', json.authtoken);
            // getuserdetail()
            handleModal();
            getuserdetail();
            history(pageLocation.pathname);
        } else {
            setfailed(true)
            setTimeout(() => {
                setfailed(false)
            }, 3000);
        }
    };
    const handleChange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        login(credential.email, credential.password);
        setcredential({ email: "", password: "" });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
           {failed && <p className='text-danger'>Wrong Credentials</p> } 
                <div className="form-group">
                    <label>Email</label>
                    <div className="input-with-icon">
                        <input type="email" className="form-control" name='email' onChange={handleChange} value={credential.email} required />
                        <i className="ti-user" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <div className="input-with-icon">
                        <input type="password" className="form-control" name='password' onChange={handleChange} value={credential.password} required />
                        <i className="ti-unlock" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="eltio_ol9">
                        <div className="eltio_k1">
                            <input id="dd" className="checkbox-custom" name="dd" type="checkbox" />
                            <label htmlFor="dd" className="checkbox-custom-label">Remember Me</label>
                        </div>
                        <div className="eltio_k2">
                            <a>Lost Your Password?</a>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-md full-width pop-login">Login</button>
                </div>
            </form></div>
    )
}

export default Login