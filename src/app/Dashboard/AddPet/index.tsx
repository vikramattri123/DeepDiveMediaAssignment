import React, { useState } from 'react';
import Modal from 'react-modal';
import classes from './AddPet.module.css';
import { DataReducerAction } from '../../Store/reducers';
import { useDispatch } from 'react-redux';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function AddPet() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();


  const [email,setEmail] = useState('');
  const [name,setName] = useState('');

  const [pet,setPet] = useState('');


  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  function onSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();

   dispatch(DataReducerAction.AddPet({
    id:Math.floor( Math.random() * 9000),
    customerEmail:email,
    customerName:name,
    pet
   }));

   setEmail('');
   setPet('');
   setName('');
   closeModal();
  }

  return (
    <div>
      <button onClick={openModal} className={classes.buttonStyle}>Add Pet</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{textAlign:'center',color:'#A75E31'}}>Add Pet Information</h2>
   
        <form style={{display:'flex',flexDirection:'column',gap:'20px',width:'500px'}}>
        <div style={{display:'flex',flexDirection:'column',maxWidth:'300px',gap:'5px'}}>
         <label className={classes.label}>Customer Email *</label>
         <input type="text"  name="cemail" className={classes.input} onChange={(e) => setEmail(e.target.value)}/>
         </div>

         <div style={{display:'flex',flexDirection:'column',maxWidth:'300px',gap:'5px'}}>
         <label className={classes.label}>Customer Name *</label>
         <input type="text" name="cname" className={classes.input} onChange={(e) => setName(e.target.value)} />
         </div>
         
         <div style={{display:'flex',flexDirection:'column',maxWidth:'300px',gap:'5px'}}>
         <label className={classes.label}>Pet *</label>
         <input type="text" name="pet" className={classes.input} onChange={(e) => setPet(e.target.value)}/>
         </div>
         <button onClick={onSubmit} style={{backgroundColor:'#A75E31',padding:'3px 4px',color:'white'}}>Add Pet</button>
          </form>
      </Modal>
    </div>
  );
}
