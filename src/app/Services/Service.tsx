import Button from "../../components/Button/Button";
import classes from './Service.module.css';
interface ServiceProps {
    imageUrl:string;
    serviceName:string;
    price:number;
    duration:number;
}


const Service = ({imageUrl,duration,price,serviceName}:ServiceProps) => {
   return (
  <div className={classes.service}>

    <div className={classes.serviceImage}>
    <img  src ={imageUrl} alt="images" className={classes.serviceImage}/>
    </div>

    <div className={classes.serviceDescription}>
         <span >{serviceName}</span>
          <p>{duration} min</p>
          <p>$ {price}</p>
          <Button butttonText="Book Now"  />
    </div>
  </div>
   )

}

export default Service