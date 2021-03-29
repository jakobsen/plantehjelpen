import React from "react";
// import styled from "styled-components";
import {Link, useParams} from "react-router-dom";

function PlantInfo() {
  const { plantName } = useParams<{ plantName? : string }>();
  return <><h1>Du søkte på planten {plantName}</h1><Link to="/">Home</Link></>
}

export default PlantInfo;