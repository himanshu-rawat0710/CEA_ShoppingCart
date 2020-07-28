import React, { Component } from 'react'

export default class cart extends Component {
    render() {
        // console.log(this.props);
        const {id, img, name, desc, price, quantity} = this.props.cart;
        const { removeCart, addItem , buttonHandler, clearItems } = this.props;
        const dataBuy = `buy ${id}`;
        const dataSell = `sell ${id}`;
        console.log(`id: ${id}, quantity: ${quantity}`);
        const bgColor = quantity === 0 ? '#fcfa85' : '#a1dbfc';
        const rowStyle = {
          background: bgColor
        }
        return (
            <>
            
            
              <tr style={rowStyle}>
                <th scope="row" className="border-0">
                  <div className="p-2">
                    <img src={img} alt="" width="70" className="img-fluid rounded shadow-sm" />
                    <div className="ml-3 d-inline-block align-middle">
                        <h5 className="mb-0"> <a href="/#" className="text-dark d-inline-block align-middle">{name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: {desc}</span>
                    </div>
                  </div>
                </th>
                    <td className="border-0 align-middle text-center"><strong>${price}</strong></td>
                <td className="col-1 border-0 align-middle text-right"><button className='btn btn-danger' data={dataSell} onClick={buttonHandler}><i className="fas fa-minus" data={dataSell}></i></button></td>
                <td className="col-2 border-0 align-middle text-center"><strong>{quantity}</strong></td>
                  <td className="col-1 border-0 align-middle text-left"><button className='btn btn-outline-success' data={dataBuy} onClick={buttonHandler}><i className="fas fa-plus fa" data={dataBuy}></i></button></td>
                <td className="border-0 align-middle text-center"><a href="/#" className="text-dark" data={id} onClick={clearItems}><i className="fa fa-trash" data={id}></i></a></td>
              </tr>
              
            
          
                
            </>
        )
    }
}
