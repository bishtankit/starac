import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function Header() {




  return (
    <Nav variant="tabs" defaultActiveKey="/home" style={{padding: '1%'}} className="">
      <Nav.Item style={{marginRight: '1.5%'}}>
        <Nav.Link><Link to="/" className="link text-black"><h4 style={{fontWeight: 'bold'}}> <i className="fa-solid fa-star text-info"></i> Star AC Solutions </h4></Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className="text-black">
        <Link to="/products" className="link text-black">
        <h5>Products</h5>
        </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
        <Link to="/contact" className="link text-black"><h5>Contact Us</h5></Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

}




export default Header;
