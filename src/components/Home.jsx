import Header from "./Header";
import Footer from "./Footer";
import bg from "../images/background.jpg";
import appliances from "../images/appliances.jpg";

function Home() {


return(
  <>
<Header />


<div>
<img src={bg} className="bg-image"/>
</div>


<div className="w-50 productsDiv">
<h4> <strong>Our Products & Services</strong> </h4>
<h4 className="mb-4"> <strong>All over Delhi, NCR</strong> </h4>
<p className="text-muted"> A wide variety of products and services </p>
<p className="text-muted"> Picked and delivered to your door step </p>
</div>

<div className="w-50 productsDiv d-flex" style={{marginLeft: 'auto'}}>
<img src={appliances} className="bg-image" alt="home appliances"/>
</div>

<Footer />
  </>
);


}

export default Home;
