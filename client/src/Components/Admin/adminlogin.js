import {React,useState} from 'react'
import { warningMsg , errorMsg , successMsg } from '../notification';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AdminLogin = ({isAdminLogin}) => {
    const [userDetail,setUserDetail] = useState({name:"",password:""})
    const history = useNavigate();
    const [ loginFail , setLoginFail ] = useState(false);

    console.log(userDetail);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/admin/admin-login' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:userDetail.name,
        password:userDetail.password
      })
    })
    const data = await res.json();
   const {success} = data;
   console.log(success);
    if(success){
      const {token } = data;
      localStorage.setItem('adminToken',token);  
    
      console.log('login successfull');
      isAdminLogin(true);



    }else {
      console.log('login failed');
      setLoginFail(true);
   
    
      
    }

  }



  
  return (
    <section className="vh-100" style={{backgroundColor:'rgba(0,0,0,.05)'}} >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius:'1rem'}}>
        
          <div className="card-body p-5 text-center">
          <div className="admin-logo">
                      <a>
                        <img
                          src="assets/img/logo.png"
                           style={{width:'9rem'}}
                        />
                      </a>
                    </div>
                          <h3 className="mb-5 mt-2">Admin Login</h3>
                        {loginFail   &&  <p className='text-danger'>Invalid Credentials</p>
 }  
            <div className="form-outline mb-4">
              <input type="email" id="userid" placeholder='User Name' value={userDetail.name} onChange={(e)=>setUserDetail({...userDetail,name:e.target.value})} className="form-control form-control-lg" />
              
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="password" placeholder='Password' value={userDetail.password} onChange={(e)=>setUserDetail({...userDetail,password:e.target.value})} className="form-control form-control-lg" />
              
            </div>

            
            {/* <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" > Remember password </label>
            </div> */}

            <button className="btn theme-bg btn-lg rounded btn-block" onClick={handleSubmit} type="submit">Login</button>

          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default AdminLogin
