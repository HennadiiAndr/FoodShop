import { React, Component } from "react";
import Cross from '../Cross.png'

import '../styles.scss'

class Warning extends Component {
   state = {
      crossClass: 'warning-container'
   }
   onCrossClick = () => {
      this.setState({
         crossClass: 'cross-clicked'
      })
   }
   render(){
      return(
         <div className={this.state.crossClass}>
            <div className='warning'>
               <div className='warning-wrapper'>
                  <div className='warning-text'>Free Delivery over $100. Gift with Purchase over $150</div>
                  <div className='cross'>
                     <img src={Cross} alt='Cross' className='cross' onClick={this.onCrossClick}></img>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Warning