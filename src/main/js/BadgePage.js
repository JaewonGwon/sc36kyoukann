import React from "react";
import { MDBBadge, MDBContainer } from "mdbreact";

const BadgePage = ({ tags }) => {


return (
<MDBContainer>
  <MDBBadge tag="a" color="default">{tags[0]}</MDBBadge>
  <MDBBadge tag="a" color="primary">{tags[1]}</MDBBadge>
  <MDBBadge tag="a" color="success">{tags[2]}</MDBBadge>
  <MDBBadge tag="a" color="info">{tags[3]}</MDBBadge>
  <MDBBadge tag="a" color="warning">{tags[4]}</MDBBadge>
  <MDBBadge tag="a" color="danger">{tags[5]}</MDBBadge>
  <MDBBadge tag="a" color="light">{tags[6]}</MDBBadge>
</MDBContainer>
);
};

export default BadgePage;