import logo from './logo.svg';
import './styles/App.css';
import Tab from "./components/common/tab-hook"
import Router from './router/router'
function App() {
  return (
    <div className="App">
      <Router />
      <Tab />
    </div>
  );
}

export default App;


