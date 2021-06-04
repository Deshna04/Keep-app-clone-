import React from 'react';
import logo from './images/keep.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const  Header = () => {
  return (
<>
<div className = "header shadow-sm p-3 mb-5 rounded" >
<h1 >  <img src = {logo} alt = "logo" height = "40px" weight = "40px"/>Keep</h1>
    
</div>
</>
  );
}

export default Header;