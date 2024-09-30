import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseonlineStatus from "../utils/Useonlinestatus";




const Header=() =>{
    const[btn,setBtn] = useState("Login");
    const status = UseonlineStatus();

    return(
        <div className="flex justify-between bg-pink-50 shadow-lg mb-2 sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo">
                <img className="w-40" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-3">
                    <li className="px-4">{status? "Yes":"No"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li></li>
                    <button style={{width:"100px",cursor:"pointer"}}
                    onClick={()=>{btn==="Login"?setBtn("Logout"):setBtn("Login")}
                    }
                    >{btn}</button>
                </ul>

            </div>

        </div>
    )

};

export default Header;