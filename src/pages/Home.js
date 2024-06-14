import React from "react";
import About from "./About";
import Faq from "./Faq";
import Collection from  "./Collection";
import DiDmap from "./DiDmap";
export default function Home(){
  

    return(
        <>
        <nav class="">
  
</nav>
  
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">

  <div className="container-fluid">
  <span className="navbar-text">Navbar text</span>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <ul className="navbar-nav" style={{marginLeft:'0px'}}>
    <li className="nav-item dropdown ">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{color:'#fff'}}>Home</a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Link</a></li>
    <li><a className="dropdown-item" href="#">Another link</a></li>
    <li><a className="dropdown-item" href="#">A third link</a></li>
  </ul>
</li>
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{color:'#fff'}}>About</a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Link</a></li>
    <li><a className="dropdown-item" href="#">Another link</a></li>
    <li><a className="dropdown-item" href="#">A third link</a></li>
  </ul>
</li>
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{color:'#fff'}}>Collection</a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Link</a></li>
    <li><a className="dropdown-item" href="#">Another link</a></li>
    <li><a className="dropdown-item" href="#">A third link</a></li>
  
  </ul>
</li> 
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{color:'#fff'}}>Roadmap</a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Link</a></li>
    <li><a className="dropdown-item" href="#">Another link</a></li>
    <li><a className="dropdown-item" href="#">A third link</a></li>
  </ul>
</li>
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{color:'#fff'}}>Faqs</a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Link</a></li>
    <li><a className="dropdown-item" href="#">Another link</a></li>
    <li><a className="dropdown-item" href="#">A third link</a></li>
  </ul>
</li>                                  
    </ul>
    <button type="button" style={{backgroundColor:'gray',marginLeft:'490px'}}>Discard</button>
    <button type="button" >contact</button>
    
  </div>

</nav>

<About />
<br/><br/>
<br/><br/>
<br/><br/>
<br/>
<br/>
 <Faq/>
 <Collection />
 <br/><br/>
<br/><br/>

<DiDmap />
        </>
    );

}