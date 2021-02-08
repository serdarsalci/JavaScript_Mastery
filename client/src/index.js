import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middleware = [thunk]
const strore = createStore(reducers, compose(applyMiddleware(...middleware)))

ReactDOM.render(<App />, document.getElementById('root'))
