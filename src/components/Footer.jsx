
import {Link,Navigate,useNavigate} from 'react-router-dom'


function Footer() {




  return (

  <>

<div className="footer-margin-top"></div>

<div className="footer-bg">

<div className="row w-75 m-auto">



        <div className="col mt-4">
          <div className="navFooterColHead text-white mb-4"><h5> Get to Know Us </h5></div>
        <ul className="text-white">
            <li className="nav_first">
              <Link to="/" className="nav_a link text-info">About Us</Link>
            </li>
        </ul>
      </div>


        <div className="col mt-4">
          <div className="navFooterColHead text-white mb-4"> <h5>Connect with Us</h5></div>
        <ul className="text-white">
            <li className="nav_first">
              <Link to="/" className="nav_a link text-info">Facebook</Link>
            </li>
            <li className="nav_last ">
              <Link to="/" className="nav_a link text-info">Instagram</Link>
            </li>
        </ul>
      </div>


        <div className="col mt-4">
          <div className="navFooterColHead text-white mb-4"><h5>Let Us Help You</h5></div>
        <ul className="text-white">
            <li className="nav_first">
              <Link to="/" className="nav_a link text-info">COVID-19 and Star AC Solutions</Link>
            </li>
            <li>
              <Link to="/" className="nav_a link text-info">Return Policy</Link>
            </li>
            <li>
              <Link to="/" className="nav_a link text-info">100% Purchase Protection</Link>
            </li>
            <li className="nav_last ">
              <Link to="/" className="nav_a link text-info">Help</Link>
            </li>
        </ul>
      </div>

</div>
</div>

</>
);

}

export default Footer;
