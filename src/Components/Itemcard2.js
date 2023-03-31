import React from 'react'
// import { Link} from 'react-router-dom';
// import Dealpage from './Dealpage';
import { useCart } from 'react-use-cart';


const Itemcard2 = (props) => {
    const { addItem } = useCart();
    return (

        <div className=' deal'>
            <div class="card">
                <img src={props.img} class="card-img-top item2img" alt="..." />
                <div class="card-body">
                    <h5 class="card-title Cardtext">{props.name}</h5>
                    <h4 className='Cardtext2'>{props.price}<del className='dlt'>16999</del></h4>
                    <p class="card-text">{props.details}</p>
                    <button class="btn btn-primary Cardbutton2" onClick={() => addItem(props.item)}>Add to cart</button>
                </div>
            </div>

        </div >
    )
}

export default Itemcard2;
