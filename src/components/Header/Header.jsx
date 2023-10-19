 import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <div>
              <Link to='/'>Home</Link>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
        </div>
    );
};

export default Header;