import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = (props) => {
  // const { resData } = props.res_data;

  const {loggedInUser} = useContext(UserContext);


  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = props.res_data;

  return (
    <a href={`/restaurant/`+ props.res_data.id}>
      <div
        data-testid="resCard"
        className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      >
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{props.res_data.sla.deliveryTime} minutes</h4>
        <h1>User :{loggedInUser}</h1>
      </div>
    </a>

  );
};

// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;