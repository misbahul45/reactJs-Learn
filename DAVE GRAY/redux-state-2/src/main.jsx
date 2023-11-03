import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { ReduxStore } from './App/store.jsx'
import { getPost } from './App/ActionSlice.jsx'

setTimeout(()=>{
  ReduxStore.dispatch(getPost())
},2000)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
