import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems,clearCart } from "../utils/redux/cartSlice";

const ItemList = (props) => {
  const item = props.list_data;
  console.log(item);
  const dispatch = useDispatch();

  const handleAddToCart=(info)=>{
    dispatch(addItems(info));



  }


  return (
    <div>

      {
        item.map(info => (
          <div className="border-b-2 solid-gray h-auto p-4 flex">
            <div className="w-4/5 ">
              {(info.card?.info?.isVeg)?
                <img className="w-5" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" />
                :
                <img className="w-5" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" />}
              <h1 className="font-bold text-lg">{info.card?.info?.name}</h1>
              <b>₹{info.card?.info?.price / 100}</b>
              <p>{info.card?.info?.description}</p>
            </div>
            <div className="w-1/5">
              <img
                className=" rounded-lg"
                alt="res-logo"
                src={CDN_URL + info.card?.info?.imageId}
              />
              <button className="rounded-lg bg-black text-white ml-16" onClick={()=>handleAddToCart(info)}>Add +</button>

            </div>
          </div>
        ))
      }

    </div>
  )

}

export default ItemList;