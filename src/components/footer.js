import { React, Component } from 'react'
import Logo from '../Logo.png'

import '../styles.scss'

class Footer extends Component{
   render(){
      return(
         <div className='footer-wrapper'>
            <div className='footer'>
               <img src={Logo} alt='img'></img>
               <div className='links-block'>
                  <div className='titles-block'>
                     <div className='title-footer'>Occasions</div>
                     <div className='footer-links'>
                        <div className='footer-link'>
                           <div className='footer-item'>Occasions</div>
                           <div className='footer-item'>Working From Home</div>
                           <div className='footer-item'>Snack Time</div>
                           <div className='footer-item'>Breakfast</div>
                           <div className='footer-item'>Vegan Life</div>
                           <div className='footer-item'>Baking</div>
                           <div className='footer-item'>Gifts & Bundles</div>
                           <div className='footer-item'>Easy Cooking</div>
                           <div className='footer-item'>All Products</div>
                        </div>
                     </div>
                  </div>
                  <div className='titles-block'>
                     <div className='title-footer'>All Categories</div>
                     <div className='footer-links'>
                        <div className='footer-link'>
                           <div className='footer-item'>Baking</div>
                           <div className='footer-item'>Breakfast</div>
                           <div className='footer-item'>Condiments</div>
                           <div className='footer-item'>Drinks</div>
                           <div className='footer-item'>Heat Things Up</div>
                           <div className='footer-item'>Meal Solutions</div>
                           <div className='footer-item'>Pantry Staples</div>
                           <div className='footer-item'>Simmer Sauces</div>
                           <div className='footer-item'>Snacks & Treats</div>
                           <div className='footer-item'>Spice Up Your Cooking</div>
                           <div className='footer-item'>Sweet Tooth</div>
                           <div className='footer-item'>Wine & Cheese</div>
                           <div className='footer-item'>All Products</div>
                        </div>
                     </div>
                  </div>
                  <div className='titles-block'>
                     <div className='title-footer'>Gifts & Bundles</div>
                     <div className='footer-links'>
                        <div className='footer-link'>
                           <div className='footer-item'>Sweet Tooth Special</div>
                           <div className='footer-item'>Discover Local</div>
                           <div className='footer-item'>Baking Box</div>
                           <div className='footer-item'>Spicy Heat Lover's Box</div>
                           <div className='footer-item'>Snacking Sensations</div>
                        </div>
                     </div>
                  </div>
                  <div className='titles-block'>
                     <div className='title-footer'>Our Brands</div>
                     <div className='footer-links'>
                        <div className='footer-link'></div>
                     </div>
                  </div>
                  <div className='titles-block'>
                     <div className='title-footer'>About Us</div>
                     <div className='footer-links'>
                        <div className='footer-link'></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Footer