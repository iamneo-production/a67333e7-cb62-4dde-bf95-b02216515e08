import React, { useState } from "react";
import Axios from "axios";

export default function UpdateResource() {
  const [data,setData] = useState({
      resourceName: "",
      createdOn: "",
      imageUrl: "",
      resourceCategory: "",
      resourceId: "",
      resourceLink:"",
      videoUrl: "",
      pdfUrl: ""
  })

  function handle(e){
      const newdata = {...data};
      newdata[e.target.id] = e.target.value;
      setData(newdata);
      console.log("updated");
  }

  function submit(e){

      e.preventDefault();

      let url="http://localhost:8080/admin/resource/"+data.resourceId;
      Axios.put(url,{
          resourceName: data.resourceName,
          createdOn: data.createdOn,
          imageUrl: data.imageUrl,
          resourceCategory: data.resourceCategory,
          resourceId: data.resourceId,
          resourceLink: data.videoUrl,
          //videoUrl: data.videoUrl,
          //pdfUrl: data.pdfUrl
      }).then(res => {
          console.log("updated");
      }).catch((e) => console.log("Errrrr!!!"));
  }

  return (
    <form onSubmit={(e) => submit(e)}>
      <h2> Update Resource </h2>
      <div className="two">
        <input
          onChange = {(e)=> handle(e)}
          value={data.resourceName}
          type="text"
          className="first"
          placeholder="Resource Name"
          id="resourceName"
          name="resourceName"
        />
        <input
          onChange = {(e)=> handle(e)}
          value={data.createdOn}
          type="text"
          className="second"
          placeholder="Created On"
          id="createdOn"
          name="createdOn"
        />
      </div>
      <input
        onChange = {(e)=> handle(e)}
        value={data.imageUrl}
        type="text"
        placeholder="Image url"
        id="imageUrl"
        name="imageUrl"
      />
      <div className="two">
        <input
          onChange = {(e)=> handle(e)}
          value={data.resourceCategory}
          type="text"
          className="first"
          placeholder="Technology"
          id="resourceCategory"
          name="resourceCategory"
        />
        <input 
          onChange = {(e)=> handle(e)}
          value={data.resourceId}
          type="text" 
          className="second" 
          placeholder="id" 
          id="resourceId" 
          name="resourceId" 
        />
      </div>
      <input
        onChange = {(e)=> handle(e)}
        value={data.videoUrl}
        type="text"
        placeholder="Video url"
        id="videoUrl"
        name="videoUrl"
      />
      <input 
        onChange = {(e)=> handle(e)}
        value={data.pdfUrl}
        type="text"
        placeholder="Pdf url" 
        id="pdfUrl" 
        name="pdfUrl" 
      />

      <input
        type="submit"
        value="Update"
        id="updateResource"
        name="updateResource"
      />
    </form>
  );
}