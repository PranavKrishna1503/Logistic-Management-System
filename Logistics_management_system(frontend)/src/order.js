// import React, { useState } from 'react';
// import './order.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Orders() {
//   const [showPopup, setShowPopup] = useState(false);

//   const handlePurchase = (event) => {
//     event.preventDefault();
//     setShowPopup(true);
//   };
 
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//       firstName: "",
//       lastName: "",
//       address: "",
//       city: "",
//       pro_name: "",
//       pro_id: "",
//       quantity: ""
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       if (!formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.pro_name || !formData.pro_id || !formData.quantity) {
//         alert("Please fill in all the required fields.");
//         return;
//       }
//       axios.post("http://127.0.0.1:8080/orders/purchase", formData)
//       .then(response => {
//         console.log("Form submitted successfully:", response.data);
//         setFormData({
//           firstName: "",
//           lastName: "",
//           address: "",
//           city: "",
//           productname: "",
//           productid: "",
//           quantity: ""
//         });
//       })
//       .catch(error => {
//         console.error("Error submitting form:", error);
//       });
    
//   }  ;

//   return (
//     <div className="Main">
//       <div class="wrap">
//         <div class="contain">
//           <form className='form'action="" onSubmit={handleSubmit}>
//             <h1>
//               <i class="fas fa-shipping-fast"></i>
//               Shipping Details
//             </h1>
//             <div class="name">
//               <div>
//                 <label for="f-name">First Name</label>
//                 <input type="text" name="first_name" />
//               </div>
//               <div>
//                 <label for="l-name">Last Name</label>
//                 <input type="text" name="last_name" />
//               </div>
//             </div>
//             <div class="street">
//               <label for="name">Street</label>
//               <input type="text" name="street" />
//             </div>
//             <div class="address-info">
//               <div>
//                 <label for="city">City</label>
//                 <input type="text" name="city" />
//               </div>
//               <div>
//                 <label for="state">Product Name</label>
//                 <input type="text" name="product_name" />
//               </div>
//               <div>
//                 <label for="zip">Product ID</label>
//                 <input type="text" name="product_id" />
//               </div>
//             </div>
//             <h1>
//               <i class="far fa-credit-card"></i> Order Details
//             </h1>
//             <div class="cc-num">
//               <label for="card-num">Quantity</label>
//               <input type="text" name="quantity" />
//             </div>
//             <div className="btns">
//               <button onClick={handleSubmit}>Purchase</button>
//               {showPopup && (
//                 // Add your popup code here
//                 // For example:
//                   <div class='popup'>
//                     Thank you for your purchase!
//                   </div>
//               )}
//               <br/>
//               <Link to="/home">
//                 <button>Back to Home</button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Orders;
//import React, { useState } from 'react';
import './order.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Orders() {
    const [showPopup, setShowPopup] = useState(false);

    const handlePurchase = (event) => {
      event.preventDefault();
      setShowPopup(true);
    };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pname: "",
    pid: "",
    quantity: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.city ||
      !formData.pname ||
      !formData.pid ||
      !formData.quantity
    ) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    axios.post("http://127.0.0.1:8082/order/orders", formData)
    .then(response => {
      console.log("Form submitted successfully:", response.data);
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        pname: "",
        pid: "",
        quantity: ""
      });
    })
    .catch(error => {
      console.error("Error submitting form:", error.response);
    });
  alert("Order Stored");
  };
  
  return (
    <div className="Main">
      <div className="wrap">
        <div className="contain">
          <form className='form' onSubmit={handleSubmit}>
            <h1>
              <i className="fas fa-shipping-fast"></i>
              Shipping Details
            </h1>
            <div className="name">
              <div>
                <label htmlFor="f-name">First Name</label>
                <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
              </div>
              <div>
                <label htmlFor="l-name">Last Name</label>
                <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
              </div>
            </div>
            <div className="street">
              <label htmlFor="name">Street</label>
              <input type="text" name="address" onChange={handleChange} value={formData.address} />
            </div>
            <div className="address-info">
              <div>
                <label htmlFor="city">City</label>
                <input type="text" name="city" onChange={handleChange} value={formData.city} />
              </div>
              <div>
                <label htmlFor="state">Product Name</label>
                <input type="text" name="pname" onChange={handleChange} value={formData.pname} />
              </div>
              <div>
                <label htmlFor="zip">Product ID</label>
                <input type="text" name="pid" onChange={handleChange} value={formData.pid} />
              </div>
            </div>
            <h1>
              <i className="far fa-credit-card"></i> Order Details
            </h1>
            <div className="cc-num">
              <label htmlFor="card-num">Quantity</label>
              <input type="text" name="quantity" onChange={handleChange} value={formData.quantity} />
            </div>
            <div className="btns">
              <button type="submit">Purchase</button>
              
              <br />
              <Link to="/products">
                <button>Back to Products</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Orders;
