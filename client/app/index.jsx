import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

const Home = ()=>{ return <div>Home </div>; }

// const Routes = ()=>{
//   return ;
// };
class App extends Component {
  render(){
    return (<div>Hello</div>);
  }
}


ReactDOM.render(

  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>

  ,document.querySelector('.app-container'));
