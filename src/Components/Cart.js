import {   useCart } from "react-use-cart";
import React from 'react'





const Cart =()=>{
    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        totalItems,
        emptyCart,
    } = useCart();

   
    if (isEmpty) return <p className="cartempty">Your cart is empty!<div className="emptydivi">Explore our wide selection and find something you like</div></p>;
 
    return (

        <div className="cartf">
            <h1 className="carthead">Unique items:- {totalUniqueItems}  & Total Items:- {totalItems}</h1>

            <table className="table table-light table-hover m-0">
                <tbody>
                    {items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{ height: '11rem' }} alt="*" />
                                </td>
                                <td className="carttd">{item.name}</td>
                                <td className="carttd">₹{item.price} </td>
                                <td >
                                    <button className="btn btn-info ms-2 cartbtn2"
                                    onClick={()=>updateItemQuantity(item.id,item.quantity -1)}>-</button>
                                      <span className="carttd cartbtn2"> {item.quantity}</span>
                                    <button  className="btn btn-info ms-2 cartbtn2"
                                    onClick={()=>updateItemQuantity(item.id,item.quantity +1)}>+</button>
                                    <span className="cartbtn4"></span>
                                    <button className="btn btn-danger ms-2  cartbtn3" 
                                    onClick={()=>removeItem(item.id)}>Remove Item</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="cartbtn5">
                <h2>Total Amount:{cartTotal}</h2>
                
                    <button className="btn btn-danger btnspan"
                    onClick={()=>emptyCart()}>Clear Cart</button>
               <span>
                <button className="btn btn-primary bt">Buy Now</button> </span>
                </div>
        </div>

        
           
        

    )
                }
    export default Cart;