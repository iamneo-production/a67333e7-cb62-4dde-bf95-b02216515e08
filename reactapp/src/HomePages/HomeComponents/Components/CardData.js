import React, { useState } from 'react';
import Axios from 'axios';

let ls=[];
Axios.get("http://localhost:8080/home").then((res)=>ls=res.data);
export default ls;
// export default function CardData(){
//     const [data, setData] = useState({
//         lst: []
//     })
//     let url = "http://localhost:8080/home";
//     Axios.get(url).then((response) => {
//         setData(response.data);
//         console.log("displayed...");
//     });
//     return data.lst;
// }

// export default [
//   {
//     resourceId: "grid1",
//     resourceName: "Angular",
//     resourceLink: "link",
//     imageUrl: "angular.png",
//     resourceCategory: "Front-End Technology",
//     createdOn: 2011,
//     createdBy: "",
//     verified: true,
//     active: true
//   },
//   {
//     resourceId: "grid2",
//     resourceName: "React",
//     resourceLink: "link",
//     imageUrl: "react.png",
//     resourceCategory: "Front-End Technology",
//     createdOn: 2012,
//     createdBy: "",
//     verified: true,
//     active: true
//   },
//   {
//     resourceId: "grid3",
//     resourceName: "Node",
//     resourceLink: "link",
//     imageUrl: "node.png",
//     resourceCategory: "Back-End Technology",
//     createdOn: 2013,
//     createdBy: "",
//     verified: true,
//     active: true
//   },
//   {
//     resourceId: "grid4",
//     resourceName: "Mongo",
//     resourceLink: "link",
//     imageUrl: "mongo.png",
//     resourceCategory: "Back-End Technology",
//     createdOn: 2015,
//     createdBy: "",
//     verified: false,
//     active: true
//   },
//   {
//     resourceId: "grid5",
//     resourceName: "SQL",
//     resourceLink: "link",
//     imageUrl: "sql.png",
//     resourceCategory: "Back-End Technology",
//     createdOn: 2018,
//     createdBy: "",
//     verified: true,
//     active: true
//   },
//   {
//     resourceId: "grid6",
//     resourceName: "Spring",
//     resourceLink: "link",
//     imageUrl: "spring.png",
//     resourceCategory: "Back-End Technology",
//     createdOn: 2020,
//     createdBy: "",
//     verified: false,
//     active: true
//   }
// ];
