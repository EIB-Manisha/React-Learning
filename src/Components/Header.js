import {LOGO_URL} from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UseonlineStatus from "../utils/Useonlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { itemCount } from "../utils/redux/cartSlice";




const Header=() =>{
    const[btn,setBtn] = useState("Login");
    const status = UseonlineStatus();
    const {data} = useContext(UserContext);

    // const cartItems = useSelector((store)=> store.cart.items);
    // const store = useSelector((store)=>store);
    // const cartItems = store.cart.items;

    const cartItemsCount = useSelector(itemCount);


    return(
        <div className="flex justify-between bg-slate-50">
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
                    <li> <Link to="/cart">Cart :{cartItemsCount}</Link></li>
                    <button style={{width:"100px",cursor:"pointer"}}
                    onClick={()=>{btn==="Login"?setBtn("Logout"):setBtn("Login")}
                    }
                    >{btn}</button>
                    <li>{data}</li>
                </ul>

            </div>

        </div>
    )

};

export default Header;