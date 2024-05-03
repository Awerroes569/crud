import styles from './NavBar.module.scss';
import { Nav, Navbar}  from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        
        <Navbar bg="primary" className="justify-content-between">
            <Navbar.Brand className="text-light">Blog.app</Navbar.Brand>
            
            <Nav>
                <Nav.Link as={NavLink}  to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} className="text-light" to="/about">About</Nav.Link>
            </Nav>
        </Navbar>
        
    );
}

export default NavBar;  