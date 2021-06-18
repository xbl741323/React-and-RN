import React from 'react';
import '../styles/head.css';

export class HeadComponent extends React.Component {
   state = {
      title: '首页'
   }
   render() {
      return (
         <div className="head"> { this.state.title} </div>
      )
   }
}

HeadComponent.defaultProps = {
};

export default HeadComponent;