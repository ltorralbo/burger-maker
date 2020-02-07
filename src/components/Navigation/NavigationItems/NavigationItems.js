import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/" active>
      Hamburguesa
    </NavigationItem>
    <NavigationItem link="/">Pagar</NavigationItem>
  </ul>
);

export default NavigationItems;
