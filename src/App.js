import React from 'react';
import './App.css';
import Farm from './Components/Farm';
import { Provider } from 'react-redux'
import rootReducer from './Redux/State'
import { createStore } from 'redux'

const store = createStore(rootReducer)

export default ()=>
    <div className="App">
      <Provider store={store}>
        <Farm />
      </Provider>
    </div>

