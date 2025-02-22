import React from "react";
import { useParams } from "react-router-dom";
useParams;
function Postdetails() {
  const { postid } = useParams();
  return <div>Postdetails:{postid}</div>;
}

export default Postdetails;
