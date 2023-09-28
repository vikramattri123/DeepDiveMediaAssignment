import { createSlice } from "@reduxjs/toolkit";

export interface PetData {
    id:number;
    customerName: string;
    customerEmail:string;
    pet:string;
}

export interface InitialState {
    Pet:PetData[]
}

export interface AppsState {
    ["APPS"]: InitialState;
  }

const initialState:InitialState = {
Pet:[ 
]
}


export const DataReducer = createSlice({
    name:'Pet Data',
    initialState:initialState,
    reducers: {
        AddPet(state,action) {
         state.Pet.push(action.payload);
        },

        DeletePet(state,action){
         const updatedPetList = state.Pet.findIndex((data) => data.id===action.payload.id);
         state.Pet.splice(updatedPetList,1);
        }
    }
})

export const DataReducerAction = DataReducer.actions;

