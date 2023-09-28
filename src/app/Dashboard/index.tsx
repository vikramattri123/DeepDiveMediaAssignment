import React from 'react'
import Button from '../../components/Button/Button';
import { useDispatch,useSelector } from 'react-redux';
import { AppsState } from '../Store/reducers';
import classes from './Dashboard.module.css';
import PetList from '../PetList';
import { AddPet } from './AddPet';


const Dashboard = () => {

    const petData = useSelector((data:AppsState) => data.APPS.Pet);

  return (
    <div>
        <div style={{display:'flex',flexDirection:'row',marginTop:'3em',alignItems:'center',justifyContent:'space-evenly'}}>
        <div style={{display:'flex',color:'#A75E31',justifyContent:'center',alignItems:'center'}}>
        <p style={{display:'flex',fontSize:'2em',textAlign:'center'}}>Dashboard</p>
    </div>
    <AddPet />
        </div>
        {
          petData.length === 0 && <div style={{textAlign:'center',marginTop:'9em'}}><p>No Data Available..</p></div>
        }
        {
 petData.length > 0 && 
        <div className={classes.cardContent}>
        <div className={classes.Cell}> 
         <p className={classes.Label}>Customer Email</p>
        </div>

        <div className={classes.Cell}>
         <p className={classes.Label}>Customer Name</p>
        </div>

        <div className={classes.Cell}>
         <p className={classes.Label}>Pet</p>
  
        </div>
     </div>
}
     {
               petData && petData.map((info) => <PetList id={info.id} customerEmail={info.customerEmail}  customerName={info.customerName} pet={info.pet} />)
               }
    </div>
  )
}

export default Dashboard