import React from 'react';


const Footer = () => {

    return (
    <footer className="bg-dark text-white mt-3 p-3 fixed-bottom">
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="lead text-center">
            Copyright &copy;
            <span id="year"></span>
            Anandkar - Test
          </p>
        </div>
      </div>
    </div>
  </footer>)
}


export default Footer;