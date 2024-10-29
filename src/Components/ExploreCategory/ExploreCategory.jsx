import React from "react";
import { category_list } from "../../assets/assets";
import "./ExploreCategory.css";

const ExploreCategory = ({ category, setCategory }) => {
  return (
    <div className="explore-category mt-3" id="explore-category">
      <h3 >Category Of Arts</h3>
      <div className="explore-category-list">
        {category_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.category_name ? "All" : item.category_name
                )
              }
              key={index}
              className="explore-category-list-item "
            >
              <img
                className={category === item.category_name ? "active" : ""}
                src={item.category_image}
                alt="art-category-image"
              />
              <p className="text-center">{item.category_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreCategory;
