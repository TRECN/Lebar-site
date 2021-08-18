import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'
import svg from '../assets/svg-1.png'
import svg1 from '../assets/svg-8.png'
import svg2 from '../assets/svg-5.png'
import svg3 from '../assets/svg-7.png'

import './HeroSection.css'
function HeroSection({
    lightBg, topLine,lightText, lightTextDesc, headline, description,
    buttonLable, img, alt,imgStart
}) {
    const setImg=()=>{
        if(img==='1')
            return svg
        else
            if(img==='2')
                return svg1
        else
        if(img==='3')
            return svg2
        else
        if(img==='4')
            return svg3
    }


    
    return (
        <>
           <div className={lightBg ? 'home__hero-section':'home__hero-section darkBg'}>
               <div className="container">
                   <div className="row home__hero-row" 
                   style={{display:'flex', flexDirection:imgStart==='start'?'row-reverse':'row'}}>
                       <div className="col">
                           <div className="home__hero-text-wrapper">
                               <div className="top-line">{topLine}</div>
                               <h1 className={lightText?'heading':'heading dark'}>{headline}</h1>
                               <p className={lightTextDesc?'home__hero-subtitle':'home__hero-subtitle dark'}>{description}</p>
                               <Link to="/sign-up">
                                   <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLable}</Button>
                                   
                               </Link>
                           </div>
                           
                       </div>
                       <div className="col">
                       <div className="home__hero-img-wrapper">
                           <img src={setImg()} alt={alt} className="home__hero-img" />
                       </div>
                       </div>
                       
                   </div>
               </div>
           </div>
        </>
    )
}

export default HeroSection
