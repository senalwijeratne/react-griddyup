import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

import Top from "./components/Top"
import Menu from "./components/Menu"
import Features from "./components/Features"
import About from "./components/About"
import Gallery from "./components/Gallery"

function App() {
  return (
    <div className="wrapper">
      <Top />
      <Menu />
      <Features />
      <About />
      <Gallery />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
