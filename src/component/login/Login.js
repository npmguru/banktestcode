
import React from 'react'
import LoginForm from './login-form/LoginForm'
import './Login.css';
import logo from '../../images/rakbank-logo.jpg';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import { useSelector,useDispatch } from 'react-redux'
import { AUTH_ERROR } from '../../core/constant/app';



const Login = () => {
    const { authentication } = useSelector(state => state.user);
    const isErrorLogin = get(authentication, 'data.status','');
    const dispatch = useDispatch();

    if(isEqual(isErrorLogin,'Error')){
      setTimeout(function(){ dispatch({type : AUTH_ERROR, payload : {authentication:null,isUserLogin : false}}) }, 3000)
    }

     
     return (
      <div className="auth-wrapper">
        <div className="auth-inner">
        <div className="container">
        <div className="row ">
          <div className="col-lg-12 text-center">
            <img className="circular--logo" src={logo} alt='Logo'  />
          </div>
        </div>
        

        
        <div className="row ">
          <div className="col-lg-12 text-center">
          <h3>Sign In</h3>
          </div>
        </div>

        {
         (isEqual(isErrorLogin,'Error')) ? 
         (<div className="row ml-1 mr-1">
             <div class="alert alert-danger col-lg-12 " role="alert">
               <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
               &nbsp; &nbsp; Invalid username and password!!
              </div>
          </div>) : ''
        }
        


          <LoginForm />
          <div className="row ">
          <div className="col-lg-12 text-center">
          <h3>&nbsp;</h3>
          </div>
        </div>
          </div>
        </div> 
      </div>
     );
}


export default Login;



