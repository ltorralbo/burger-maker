import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Luis Fernando',
        address: {
          street: 'Freedom',
          zipCode: '24653',
          country: 'Chile'
        },
        email: 'test@mail.com'
      },
      deliveryMethod: 'fastest'
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Tu nombre"
        />
        <input
          className="Input"
          type="email"
          name="email"
          placeholder="Tu correo"
        />
        <input
          className="Input"
          type="text"
          name="street"
          placeholder="Calle"
        />
        <input
          className="Input"
          type="text"
          name="postal"
          placeholder="Código poostal"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          CONFIRMAR
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Ingresa tus datos de contactos</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
