import React from "react";
import "./makeyourrecipe.css";

function MakeRecipe() {
  return (
    <div className="container make-recipe-section pt-4 mt-3 mb-5 w-100">
      <span className="mkrecipe-subtitle position-relative">
        our recomendation
      </span>
      <div className="row">
        <div className="col-6">
          <h3 className="mkrecipe-title">Ingredients</h3>
          <p>You can make your own recipe</p>
          <h4 className="mkrecipe-title2 mt-5">Ingredients Detail</h4>
          <div className="row">
            <div className="col-6 font-weight-bold">- Nutrition Data</div>
            <div className="col-6 font-weight-bold">- Health Information</div>
            <div className="col-6 font-weight-bold">- Price Data</div>
            <div className="col-6 font-weight-bold">- Cooking Tips</div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center text-center">
          <img
            className="img-fluid" style={{borderRadius:'20px'}} width={300}
            src="https://pasjabar.com/wp-content/uploads/2022/12/Screenshot-2022-12-01-155132.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MakeRecipe;
