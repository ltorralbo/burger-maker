import React from 'react';
import classes from './Button';

const Button = props => (
  <button onClick={props.clicked} className="Button">
    {props.children}
  </button>
);

export default Button;
