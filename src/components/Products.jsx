import ac from "../images/ac.jpg";
import fridge from "../images/fridge.jpg";
import machine from "../images/machine.jpg";
import Footer from "./Footer";
import Header from "./Header";

function Products() {


  return (
    <>
    <Header />
    <div>


    <div className="d-flex my-1">
      <div className="w-50">
      <img src={ac} className="bg-image" />
      </div>
      <div className="w-50" style={{padding: '5%'}}>
       <h4 className="productsFont"><strong> Custom build Air conditioner, installation and repair </strong></h4>
       <p className="productsPara"> At minimum charges </p>
      </div>
    </div>


    <div className="d-flex my-1">
      <div className="w-50" style={{padding: '5%'}}>
       <h4 className="productsFont"><strong> Second hand Refrigerators, Gas filling, parts and repair  </strong></h4>
       <p className="productsPara"> At minimum charges </p>
      </div>
      <div className="w-50">
      <img src={fridge} className="bg-image" style={{width: '60%'}}/>
      </div>
    </div>


    <div className="d-flex my-1">
      <div className="w-50">
      <img src={machine} className="bg-image" style={{width: '60%'}}/>
      </div>
      <div className="w-50" style={{padding: '5%'}}>
       <h4 className="productsFont"><strong> Second hand Washing machines, parts and repair  </strong></h4>
       <p className="productsPara"> At minimum charges </p>
      </div>
    </div>




    </div>
    <Footer />
    </>
  )
}

export default Products;
