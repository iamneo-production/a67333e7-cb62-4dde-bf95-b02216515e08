import React from "react";

export default function UpdateResources() {
  return (
    <form>
      <h2> Update Resource </h2>
      <div className="two">
        <input
          type="text"
          className="first"
          placeholder="Resource Name"
          id="resourceName"
          name="resourceName"
        />
        <input
          type="text"
          className="second"
          placeholder="Created On"
          id="createdOn"
          name="createdOn"
        />
      </div>
      <input
        type="text"
        placeholder="Image url"
        id="imageUrl"
        name="imageUrl"
      />
      <div className="two">
        <input
          type="text"
          className="first"
          placeholder="Technology"
          id="resourceCategory"
          name="resourceCategory"
        />
        <input type="text" className="second" placeholder="30" id="" name="" />
      </div>
      <input
        type="text"
        placeholder="Video url"
        id="videoUrl"
        name="videoUrl"
      />
      <input type="text" placeholder="Pdf url" id="pdfUrl" name="pdfUrl" />

      <input
        type="submit"
        value="Update"
        id="updateResource"
        name="updateResource"
      />
    </form>
  );
}
