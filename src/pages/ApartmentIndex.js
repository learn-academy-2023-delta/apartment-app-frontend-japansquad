import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button, CardImg } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const ApartmentIndex = ({ apartments }) => {
  return (
    <main className="apartment-index-cards">
      {apartments?.map((apartment, index) => (
        <Card
          style={{
            width: '18rem'
          }}
          key={index}
        >
          <CardImg
            alt=""
            src={apartment?.image}
          />
          <CardBody>
            <CardTitle tag="h5">
              ${apartment?.price}/month
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {apartment?.street},
              {apartment?.city},
              {apartment?.prefecture}
            </CardSubtitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {apartment?.bedrooms} Bedroom,
              {apartment?.bathrooms} Bath
            </CardSubtitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Pets: {apartment?.pets}
            </CardSubtitle>
            <CardText>
              Amenities: {apartment?.amenities}
            </CardText>
            <NavLink to={`/apartments/${apartment?.id}`}>
              <Button>
                More Info
              </Button>
            </NavLink>
          </CardBody>
        </Card>
      ))}
    </main>
  );
};

export default ApartmentIndex;
