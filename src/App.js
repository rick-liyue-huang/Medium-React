
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </Fragment>
        </BrowserRouter>
        
      </Provider>
    )
  }
}

export default App;

//   /detail