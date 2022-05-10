import React from 'react'

const MenuCard = ({itemsData}) => {
    
  return (
    <>
    <div className='card-container'>
       {
           itemsData.map((curElem)=>{

            const {id, name, category, image, description} = curElem;

            return (
               <>
            <div className='cards' key={id}>
            <span className='num'>{id}</span>
            <p className='time'>{category}</p>
            <h2 className='heading'>{name}</h2>
            <span className='info'>{description}</span>
            <hr></hr>
            <img src={image} className='image' alt="thie is the image of maggi"></img>
            <button className='btn'>Order Now</button>
            </div>     
        </>
            )
        })
       }
    </div>
</>
  )
}

export default MenuCard