import React from "react";

;










export default function Collection(){
  

    return(
        <>
  
  

  <div class="container m-3">
  <h1 className="" style={{color:'#fff',marginRight:'50%'}}>Hot Collection</h1>
  <br/><br/>
   <div class="row row-cols-1 row-cols-sm-4 g-4  text-center">
     <div class="col">
       <div class="cards h-100 ">
       <img className="coll-img" src="./img/hot1.jpg" alt="" height="90%" width="90%"/>

       
        
        
       </div>
     </div>
     <div class="col">
       <div class="cards h-100">
       <img  className="coll-img" src="./img/hot5.png" alt="" height="90%" width="90%"/>

       
       </div>
     </div>
     <div class="col">
       <div class="cards h-100">
       <img className="coll-img" src="./img/hot6.jpg" alt="" height="90%" width="90%"/>

       </div>
     </div>
     <div class="col">
       <div class="cards h-100">
       <img className="coll-img" src="./img/hot7.jpg" alt="" height="90%" width="90%"/>

       
       </div>
     </div>
   </div>
</div>


<div class="container m-3">
 
   <div class="row row-cols-1 row-cols-sm-4 g-4  text-center">
     <div class="col">
       <div class="cards h-100 ">
       <img className="coll-img" src="./img/hot6.jpg" alt="" height="90%" width="90%"/>

       
        
        
       </div>
     </div>
     <div class="col">
       <div class="cards h-100">
       <img  className="coll-img" src="./img/hot7.jpg" alt="" height="90%" width="90%"/>

       
       </div>
     </div>
     <div class="col">
       <div class="cards h-100">
       <img className="coll-img" src="./img/hot5.png" alt="" height="90%" width="90%"/>

       </div>
     </div>
     <div class="col">
       <div class="cards h-100">
       <img className="coll-img" src="./img/hot1.jpg" alt="" height="90%" width="90%"/>

       
       </div>
     </div>
   </div>
</div>



 
  <div className="container">
    <div className="row">
        <div className="col-6">
<h1 style={{color:'white'}}>The Story</h1>
<p style={{textWrap:'balance'}}>Our collection's priority is to reward NFT <br/>holders by developing utilities they can use in their current everyday life. Not in a hypothetical future.</p>
<div className="row">
<div className="col-6">
<p>Total Items</p>
<h1 style={{color:'#fff'}}>22000+</h1>
<button  id="btn" type="button" >contact</button>
</div>
<div className="col-6">
<p>Profiles whitelisted</p>
<h1 style={{color:'#fff'}}>12334+</h1>

</div>
</div>

        </div>
        <div className="col-6">
        <div className="flex-container">
        <div className="flex-box">
        <div className="one"> 
                     <h1 style={{fontSize:'58px'}}>01</h1>
                </div>
            
<div className="two">
<h>Daily</h>
<br/><br/>
<p style={{fontSize:'15px'}}>Earn interstellar tokens passively by staking your collectible NFT.</p>
</div>
             
            </div>
            <div className="flex-box">
            <div className="one"> 
                     <h1 style={{fontSize:'58px'}}>02</h1>
                </div>
            
<div className="two">
<h>Exclusive Discounts</h>
<br/><br/>
<p style={{fontSize:'15px'}}>Earn interstellar tokens passively by staking your collectible NFT.</p>
</div>
             
            </div>
            <div className="flex-box">
            <div className="one"> 
                     <h1 style={{fontSize:'58px'}}>03</h1>
                </div>
            
<div className="two">
<h>Galactic Merch</h>
<br/><br/>
<p style={{fontSize:'15px'}}>Earn interstellar tokens passively by staking your collectible NFT.</p>
</div>
             
            </div>
            <div className="flex-box">

                <div className="one"> 
                     <h1 style={{fontSize:'58px'}}>04</h1>
                </div>
            
<div className="two">
<h>Limited-Edition Collabs</h>
<br/><br/>
<p style={{fontSize:'15px'}}>Earn interstellar tokens passively by staking your collectible NFT.</p>
</div>
             
            </div>
        </div>
   
        
            </div>
    </div>

 </div>

        </>
    );

}