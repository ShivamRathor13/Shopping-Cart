import React from 'react'
import { useCart } from 'react-use-cart';


const Itemcard = (props) => {
    const {addItem} =useCart();
  return (
    
      <div className='cardview'>
        <div class="card">
          <img src={props.img} class="card-img-top cardimg" alt="..." />
          
          <div class="card-body">
            <h5 class="card-title Cardtext">{props.name}</h5>
            <h4 className='Cardtext'>{props.price}<del className='dlt'>699</del></h4>
            <p class="card-text">{props.details}</p>
            <button class="btn btn-primary Cardbutton" onClick={()=>addItem(props.item)}>Add to cart</button>
          </div>
        </div>
      </div>
      )
}

      export default Itemcard
