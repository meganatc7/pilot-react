import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        <li>
          <Link to="/todo">My-ToDo</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;