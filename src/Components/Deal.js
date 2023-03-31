import React from 'react'
import Itemcard from './Itemcard2'
import data from './Products';

const Deal = () => {
  return (
    <div className='boxcontainer2'>
      <h1>Deal of the Day</h1>

      <div className='boxcontainer'>

        <div className='deal'>
          {data.Dealdata.map((item, index) => {
            return (
              <Itemcard img={item.img} price={item.price} details={item.details} item={item} key={index} />
            )
          })}


        </div>
      </div>
      </div>
      )
}

      export default Deal
