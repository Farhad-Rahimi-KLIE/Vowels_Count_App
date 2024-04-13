import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a className="navbar-brand" href="/">{props.title}</a>
  
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="/">{props.home}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">{props.about}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">{props.Contact}</a>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Navbar
