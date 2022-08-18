import './styles/App.css';
import Tab from "./components/common/tab-hook"
import Router from './router/router'
import Nav from "./components/common/nav-hook"
import { useLocation } from 'react-router'
function App() {
  const location = useLocation()
  const routeList = ['/', '/policy', '/classify', '/personal']
  let status = routeList.includes(location.pathname)
  return (
    <div className="App">
      <Nav />
      <Router />
      {
        status ? <Tab /> : ''
      }
    </div>
  );
}

export default App;


