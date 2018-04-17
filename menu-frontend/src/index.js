import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import { menu_reducer } from './reducers/menu_reducer'
// import { rootReducer } from './reducers/RootReducer'
import  thunk  from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';



// const store = createStore(rootReducer, applyMiddleware(thunk))

const store = createStore(menu_reducer, applyMiddleware(thunk))


ReactDOM.render(
   <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById('root'));
