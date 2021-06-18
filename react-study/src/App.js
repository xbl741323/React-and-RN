import Tab from './components/tab'
import Head from './components/head'
import Contain from './components/contain'
import React from 'react';
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="index">
        <Head />
        <Contain />
        <Tab />
      </div>
    );
  }
}

export default App;
