import React from 'react'
import Logo from '../Logo.png'
import Search from '../search.png'
import Profile from '../profile.png'
import Cart from '../cart.png'

import '../styles.scss'

class Navbar extends React.Component{
   render(){
      return(
         <div className='navbar'>
            <div className='navbar-content'>
               <div className='logo'>
                  <img src={Logo} alt='Logo'/>
               </div>
               <div className='menu-wrapper'>
                  <div className='menu'>
                     <select>
                        <option>Occasions</option>
                     </select>
                     <select>
                        <option>All Categories</option>
                     </select>
                     <select>
                        <option>Gifts & Bundles</option>
                     </select>
                     <div className='our-brands'>Our Brands</div>
                     <div className='about-us'>About Us</div>
                  </div>
               </div>
               <div className='icons-bar-menu'>
                  <div className='search'>
                     <img src={Search} alt='Search'></img>
                  </div>
                  <div className='profile'>
                     <img src={Profile} alt='Profile'></img>
                  </div>
                  <div className='cart'>
                     <img src={Cart} alt='Cart'></img>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
export default Navbar