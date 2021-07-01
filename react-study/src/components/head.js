import React from 'react';
import '../styles/head.css';
import { withRouter } from 'react-router-dom'

export class HeadComponent extends React.Component {

   goBack = (e) => {
      this.props.history.goBack()
   }

   render() {
      const { pathname } = this.props.location
      return (
         <div className="head">
            {
               pathname === "/" ||
               pathname === "/service" ||
               pathname === "/my" ? "" : <i onClick={(e) => this.goBack(e)} className="el-icon-arrow-left fixed_left_icon"></i>
            }
            <span>{this.props.title}</span>
         </div>
      )
   }
}

HeadComponent.defaultProps = {
   title: "首页"
}

export default withRouter(HeadComponent);