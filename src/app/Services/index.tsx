import React from 'react'
import {Data} from '../../Data/fake';
import classes from '../Services/Service.module.css'
import Service from './Service';
import Fade from 'react-reveal';
const Services = () => {
  return (
   <div style={{display:'flex', flexDirection:'column',gap:'25px',marginTop:'20px'}}>
    <div style={{display:'flex',color:'#A75E31',justifyContent:'center',alignItems:'center'}}>
        <p style={{display:'flex',fontSize:'2em',textAlign:'center'}}>Our Services</p>
    </div>
        <div className={classes.servicesBanner}>
            {
            Data.map((data) => <Fade top><Service key={data.serviceID} duration={data.duration} imageUrl={data.image} price={data.price} serviceName={data.service}   /></Fade>)
            }
        </div>
   </div>
  )
}

export default Services