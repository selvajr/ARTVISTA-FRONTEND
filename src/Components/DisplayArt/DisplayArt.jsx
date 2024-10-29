import React, { useContext } from "react";

import { StoreContext } from "../../Context/StoreContext";
import ArtItem from "../ArtItem/ArtItem";

const DisplayArt = ({ category }) => {
const {art_list}=useContext(StoreContext)
  return (
    <div className="displayArt container">
        <div className="row  row-cols-1 row-cols-md-3  justify-content-center g-4 mt-3 p-5">
        {art_list.map((item, index) => {
        if (category === "All" || category === item.category) {
          return (
            <ArtItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              artist={item.artist}
            />
          );
        }
      })}
        </div>
     
    </div>
  );
};

export default DisplayArt;
