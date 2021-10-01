import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/reducers';

const saveState = (state) => {
  try {
    localStorage.setItem("DEVICE_STATE", JSON.stringify(state));
  } catch (error) {
    console.log(error);
  }
};
const loadState = () => {
  try {
    const deviceState = JSON.parse(localStorage.getItem("DEVICE_STATE"));
    if (deviceState === null) return undefined;
    return deviceState;
  } catch (error) {
    return undefined;
  }
};

const store = createStore(reducers,loadState());
store.subscribe(()=> saveState(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
