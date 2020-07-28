import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CartList from './Component/cartList/cartList';
import Navbar from './Component/navbar/Navbar';
import { cartData } from './cartData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carts: cartData,
    }
    this.handleButtons = this.handleButtons.bind(this); 
    this.clearItems = this.clearItems.bind(this);
  }

  handleButtons(ev) {
    ev.preventDefault();
    console.log(ev.target);
    let data = ev.target.getAttribute("data");
    data = data.split(" ");
    const button = data[0] === "buy" ? 1 : -1;
    const itemIndex = parseInt(data[1]);
    const item = this.state.carts.filter((el) => el.id === itemIndex);
    const updatedQuantity = item[0].quantity + button;
    const col = updatedQuantity <= 0 ? "bg-warning" : "bg-primary";
    this.setState({
      carts: [
        ...this.state.carts.filter((el) => el.id !== item[0].id),
        {
          ...item[0],
          quantity: updatedQuantity < 0 ? 0 : updatedQuantity,
        },
      ]
    });
  }

  clearItems(ev) {
    ev.preventDefault();
    let index = parseInt(ev.target.getAttribute("data"));
    const item = this.state.carts.filter((el) => el.id === index)[0];
    this.setState({
      carts: [
        ...this.state.carts.filter((el) => el.id !== item.id),
      ]
    })
  }

  render() {
    return (
      <div className='container-fluid'>
  
  
  
          {/* navbar */}
          <Navbar items={this.state.carts}/>
          
  
  
          
          
          {/* cartlist items  */}
          <CartList items={this.state} buttonHandler={this.handleButtons} clearItems={this.clearItems} />
  
      </div>
    );
  }

}

export default App;
