import React from 'react'


export default function NavBar()  {

  return(
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Spoonfed</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/signup">Signup</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  )

}
