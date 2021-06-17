require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Tab from './tab'
import Head from './head'
import Contain from './contain'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Head />
        <Contain />
        <Tab />
      </div>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;