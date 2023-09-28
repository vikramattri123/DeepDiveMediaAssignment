import React from 'react'
import classes from './PetList.module.css';
import { useDispatch } from 'react-redux';
import { DataReducerAction } from '../Store/reducers';

interface PetListProps {
    id:number;
    pet:string;
    customerName:string;
    customerEmail:string;
}

const PetList = ({customerEmail,customerName,pet,id}:PetListProps) => {

    const dispatch = useDispatch();
  return (
     <div className={classes.cardContent}>
        <div className={classes.Cell}> 
         <p className={classes.Label}>{customerEmail}</p>
        </div>

        <div className={classes.Cell}>
         <p className={classes.Label}>{customerName}</p>
        </div>

        <div className={classes.Cell}>
         <p className={classes.Label}>{pet}</p>
    
        </div>
        <div style={{minWidth:'100px'}}>

        <button className={classes.buttonStyle} title="remove" onClick={() => dispatch(DataReducerAction.DeletePet({id}))}>X</button>
        </div>
     </div>
  )
}

export default PetList