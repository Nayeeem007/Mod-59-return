 import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <div>
              <Link className='mx-2' to='/'>Home</Link>
              <Link className='mx-2' to='/login'>Login</Link>
              <Link className='mx-2' to='/register'>Register</Link>
              <Link className='mx-2' to='/register-rb'>Register RB</Link>
              <Link className='mx-2' to='/register-bs'>Register BS</Link>
        </div>
    );
};

export default Header;