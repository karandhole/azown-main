import React, { useContext, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import propertyContext from '../../context/PropertyContext'

const SignUp = (props) => {
    const context = useContext(propertyContext)
    const { host,getuserdetail } = context
const [failed ,setfailed] = useState(false)
const history = useNavigate()
const pageLocation = useLocation();

const handleModal = ()=>{
    props.toHide();
}
    const [credential, setcredential] = useState({ name: "", email: "", password: "",phone:"" });
    // const getuserdetail = async () => {
    //     const responce = await fetch(`${host}/api/user/getuserdetail`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "auth-token": localStorage.getItem("token"),
    //         },
    //     });
    //     const userdetailed = await responce.json();
    //     console.log(userdetailed);
    //     localStorage.setItem('userDetail',JSON.stringify(userdetailed));
        
    // };
    const signup = async (name, email, password, phone) => {
        const responce = await fetch(`${host}/user/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password,phone }),
        });
         if(responce.ok)
          {
            const json = await responce.json();
            localStorage.setItem('userDetail',JSON.stringify(json))
            // localStorage.setItem("token", json.authtoken);
            getuserdetail()
             history(pageLocation.pathname);
             handleModal();

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
        // console.log(credential);
        signup(credential.name, credential.email, credential.password,credential.phone);
        setcredential({ name: "", email: "", password: "",phone:"" });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
            {failed && <span className='text-danger'>Enter the Valid Details</span>}
                <div className="form-group" style={{marginBottom:'5px'}}>
                    <label>Full Name</label>
                    <div className="input-with-icon">
                        <input type="text" className="form-control" style={{height:'3rem'}} name='name' onChange={handleChange} value={credential.name} />
                        <i className="ti-user" />
                    </div>
                </div>
                <div className="form-group" style={{marginBottom:'5px'}}>
                    <label>Email ID</label>
                    <div className="input-with-icon">
                        <input type="email" className="form-control" style={{height:'3rem'}} name='email'  onChange={handleChange} value={credential.email} required />
                        <i className="ti-user" />
                    </div>
                </div>
                <div className="form-group" style={{marginBottom:'5px'}}>
                    <label>Password</label>
                    <div className="input-with-icon">
                        <input type="password" className="form-control" style={{height:'3rem'}} minLength={5} name='password' onChange={handleChange} value={credential.password} required />
                        <i className="ti-unlock" />
                    </div>
                </div>

                <div className="form-group" style={{marginBottom:'5px'}}>
                    <label>Phone No.</label>
                    <div className="input-with-icon">
                        <input type="num" className="form-control" style={{height:'3rem'}} name='phone' maxLength={10} minLength={10} value={credential.phone} onChange={handleChange} required />
                        <i className="ti-user" />
                    </div>
                </div>
                
                <div className="form-group">
                    <button type="submit"  className="btn btn-md full-width pop-login">Register</button>
                </div>
            </form></div>
    )
}

export default SignUp