import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './routes/Home';
import AllRecords from './routes/AllRecords';
import DailyProgression from './routes/DailyProgression';

function App() {
  return (
    <div className="App">
      <h1 className="uk-heading-small">Weight Tracker React</h1>
      <nav className="uk-navbar-container uk-navbar-transparent">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? { color: '#333' } : null)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/daily-progression"
                style={({ isActive }) => (isActive ? { color: '#333' } : null)}
              >
                Daily Progress
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-records"
                style={({ isActive }) => (isActive ? { color: '#333' } : null)}
              >
                All Records
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Route-Wrapper">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="daily-progression"
              element={<DailyProgression />}
            ></Route>
            <Route path="/all-records" element={<AllRecords />}></Route>
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
