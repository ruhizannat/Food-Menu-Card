import React, { Component } from 'react'
import styles from './Menu.module.css'

export default class MenuCard extends Component {
  render() {
      const {menu: { title, category, price, img, desc}} = this.props
    return (
      <div className={styles.menu} >
          
         <div className="row">
             <div className="col-md-6">
             <div class="card container-fluid d-flex justify-content-center">
                <img src={img} class="card-img-top img-fluid img" alt="image not found" />
                <div class="card-body ">
                    <h5 class="card-title">{title}</h5>
                    {/* <h5 class="card-title">{category}</h5> */}
                    <h5 class="card-title h5">${price}</h5>
                    <p class="card-text text-secondary">{desc}</p>
                   
                </div>
                </div>
             </div>
         </div>
      </div>
    )
  }
}
