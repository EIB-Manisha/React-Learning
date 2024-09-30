
import { useEffect, useState } from "react";
import mock_data from "../utils/mock_data";
import RestaurantCard from "./Restaurenrcard";
import Shimmer from "./Shimmer";
import UseonlineStatus from "../utils/Useonlinestatus";


const Body = () => {

    //State variable- super powerful variable
    const [listofRestaurants, setListofRestaurants] = useState([]);
    const [searchtext, setSearchtext] = useState("");
    const [filteredrestaurant, setFilteredrestaurant] = useState([]);


    console.log("Body Render");
    console.log(filteredrestaurant);

    useEffect(() => {
        fetchdata();

    },[]);

    const fetchdata = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6942091&lng=76.860565&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
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
    const status= UseonlineStatus();

    if(status === false)
        return(<h1>Looks like you do not have good internet connection.</h1>);
            
        
    

    return (
        listofRestaurants.length === 0 ? (<Shimmer />) : (
            <div className="bg-slate-50">

                <div className="flex">
                    <div className=" m-4 px-6">
                        <input className="border border-solid border-black"
                            type="text"
                            value={searchtext}
                            onChange={(e) => {
                                setSearchtext(e.target.value);

                            }} />
                        <button className="px-4 bg-green-400 rounded-lg"
                            onClick={() => {
                                const filteredrestaurant = listofRestaurants.filter((res) =>
                                    { return res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                            });
                                setFilteredrestaurant(filteredrestaurant);
                            }}
                        >Search</button>
                    </div>
                    <button className="px-4 py-1 bg-pink-50 rounded-2xl"
                        onClick={() => {
                            //filter logic
                            const filterlist = listofRestaurants.filter((res) =>{return res.info.avgRating > 4.5});
                            setFilteredrestaurant(filterlist);


                        }}


                    >Top Rated Restaurants</button>
                </div>
                <div className="flex flex-wrap bg-red-400">



                    {filteredrestaurant.map((resInfo,index) => (
                        <RestaurantCard key={index} res_data={resInfo.info} />
                    ))}


                </div>

            </div>
        )
    );
    
    
};

export default Body;