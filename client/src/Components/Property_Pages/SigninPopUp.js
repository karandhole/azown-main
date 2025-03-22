import {React,useState} from 'react'
import SignUp from '../Header/SignUp';
import Login from '../Header/Login';
const SigninPop = (props) => {
  const [log,setlog] = useState(false);
  document.body.style.overflowY = 'hidden'

  const handleClick = () =>{
const data = false;
props.onHide(data);
document.body.style.overflowY = 'auto'

  }
  return (
  <>
    <div className="modal fade show"  id='login' aria-labelledby='resgistermodal' tabIndex={-1} role="dialog" style={{ display: "block" ,backgroundColor:"rgba(0, 0, 0, 0.5)",}} aria-hidden="true">
    <div className="modal-dialog modal-xl login-pop-form" role="document">
      <div className="modal-content overli" >
        <div className="modal-body p-0">
          <div className="resp_log_wrap">
            <div className="resp_log_thumb" style={{ background: 'url(assets/img/p-2.png)no-repeat' }} />
            <div className="resp_log_caption py-3">
              <span className="mod-close" data-dismiss="modal" aria-hidden="true" onClick={() =>  handleClick() }><i className="ti-close" /></span>
              <div className="edlio_152">
                <ul className="nav nav-pills tabs_system center" role="tablist">
                  <li className="nav-item" onClick={() => { setlog(true) }}>
                    <a className={!log ? "nav-link" : "nav-link active"} href ><i className="fas fa-sign-in-alt mr-2" />Login</a>
                  </li>
                  <li className="nav-item" onClick={() => { setlog(false) }}>
                    <a className={log ? "nav-link" : "nav-link active"} href ><i className="fas fa-user-plus mr-2" />Register</a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" >
                <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="pills-login-tab">
                  <div className="login-form">
                    {log ? 
                    <Login toHide={handleClick}/> :
                     <SignUp toHide={handleClick}/>
                    }

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default SigninPop