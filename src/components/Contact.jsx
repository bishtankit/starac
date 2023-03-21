import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function Contact() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
// href="mailto:`{email}`?subject={subject}&body={body}"
console.log(name);

return(
  <>
<Header />
<h4 className="mt-4"><strong> Please provide your email or number below </strong></h4>
<p> We will contact you shortly </p>


<form className="w-50 my-4" style={{margin: 'auto'}}>
  <div className="form-group my-4">
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Name" required onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="form-group">
    <input type="email" className="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email or Mobile number" required onChange={(e)=>setEmail(e.target.value)}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email or number with anyone else.</small>
  </div>
  <button type="submit" className="btn btn-info" style={{marginBottom: '30%', marginTop: '5%'}}><a href={'mailto:bishtankit372@gmail.com?subject=name = ' + name + ', email/number = '+ email} className="text-black">Submit</a></button>
</form>

<Footer />

  </>
);


}

export default Contact;
