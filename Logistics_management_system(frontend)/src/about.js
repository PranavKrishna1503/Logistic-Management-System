import React from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import './styles.css';
function About(){
    const email= useSelector((state)=>state.email);
    console.log(email);
    return(
        <div className="about">
            <div className="hmbtn">
                <Link to='/home'><button type="submit">Back to Home</button></Link>
            </div>
            <div className="detail">
           <p>Hey {email} !</p>
           <p>This is a simple page that is being used to show the basic layout of Logistic management system.</p>
           <p>This is a page that shows the user side or the client side to order products for their branch or department</p>
           <p>This project is still in development stage and it will be completed soon</p>
           <p>Thanks to ChatGPT :)</p>
           </div>


        </div>
    );
}
export default About;
