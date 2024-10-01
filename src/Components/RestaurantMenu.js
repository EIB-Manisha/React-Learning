import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [state, setState] = useState();
  const { id } = useParams();
  const[showitems,setshowitems]= useState();
  const[isShow, setIsShow] = useState(false);


  const resInfo = useRestaurantMenu(id);


  if (resInfo === null) return <Shimmer />;

  const { name,cuisines} =
    resInfo?.cards[2]?.card?.card?.info;

 

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter
    (c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(itemCards);

  



  return (
    <>
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(" ,")}</p>
    </div>
      {itemCards.map((item,index) => (
        <RestaurantCategory data={item?.card?.card}
        displayitems={index === showitems && isShow  ? true:false}
        setshowitems={()=>{
          setshowitems(index);
          setIsShow(!isShow);
        }}
      />

      ))}
    </>




  );
};

export default RestaurantMenu;