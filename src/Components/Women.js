import React from 'react'
import Itemcard from './Itemcard'
import data from './Products';

const Women = () => {
  return (
    <div className='cardview'>
      {data.Womenproductdata.map((item, index)=>{
        return(
         <Itemcard img={item.img} name={item.name} price={item.price} details={item.details } item={item}key={index}/>
         )
      })}


    </div>
  )
}

export default Women;
