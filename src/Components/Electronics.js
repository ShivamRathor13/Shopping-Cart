import React from 'react'
import Itemcard from './Itemcard'
import data from './Products';

const Electronics = () => {
  return (
    <div className='cardview'>
    {data.Electronicsdata.map((item, index)=>{
      return(
       <Itemcard img={item.img} name={item.name} price={item.price} details={item.details } item={item}key={index}/>
       )
    })}


  </div>
  )
}

export default Electronics
