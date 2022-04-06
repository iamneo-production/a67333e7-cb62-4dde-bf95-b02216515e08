import React from "react";
import Axios from 'axios';
import CardData from "./CardData.js";
import { Link } from "react-router-dom";

export default function Card(props) {
  let count = 1;
  let id = "grid";
  let url = "http://localhost:8080/home";
  const allCards = 
    CardData.map(function (data) {
    if (
      !props.name ||
      data.resourceName.toLowerCase().includes(props.name.toLowerCase())
    ) {
      let stringId = id + count;
      count = count + 1;
      return (
        <Link to="/resource" className=" col-md-4 col-sm-6 col-xs-12 link">
          <section className=" card" id={stringId}>
            <img
              className="card--image"
              src={`homeImages/${data.imageUrl}`}
              alt={data.resourceName}
            />
            <h3>{data.resourceName}</h3>
            <p>{data.createdOn}</p>
            <p>{data.resourceCategory}</p>
            <div className="lower--box">
              {data.verified && (
                <img
                  className="verified"
                  src="homeImages/verified.jpg"
                  alt="verified"
                />
              )}
            </div>
          </section>
        </Link>
      );
    } else return "";
  }); 
//})
return [allCards];
}

/*
CardData.then((res) => {
  */