import React, { Component } from 'react';
import Cart from '../cart/cart';
import {cartData} from '../../cartData';


export default class cartList extends Component {
  state = {
    carts: cartData
  }

  // componentDidUpdate(prevProps) {
  //   if (JSON.stringify(prevProps.items) !== JSON.stringify(this.props.items)) {
  //     this.setState({
  //       carts: cartData,
  //     });
  //   }
  // }

    removeCart = (id) => {
        // console.log(id);
        const {carts} = this.state;
        const sortedCarts = carts.filter(cart => cart.id !== id);
        this.setState({
            carts:sortedCarts

        }
            
        )

    }

    addItem = (id,quantity) => {
      console.log(id, quantity)
      // if 
      
    }
    render() {
        let { carts } = this.props.items;
        let sortedCart = [];
        carts.forEach((el) => {
          sortedCart[el.id - 1] = el;
        });
        console.log(sortedCart);
        // console.log(this.props)
        const { buttonHandler, clearItems } = this.props
        return (
            <>

<div className="pb-5 my-5">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 p-xs-5 bg-white rounded shadow-sm mb-5">


      <div className="table-responsive">
            <table className="table">
            <thead>
              <tr>
                <th scope="col-4" className="border-0 bg-light ">
                  <div className="p-2 px-3 text-uppercase">Product</div>
                </th>
                <th scope="col-2" className="border-0 bg-light text-center">
                  <div className="py-2 text-uppercase">Price</div>
                </th>
                <th scope="col-4" className="border-0 bg-light text-center">
                  <div className="py-2 text-uppercase"></div>
                </th>
                <th scope="col-1" className="border-0 bg-light text-center">
                  <div className="py-2 text-uppercase">Q</div>
                </th>
                <th scope="col-2" className="border-0 bg-light text-center">
                  <div className="py-2 text-uppercase"></div>
                </th>
                <th scope="col-1" className="border-0 bg-light text-center">
                  <div className="py-2 text-uppercase">Remove</div>
                </th>
              </tr>
            </thead>
            <tbody>
            {
                sortedCart.map(cart => (<Cart key={cart.id} cart={cart} removeCart={this.removeCart} addItem={this.addItem} buttonHandler={buttonHandler} clearItems={this.props.clearItems}/>))
            }


            </tbody>
            </table>
            </div>
        
        </div>
        </div>
        </div>
        </div>
            
            
            </>
        )
    }
}
