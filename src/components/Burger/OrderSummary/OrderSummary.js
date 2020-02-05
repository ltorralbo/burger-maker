import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Tu orden</h3>
      <p>Tu anvorguesa contiene los siguientes ingredientes</p>
      <ul>{ingredientSummary}</ul>
      <p>
        {' '}
        <strong>Precio: </strong> {props.precio}
      </p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Canelar
      </Button>
      <Button btnType="Succes" clicked={props.purchaseContinued}>
        Continuar
      </Button>
    </Aux>
  );
};

export default OrderSummary;
