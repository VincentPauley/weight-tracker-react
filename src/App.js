import heart from './images/heart-attack.png';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './routes/Home';
import AllRecords from './routes/AllRecords';
import DailyProgression from './routes/DailyProgression';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="uk-heading-small">Weight Tracker React</h1>
        <img src={heart} className="logo" alt="logo" />
      </header>

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

      <div>
        Footer:{' '}
        <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">
          Heart icons created by Freepik - Flaticon
        </a>
      </div>
    </div>
  );
}

export default App;
