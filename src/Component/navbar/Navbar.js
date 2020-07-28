import React, { Component } from 'react'

export default class Navbar extends Component {

    render() {
        const { items } = this.props;
        let quantity = 0;
        items.forEach((el) => {
            quantity += el.quantity;
        });

        console.log(quantity);
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/#"  >
              CEA CART
        </a>


        <div>
        <i className="d-inline fas fa-shopping-cart fa-3x"></i>
        <span className="fa fa-stack-1x" style={{color:'white'}}>
          <span className='float-right' style={{fontSize:'25px', marginTop:'-2px', marginRight:'23px', display:'block'}}>
              {quantity }
          </span>
        </span>

        </div>
        
        </nav>
            </div>
        )
    }
}
