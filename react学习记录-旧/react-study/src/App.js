import Tab from './components/tab'
import React from 'react';
import './styles/App.css';
import Router from './router/router'
import { withRouter } from 'react-router-dom';
class App extends React.Component {
  render() {
    const { pathname } = this.props.location  // 解构赋值
    return (
      <div className="index">
        <Router />
        {
          pathname === "/" ||
          pathname === "/policy" ||
          pathname === "/policy/result" ||
          pathname === "/policy/need" ||
          pathname === "/service" ||
          pathname === "/my" ? <Tab /> : ""
        }
      </div>
    );
  }
}

export default withRouter(App);
