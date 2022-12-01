import React from 'react';
import './subscribe.css';
import { FaEnvelope } from "react-icons/fa";

function Subscribe() {
  return (
    <div className="container w-100 subscribe-section p-5 ">
        <div className="row justify-content-center text-center">
            <h2>
            Subscribe For More Info <br />
            and update from foodiefy
            </h2>

            <div className="input-group w-50 my-3">
                <div className="icon-loc">
                <FaEnvelope></FaEnvelope>
                </div>
                <input type="text" className="text-secondary form-control" placeholder="Search for the recipe you want!" aria-label="Search for the recipe you want!" aria-describedby="basic-addon2"></input>
                <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Subscribe Now</button>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Subscribe;
