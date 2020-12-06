import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './css/assets/css/bootstrap.min.css';
// import './css/assets/css/flaticon.css';
// import './css/assets/css/slicknav.css';
// import './css/assets/css/animate.min.css';
// import './css/assets/css/magnific-popup.css';
// import './css/fontawesome-free-5.15.1-web/css/all.min.css';
// import './css/assets/css/themify-icons.css';
// import './css/assets/css/slick.css';
// import './css/assets/css/style.css';



import App from './App';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import appReducers from './redux/reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
// App.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, App.settings.env);
// });
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
