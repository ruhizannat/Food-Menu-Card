
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='btn-container'>
          <h2>our menu</h2>
      <div class="underline"></div>
         <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand nav-item" href="#">
           All
          </a>
         
          <div className="collapse navbar-collapse list-item">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Breakfast</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Lunch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shakes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Dinner</a>
              </li>
             
          
             
            </ul>
           
          </div>
        </div>
      </nav>

      
      </div>
    )
  }
}
