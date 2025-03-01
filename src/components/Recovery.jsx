import { useState } from "react";
import logo from '../assets/googleLogo-Photoroom.png';
export default function Recovery() {
  const [detail,setDetail]=useState({name:'',email:''})
  function handleChange(e){
    const {name,value}=e.target;
    setDetail({...detail,[name]:value});
  }
  return (
    <div className="recoveryContainer">
      <div className="recoveryContainerChild">
        <div className="innerChild">
          <div className="images">
            <img src={logo} alt="google-logo"/>
            <h1 className="google-text">Google</h1>
          </div>
          <div className="enterDetail">
            <p>To continue, enter your email and username</p>
            <input type="text" placeholder="Enter Username" onChange={handleChange} name="name" required/>
            <input type="text" placeholder="Enter Email" onChange={handleChange} name="email" required/>
          </div>
        </div>
        <div className="button">
          <button type="button">Next</button>
        </div>
      </div>
    </div>
  );
}
