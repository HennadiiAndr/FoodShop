import { React, Component } from 'react'
import Facebook from '../facebook.png'
import Insta from '../insta.png'
import Twitter from '../twitter.png'
import Viber from '../viber.png'
import Messenger from '../messenger.png'
import Telegram from '../telegram.png'

import '../styles.scss'

class TellAFriend extends Component{
   render(){
      return(
         <div className='tell-block-wrapper'>
            <div className='tell-text-block'>
               <div className='tell-title'>Tell a Friend</div>
               <div className='social-block'>
                  <img src={Facebook} alt='img'></img>
                  <img src={Insta} alt='img'></img>
                  <img src={Twitter} alt='img'></img>
                  <img src={Viber} alt='img'></img>
                  <img src={Messenger} alt='img'></img>
                  <img src={Telegram} alt='img'></img>
               </div>
            </div>
         </div>
      )
   }
}

export default TellAFriend