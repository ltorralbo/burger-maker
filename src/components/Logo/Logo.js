import React from 'react';
import brandLogo from '../../assets/image/logo.png';
import classes from './Logo.css';

const Logo = props => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={brandLogo} alt="Logo's brand" />
  </div>
);

export default Logo;
