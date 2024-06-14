import React from "react";


export default function Faq(){
  

    return(
        <>
<div class="container m-3">
  <h1 className="work">HOW TO <span>NETLIFY</span>NETLIFY WORK</h1>
  <br/><br/>
   <div class="row row-cols-1 row-cols-sm-4 g-4  text-center">
     <div class="col">
       <div class="card h-100">
       <img className="center" src="./img/wallet.png" alt="" height="40%" width="40%"/>
<h5>Step1</h5>
<p>connect to Wallet</p>
       
        
        
       </div>
     </div>
     <div class="col">
       <div class="card h-100">
       <img  className="center" src="./img/bird.png" alt="" height="40%" width="40%"/>
<h5>Step2</h5>
<p>Select your quality</p>
         <i class="bi bi-shield-lock card-icon"></i>
       
       </div>
     </div>
     <div class="col">
       <div class="card h-100">
       <img className="center" src="./img/shoping.png" alt="" height="40%" width="40%"/>
<h5>Step3</h5>
<p>confirm the transition</p>
         <i class="bi bi-heart-pulse card-icon "></i>
      
       </div>
     </div>
     <div class="col">
       <div class="card h-100">
       <img className="center" src="./img/wallet.png" alt="" height="40%" width="40%"/>
<h5>Step4</h5>
<p>Receive your Neft</p>
         <i class="bi bi-fingerprint card-icon"></i>
       
       </div>
     </div>
   </div>
</div>


  

        </>
    );

}