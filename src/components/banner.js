import { React, Component } from 'react'


import '../styles.scss'

class Banner extends Component{
   render(){
      return(
         <div className='banner-wrapper'>
            <div className='banner-text-wrapper'>
               <div className='support'>Support Your Local Artisans</div>
               <div className='discover'>Discover brands and theit stories</div>
               <button className='browse'>Browse bands</button>
            </div>
         </div>
      )
   }
}
export default Banner