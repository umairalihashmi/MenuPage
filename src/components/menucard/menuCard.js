import React from 'react'

const MenuCard = ({item}) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
}

export default MenuCard