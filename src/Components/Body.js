
import { createContext, useContext, useEffect, useState } from "react";
import mock_data from "../utils/mock_data";
import RestaurantCard from "./Restaurenrcard";
import Shimmer from "./Shimmer";
import UseonlineStatus from "../utils/Useonlinestatus";
import { RES_LIST_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {

    //State variable- super powerful variable
    const [listofRestaurants, setListofRestaurants] = useState([]);
    const [searchtext, setSearchtext] = useState("");
    const [filteredrestaurant, setFilteredrestaurant] = useState([]);

   


    console.log("Body Render");
    console.log(filteredrestaurant);

    useEffect(() => {
        fetchdata();

    }, []);

    const fetchdata = async () => {

        const data = await fetch(RES_LIST_API);
        const json = await data.json();
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);



        // {json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map((data)=>(data.info));

        setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredrestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);



    }
    //conditional rendering
    // if(listofRestaurants.length===0){
    //     return<Shimmer/>
    // }
    const status = UseonlineStatus();

    if (status === false)
        return (<h1>Looks like you do not have good internet connection.</h1>);

    const { loggedInUser, setUserInfo } = useContext(UserContext);




    return (
        listofRestaurants.length === 0 ? (<Shimmer />) : (
            <div className="bg-slate-50 px-4">

                <div className="flex px-4">
                    <div className=" m-4 px-6">
                        <input className="border border-solid border-black"
                            type="text"
                            value={searchtext}
                            onChange={(e) => {
                                setSearchtext(e.target.value);

                            }} />
                        <button className="px-4 bg-slate-300 rounded-lg"
                            onClick={() => {
                                const filteredrestaurant = listofRestaurants.filter((res) => {
                                    return res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                                });
                                setFilteredrestaurant(filteredrestaurant);
                            }}
                        >Search</button>
                    </div>
                    <div className="px-6 mt-4">
                    <button className="px-4 py-1 bg-slate-300 rounded-2xl w-auto h-8"
                        onClick={() => {
                            //filter logic
                            const filterlist = listofRestaurants.filter((res) => { return res.info.avgRating > 4.5 });
                            setFilteredrestaurant(filterlist);


                        }}


                    >Top Rated Restaurants</button>

                    </div>
                  
                    <div className="p-4">
                        <input className="h-10 p-5" onChange={(e) => setUserInfo(e.target.value)} value={loggedInUser}></input>


                    </div>
                </div>
                <div className="flex flex-wrap bg-gray-200">


                
                        {filteredrestaurant.map((resInfo, index) => (
                            <RestaurantCard key={index} res_data={resInfo.info} />
                        ))}

             



                </div>

            </div>
        )
    );


};

export default Body;