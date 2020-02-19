import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = props => {
  return (
    <div className="CheckoutSummary">
      <h1>Disfruta tu anvorguesa!</h1>
      <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
        <Button btnType="Danger" clicked={props.checkoutCancelled}>
          CANCELAR
        </Button>
        <Button btnType="Danger" clicked={props.checkoutContinued}>
          CONTINUAR
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
