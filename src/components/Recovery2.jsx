import { useState } from "react";
import logo from '../assets/googleLogo.jpg';
export default function Recovery2() {
  const [detail,setDetail]=useState({pass:'',confirmPass:''})
  const [isChecked,setIsChecked]=useState(false);
  function handleChange(e){
    const {name,value}=e.target;
    setDetail({...detail,[name]:value});
  }
  function handleCheckChange(){
    setIsChecked(!isChecked);
  }
  function changePassword(){

  }
  return (
    <div className="recovery2Container">
        <div className="recovery2ContainerChild">
            <div className="images">
                <img src={logo} alt="google-logo"/>
                <h1 className="google-text">Google</h1>
            </div>
            <div className="enterDetail">
                <p>To continue, enter your email and username</p>
                <input type="password" placeholder="Enter Password" onChange={handleChange} name="pass" required/>
                <input type={isChecked?"text":"password"} placeholder="Confirm Password" onChange={handleChange} name="confirmPass" required/>
                <input type="checkbox" checked={isChecked} onChange={handleCheckChange} />
                <p><strong>Show password</strong></p>
            </div>
        </div>
        <div className="button">
            <button type="button" onClick={changePassword}>Next</button>
        </div>
    </div>
  );
}
