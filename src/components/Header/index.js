// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="logo-text">Wave</h1>
    </div>
    <ul className="button-container">
      <li className="list-item">
        <Link className="header-link" to="/">
          Home
        </Link>
      </li>
      <li className="list-item">
        <Link className="header-link" to="/about">
          About
        </Link>
      </li>
      <li className="list-item">
        <Link className="header-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
