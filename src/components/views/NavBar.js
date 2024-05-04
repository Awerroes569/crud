import styles from './NavBar.module.scss';
import { Nav, Navbar}  from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        
        <Navbar bg="primary" className="mt-4 mb-4 rounded justify-content-between" >
            <Navbar.Text bg="primary" className="text-light">&nbsp;&nbsp;Blog.app</Navbar.Text>
            
            <Nav>
                <Nav.Link as={NavLink} className="text-light"  to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} className="text-light"  to="/about">About</Nav.Link>
            </Nav>
        </Navbar>
        
    );
}

export default NavBar;  