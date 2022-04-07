import React, { useState } from "react";
import Card from "./Card";
import UpdateResource from "./UpdateResource";
import { Button } from "react-bootstrap";

export default function AdminResource() {
  const [name, setName] = useState(undefined);
  const [search, setSearch] = useState("");
  function handleSearch(event) {
    setName(search);
  }
  return (
    <div id="adminResource">
      <div className="search">
        <input
          type="text"
          placeholder="Type here to search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="searchBox"
        />
        <Button variant="primary" id="searchbtn" onClick={handleSearch}>

          Search
        </Button>
      </div>
      <div className="main--container">
        <div className="courses col-md-8 col-xs-12">
          <Card name={name} />
        </div>
        <div className="col-md-4 col-xs-12">
          <UpdateResource />
        </div>
      </div>
    </div>
  );
}
