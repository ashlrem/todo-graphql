import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import LoginPage from '../components/Login';
import Dashboard from '../components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />  {/* make private path */}
      </Router>
    </div>
  );
}

export default App;
