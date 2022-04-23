import { React,Component } from 'react'
import SurpriseImage from '../surprise.png'
import RightArrow from '../arrowright.png'
import LeftArrow from '../arrowleft.png'
import InstaPic1 from '../instapic1.png'
import InstaPic2 from '../instapic2.png'
import InstaPic3 from '../instapic3.png'
import InstaPic4 from '../instapic4.png'
import InstaPic5 from '../instapic5.png'

import '../styles.scss'

class DownBlock extends Component{
   render(){
      return(
         <div className='bottom-block'>
            <div className='surprise-container'>
               <img src={SurpriseImage} alt='img' className='surpriseImage'></img>
               <div className='surprise-text-block'>
                  <div className='surprise-title'>
                     <div className='suprise-someone'>Surprise Someone</div>
                     <div className='working'>Working from Home</div>
                  </div>
                  <div className='surprise-text'>Do you have a colleague or family member working hard at home?<br/> Our Working From Home box of snacks and drinks is the perfect way to<br/> put a smile on their face, delivered direct to their door.<br/><br/>
                     To buy for a large group of people, get in touch and we can discuss<br/> bespoke bundles and personalised messaging.
                  </div>
                  <button className='buy-now'>Buy Now</button>
               </div>
            </div>
            <div className='insta-carousel-wrapper'>
               <div className='carousel-title'>
                  <div className='premium-bakery'>@PremiumBakeryQuality </div>
                  <div className='insta'> on Instagram</div>
               </div>
               <div className='pics-block-wrapper'>
                  <div className='left-arrow'>
                     <img src={LeftArrow} alt='img'></img>
                  </div>
                  <div className='pics-container'>
                     <div className='insta-pic-wrapper'>
                        <img src={InstaPic1} alt='img' className='insta-pic'></img>
                     </div>
                     <div className='insta-pic-wrapper'>
                        <img src={InstaPic2} alt='img' className='insta-pic'></img>
                     </div>
                     <div className='insta-pic-wrapper'>
                        <img src={InstaPic3} alt='img' className='insta-pic'></img>
                     </div>
                     <div className='insta-pic-wrapper'>
                        <img src={InstaPic4} alt='img' className='insta-pic'></img>
                     </div>
                     <div className='insta-pic-wrapper'>
                        <img src={InstaPic5} alt='img' className='insta-pic'></img>
                     </div>
                  </div>
                  <div className='right-arrow'>
                     <img src={RightArrow} alt='img'></img>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default DownBlock