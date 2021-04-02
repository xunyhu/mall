import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
// import 'lib-flexible'
import { setFontSize } from './utils'
import { Provider } from 'react-redux'
import store from './store/store'
setFontSize()
// console.log(React)
// console.log(ReactDom)



ReactDom.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))