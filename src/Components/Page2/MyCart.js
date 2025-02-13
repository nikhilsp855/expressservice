import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useCart } from "react-use-cart"
import {Link, withRouter} from "react-router-dom"
const MyCart = (props) => {
   console.log(props.providers)
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart

    } = useCart();
 

    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
    return (
        <section className="py-4 container">

            <div className="row justify-content-center ">

                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {
                                items.map((item, index) => {
                                    return(
                                    <tr key={index}>
                                        <td>
                                            <img src="images/cart1.jpg" style={{ height: '6rem' }} />

                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>Quantity ({item.quantity})</td>
                                        <td>
                                            <button 
                                                className="btn btn-info ms-2"
                                                onClick={()=> updateItemQuantity(item.id,item.quantity -1)}
                                            >-</button>
                                            <button 
                                                className="btn btn-info ms-2"
                                                onClick={()=> updateItemQuantity(item.id,item.quantity + 1)}
                                            >+</button>
                                            <button
                                                className="btn btn-danger ms-2"
                                                onClick={()=> removeItem(item.id)}
                                            >Remove Item</button>
                                        </td>

                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto my-2">
                    <h2>Total Price: {cartTotal}INR</h2>
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-danger m-2"
                        onClick={()=>emptyCart()}
                    >Clear Cart</button>

                    <Link to={{pathname:"/confirmbooking", state:{providers:props.providers, price:cartTotal, item:items}
                    }}>
      <button className="btn btn-primary m-2" >Book Now</button></Link>
                </div>
            </div>
        </section>



    )
}

export default MyCart;
