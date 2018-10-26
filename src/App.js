
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import store from './store/index';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {

  render() {
    return(
      <Provider store={store}>
      	<BrowserRouter>
        	<div>
            <Header />
	        	{/*<Route path="/" exact render={() => <div>Home</div>}></Route>*/}
	        	<Route path="/" exact component={Home}></Route>
	        	<Route path="/detail/:id" exact component={Detail}></Route>
          	{/*<Route path="/detail" exact component={Detail}></Route>*/}
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
        </div>
        </BrowserRouter> 
      </Provider>
    );
  }
}

export default App;
