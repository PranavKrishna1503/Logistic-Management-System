import React from "react";
import './order.css';
function Orders(){
    return(
        <div className="Main">
            <div class="order-page">
  <div class="order-container">
  <div class="order-header Grid">
    <div class="Grid-cell">
      <span class="bold">Order 1 - </span>
      <span>1 item</span> 
    </div>
    <div class="Grid-cell">
      <span class="bold">Total £46.00</span>        
    </div>
    <div class="Grid-cell"></div>
    <div class="Grid-cell">
      <span class="view-button right">View</span>
    </div>
  </div>
  <div>
    <div class="order-body">
      <div class="order-body-title">
        <div class="Grid-cell qty">
          <span class="order-body-title">Qty</span> 
        </div>
        <div class="Grid-cell product">
          <span class="order-body-title">Product</span>       
        </div>
        <div class="Grid-cell price right-border">
          <span class="order-body-title right">Price</span> 
        </div>
        <div class="Grid-cell returns">
          <span class="order-body-title right">Returns</span> 
        </div>
      </div>   
      <div class="order-body-items">
        <div class="order-item Grid">
        <div class="Grid-cell qty">
          <span>1</span> 
        </div>
        <div class="Grid-cell product">
          <span>3 months membership</span>        
        </div>
        <div class="Grid-cell price right-border">
          <span class="order-body-title right">£45.00</span> 
        </div>
        <div class="Grid-cell returns">
          <span class="right">Cancel</span> 
        </div>
      </div>
      <div class="order-item Grid">
        <div class="Grid-cell qty">
          <span>1</span> 
        </div>
        <div class="Grid-cell product">
          <span>Slimming World's little book of summer</span>        
        </div>
        <div class="Grid-cell price right-border">
          <span class="order-body-title right">Free</span> 
        </div>
        <div class="Grid-cell returns">
          <span class="right">
            <input id="item-2-cancel" type="checkbox" class="order-checkbox" />
          </span> 
        </div>
      </div>
      </div>
    </div>  
    
  </div>
  
  
  <div class="order-footer Grid">
    <div class="Grid-cell">
      <span>Date: 21/08/2017</span>
    </div>
    <div class="Grid-cell"></div>
    <div class="Grid-cell">
      <span class="right">Status: 
        <span class="order-status-success">Success</span>     
      </span>
    </div>
    <div class="Grid-cell">
      <span class="right">Ref: BO-0917439</span>
    </div>
  </div>
</div>

<div class="order-container">
  <div class="order-header Grid">
    <div class="Grid-cell">
      <span class="bold">Order 2 - </span>
      <span>3 items</span> 
    </div>
    <div class="Grid-cell">
      <span class="bold">Total £75.00</span>        
    </div>
    <div class="Grid-cell"></div>
    <div class="Grid-cell Grid-cell">
      <span class="right">View</span>
    </div>
  </div>
  <div class="order-footer Grid">
    <div class="Grid-cell">
      <span>Date: 18/06/2017</span>
    </div>
    <div class="Grid-cell"></div>
    <div class="Grid-cell">
      <span class="right">Status: 
        <span class="order-status-fail">Failed</span>     
      </span>
    </div>
    <div class="Grid-cell">
      <span class="right">Ref: BO-0917428</span>
    </div>
  </div>
  </div>
</div>

        </div>
    );
}
export default Orders;