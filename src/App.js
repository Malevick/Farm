import React from 'react';
import './App.css';
import Farm from './Components/Farm';
import { Provider } from 'react-redux'
import rootReducer from './Redux/State'
import rootEpic from './Epics'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

const epicMiddleware = createEpicMiddleware()

// App :: () -> React.Component
const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware),
)

epicMiddleware.run(rootEpic)

export default ()=>
    <div className="App">
      <Provider store={store}>
        <Farm />
      </Provider>
    </div>
