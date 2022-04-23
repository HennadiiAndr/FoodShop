import { React, Component } from 'react'
import OfferCard from './offer-card'
import Avocado from '../avocado.png'
import Pancacke from  '../pancackes.png'
import Pizza from '../pizza.png'
import Oranges from '../oranges.png'
import Telescope from '../telescope.png'
import Wholesale from '../wholesale.png'
import Support from '../support.png'
import Winner from '../winner.png'
import Heart from '../heart.png'
import WhoMakesImage from '../whomakesimage.png'
import InnerPoint from '../innerpoint.png'

import '../styles.scss'

class CentralBlock extends Component{
   render(){
      return(
         <div className='centralBlock'>
            <div className='latest-offers'>
               <div className='latest-offers-text'>
                  <div className='latest'>Latest</div>
                  <div className='offers'>Offers</div>
               </div>
               <div className='offers-menu-wrapper'>
                  <OfferCard image = {Pizza} title = {'Peperoni Pizza'} actualPrice = {'$19.99'} previousPrice = {'$24.99'}/>
                  <OfferCard image = {Pancacke} title = {'Baked Pancackes'} actualPrice = {'$35.99'} previousPrice = {'$44.99'}/>
                  <OfferCard image = {Avocado} title = {'Avocado'} actualPrice = {'$17.99'} previousPrice = {'$20.99'}/>
                  <OfferCard image = {Oranges} title = {'Bunch of Orange'} actualPrice = {'$24.99'} previousPrice = {'$29.99'}/>
               </div>
               <div className='why-choose-wrapper'>
                  <div className='why-choose-title'>
                     <div className='why-choose'>Why Choose</div>
                     <div className='premium-bakery'>the Premium Bakery Quality</div>
                  </div>
                  <div className='opportunities'>
                     <div className='opportunity'>
                        <div className='opportunity-logo'>
                           <img src={Telescope} alt='logo'></img>
                        </div>
                        <div className='opportunity-title'>Discover new<br/> flavours & people</div>
                        <div className='opportunity-text'>Discover new tastes,<br/> flavours, snacks and<br/> recipes to make<br/> wonderful meals. Also find<br/> out where your food<br/> comes from and who<br/> makes it.</div>
                     </div>
                     <div className='opportunity'>
                        <div className='opportunity-logo'>
                           <img src={Wholesale} alt='logo'></img>
                        </div>
                        <div className='opportunity-title'>Buy<br/> wholesale</div>
                        <div className='opportunity-text'>We offer bulk formats,<br/> variety cases, and<br/> discovery boxes so you<br/> can save money on<br/> delicious foods by buying<br/> at wholesale prices. </div>
                     </div>
                     <div className='opportunity'>
                        <div className='opportunity-logo'>
                           <img src={Support} alt='logo'></img>
                        </div>
                        <div className='opportunity-title'>Support your<br/> community </div>
                        <div className='opportunity-text'>By buying in bulk from<br/> local and Canadian<br/> producers you are helping<br/> grow our local food<br/> ecosystem, creating jobs,<br/> and supporting families<br/> and entrepreneurs in your<br/> community. </div>
                     </div>
                     <div className='opportunity'>
                        <div className='opportunity-logo'>
                           <img src={Winner} alt='logo'></img>
                        </div>
                        <div className='opportunity-title'>Enjoy the best<br/> quality </div>
                        <div className='opportunity-text'>We only offer great<br/> tasting, all natural foods<br/> that are better for you,<br/> and organic if possible.</div>
                     </div>
                     <div className='opportunity'>
                        <div className='opportunity-logo'>
                           <img src={Heart} alt='logo'></img>
                        </div>
                        <div className='opportunity-title'>Enjoy Club Level<br/> Service </div>
                        <div className='opportunity-text'>As a member of our club,<br/> we will make sure you are<br/> delighted with our service<br/> or we will make it right!</div>
                     </div>
                  </div>
               </div>
               <div className='who-makes-wrapper'>
                  <div className='who-makes-block'>
                     <div className='who-makes-title'>
                        <div className='who-makes'>Who Makes</div>
                        <div className='your-food'>Your Food?</div>
                     </div>
                     <div className='who-makes-text'>Our mission is to help grow the local food ecosystem in BC and across<br/> Canada.  Why? </div>
                     <div className='text-block'>
                        <div className='text-container'>
                           <div className='ellipse'>
                              <img src={InnerPoint} alt='img'></img>
                           </div>
                           <div className='text-who-makes'>Because it connects us to the land we live on, and to the people<br/> who live here.</div>
                        </div>
                        <div className='text-container'>
                           <div className='ellipse'>
                              <img src={InnerPoint} alt='img'></img>
                           </div>
                           <div className='text-who-makes'>Because it’s more meaningful to cook and eat something made<br/> by a person nearby than by some distant corporation</div>
                        </div>
                        <div className='text-container'>
                           <div className='ellipse'>
                              <img src={InnerPoint} alt='img'></img>
                           </div>
                           <div className='text-who-makes'>Because good local food makes our corner of the world a better<br/> place to live</div>
                        </div>
                        <div className='text-container'>
                           <div className='ellipse'>
                              <img src={InnerPoint} alt='img'></img>
                           </div>
                           <div className='text-who-makes'>Because it supports local jobs</div>
                        </div>
                        <div className='text-container'>
                           <div className='ellipse'>
                              <img src={InnerPoint} alt='img'></img>
                           </div>
                           <div className='text-who-makes'>Because it makes more sense for the environment</div>
                        </div>
                        <button className='discover'>Discover our Producers</button>
                     </div>
                  </div>
                  <div className='who-makes-image'>
                     <img src={WhoMakesImage} alt='img'></img>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default CentralBlock