import React from "react";
import "./makeyourrecipe.css";
import {
  FaNutritionix,
  FaHeartbeat,
  FaClipboardList,
  FaCoffee,
} from "react-icons/fa";

function MakeRecipe() {
  return (
    <div className="container make-recipe-section mb-5 w-100">
      <span className="mkrecipe-subtitle position-relative">Feature</span>
      <div className="row">
        <div className="col-6">
          <h3 className="mkrecipe-title">Make your recipe</h3>
          <p>You can make your own recipe</p>
          <h4 className="mkrecipe-title2 mt-4">View Recipe Detail</h4>
          <div className="row">
            <div className="col-6 text-feature">
              <p>
                <FaNutritionix /> Nutrition Data
              </p>
            </div>
            <div className="col-6 text-feature">
              <p>
                <FaHeartbeat /> Health Information
              </p>
            </div>
            <div className="col-6 text-feature">
              <p>
                <FaClipboardList /> Price Data
              </p>
            </div>
            <div className="col-6 text-feature">
              <p>
                <FaCoffee /> Cooking Tips
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center text-center">
          <img
            className="img-fluid"
            style={{ borderRadius: "20px" }}
            width={350}
            src="https://pasjabar.com/wp-content/uploads/2022/12/Screenshot-2022-12-01-155132.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MakeRecipe;
