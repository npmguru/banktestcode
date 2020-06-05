import React, { useEffect,useState } from 'react';
import loading from '../../images/loading.svg';
import logo from '../../images/logo.png';
import { Redirect } from "react-router-dom";
import './Loading.css';

const Loading = () => {
  const [isRedirect, setRedirect] = useState(false)
  useEffect(() => { 
        setTimeout(() => { setRedirect(true) }, 3000);
   });
  
  return (
    <div className="Loading">
     {isRedirect ? (<Redirect to="/login" />) : (
      <div className="Loading-Content">
        <img src={logo} width='200' height='200' alt='logo'  />
        <img src={loading} alt="Loading...."  />
      </div>
     )}

    </div>
  );
}

export default Loading;
