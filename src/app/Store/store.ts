import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { AppsState, DataReducer } from './reducers';

type RootState = AppsState;

const rootReducer = combineReducers<RootState>({
  APPS:DataReducer.reducer
  });


const store = configureStore({
    reducer: rootReducer
})

export default store