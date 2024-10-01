import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,displayitems,setshowitems}) => {
  const handleShowHide =()=>{
    setshowitems();
    
  }


 
  return (
    <div>
      {/* {Accordian Header} */}
      <div className=" w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-10 ">
      <div className="flex justify-between"
      onClick={handleShowHide}
 >
      <span className="font-bold text-lg">
        {data.title} 
        </span>
        <span>⬇️</span>
      </div>
      {displayitems && <ItemList list_data={data.itemCards}/>}
       {/* {Accordian Body} */}
    </div>
    </div>
  );
};

export default RestaurantCategory;