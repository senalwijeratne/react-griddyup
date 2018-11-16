import React from "react"

function Menu() {
  return (
    <nav class="menu">
      <button aria-expanded="false" aria-controls="menu-list">
        <span class="open">☰</span>
        <span class="close">×</span>
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
