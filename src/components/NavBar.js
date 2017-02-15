import React from 'react'


export default function NavBar()  {

  return(
    <nav>
    <div className="nav-wrapper padding red lighten-1">
      <a href="#" className="brand-logo">SpoonFed</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/signup">Signup</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="collapsible.html">Profile</a></li>
      </ul>
    </div>
  </nav>
  )

}
