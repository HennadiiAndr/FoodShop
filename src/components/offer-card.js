import { React, Component } from 'react'

import '../styles.scss'

class OfferCard extends Component{
   render(){
      return(
         <div className='card'>
            <div className='upper-block'>
               <img src={this.props.image} alt='img'></img>
            </div>
            <div className='down-block'>
               <div className='prices-block'>
                  <div className='prices-block-title'>{this.props.title}</div>
                  <div className='prices-container'>
                     <div className='actual-price'>{this.props.actualPrice}</div>
                     <div className='previous-price'>{this.props.previousPrice}</div>
                  </div>
                  <button className='quick-shop'>Quick Shop</button>
               </div>
            </div>
         </div>
      )
   }
}

export default OfferCard