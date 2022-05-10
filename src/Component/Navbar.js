import React from 'react'

const Navbar = ({filterItem,menuList}) => {
  return (
    <div className='nav'>
   {
   menuList.map((curElem)=>{
    return <button className='nav-btn' 
    onClick={()=>filterItem(curElem)}>{curElem}</button>
   })
   }
    </div>
  )
}

export default Navbar