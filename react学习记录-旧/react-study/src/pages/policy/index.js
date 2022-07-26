import React from 'react'
import '../../styles/policy.css';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import result from './result/index'
import need from './need/index'

export class Policy extends React.Component {

  state = {
    tabIndex: 0,
    tabList: [
      {
        title: "技术成果",
        url: "/policy/result"
      },
      {
        title: "技术需求",
        url: "/policy/need"
      }]
  }

  changeTab = (index) => {
    this.setState({
      tabIndex: index
    })
  }

  render() {
    return (
      <div className="policy">
        <div className="policy_tab">
          {
            this.state.tabList.map((item, index) => {
              return <span className={this.state.tabIndex === index ? "active_title" : ""} onClick={(e) => this.changeTab(index, e)} key={index}>
                <NavLink to={item.url}>{item.title}</NavLink>
              </span>
            })
          }
        </div>
        <Switch>
          <Route exact path="/policy/result" component={result}></Route>
          <Route exact path="/policy/need" component={need}></Route>
          <Redirect to="/policy/result" />
        </Switch>
      </div>
    )
  }
}

export default Policy



