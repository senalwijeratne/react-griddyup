import React from "react"

function Menu() {
  return (
    <nav className="menu">
      <button aria-expanded="false" aria-controls="menu-list">
        <span className="open">☰</span>
        <span className="close">×</span>
        Menu
      </button>
      <ul id="menu-list">
        <li>
          <a href="">Tacos</a>
        </li>
        <li>
          <a href="">Beers</a>
        </li>
        <li>
          <a href="">Wines</a>
        </li>
        <li>
          <a href="">Desserts</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
