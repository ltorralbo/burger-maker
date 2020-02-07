import React from 'react';
import classes from './Button.css';

const Button = props => (
  <button onClick={props.clicked} className="Button Danger">
    {props.children}
  </button>
);

export default Button;
