import { React, Component } from 'react'
import Navbar from './components/navbar'
import Warning from './components/warning'
import Banner from './components/banner'
import CentralBlock from './components/central-block'
import OurPartner from './components/our-partner'
import DownBlock from './components/down-block'
import TellAFriend from './components/tell-a-friend'
import Footer from './components/footer'

import './styles.scss'

class App extends Component {
   render(){
      return (
         <div className='main'>
            <div className='mainflow'>
               <Warning/>
               <Navbar/>
               <Banner/>
               <CentralBlock/>
               <OurPartner/>
               <DownBlock/>
               <TellAFriend/>
               <Footer/>
            </div>
         </div> 
      )
   }
}

export default App