import React from 'react'
import classes from '../Home/Home.module.css';
import Button from '../../components/Button/Button';
import pet from '../../images/pet.webp';
import Fade from 'react-reveal'


const Home = () => {
  return (
    <div className={classes.Banner}>

        <div className={classes.bannerContent}>
          <Fade left>

             <span style={{fontSize:'8em',justifySelf:'flex-end',fontWeight:'bold'}}>
                Pet care
             </span>
             <p style={{fontSize:'2rem',textTransform:'uppercase',justifyContent:'flex-end'}}>
                house call veterinarian
             </p>
             <Button  butttonText='Book a Slot' aslink url="/services"/>
          </Fade>
        </div>

        <div>
          <img src={pet}  alt="pet" className={classes.bannerImage}  />
        </div>

        
    </div>
  )
}

export default Home