import React from 'react';
import NavLogo from '../../images/logo_header.png'
import { useDispatch } from 'react-redux'
import userActions from '../../persistence/actions/'




const Nav = (props) => {
    const dispatch = useDispatch();
    return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white p-0">
    <div className="container">
      <img src={NavLogo} alt="RAK Bank" />
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav">
          <li className="nav-item px-2">&nbsp;</li>
          <li className="nav-item px-2">&nbsp;</li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown mr-3">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <i className="fas fa-user"></i> Welcome {props.fullName}
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0)" onClick={() => dispatch(userActions.logOut())} className="nav-link">
              <i className="fas fa-user-times"></i> Logout
            </a>
          </li>
        </ul>
        </div>
      </div>
     </nav>
    );
}

export default Nav;