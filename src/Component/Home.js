import React from 'react';

function Home(){
    return (
        <div>
            <div className="row">
                <div className="add-to-cart ">
                    <img src="dist/img/cart-icon.jpg" className="img-cart elevation-2" alt="User Image"/>            
                </div>    
            </div>
            
            <h1>Home Component</h1>

            <div className="cart-wrapper">
                <div className="img-wrapper item" >                    
                    <img src="dist/img/phone.png" className="img-circle elevation-2" alt="User Image"/>
                </div>

                <div className="text-wrapper item" >
                    <span> 
                        i-phone
                    </span>
                    <br/>
                    <span > 
                        Price: $100.00
                    </span>
                </div>

                <div className="btn-wrapper item" >
                    <button className="btn btn-success">Add To Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Home;