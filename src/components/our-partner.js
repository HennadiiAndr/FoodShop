import { React, Component } from 'react'
import Logo from '../logopartner.png'

import '../styles.scss'

class OurPartner extends Component{
   render(){
      return(
         <div className='our-partner-wrapper'>
            <div className='our-partner-content'>
               <div className='our-partner-title'>Our Charity Partner, City Bakery</div>
               <div className='our-partner-logo'>
                  <img src={Logo} alt='img'></img>
               </div>
               <button className='our-partner-button'>Learn more about City Bakery</button>
            </div>
         </div>
      )
   }
}

export default OurPartner