import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, CardText } from 'reactstrap';
import ApartmentProtectedIndex from './ApartmentProtectedIndex';
import { Route } from 'react-router-dom';

const ApartmentShow = ({apartments, currentUser}) => {
  
  let { id } = useParams()
  const currentApartment = apartments?.find(apartment => apartment.id === +id)
  return (
    <>
      <div>
        {currentApartment &&
            <Card
            style={{
              width: '18rem'
            }}
          >
            <CardImg
              alt=""
              src={currentApartment?.image}
            />
            <CardBody>
              <CardTitle tag="h5">
                ${currentApartment?.price}/month
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6">
                {currentApartment?.street},
                {currentApartment?.city},
                {currentApartment?.prefecture}
              </CardSubtitle>
              <CardSubtitle
              className="mb-2 text-muted"
              tag="h6">
                {currentApartment?.bedrooms} Bedroom,
                {currentApartment?.bathrooms} Bath
              </CardSubtitle>
              <CardSubtitle
              className="mb-2 text-muted"
              tag="h6">
                Pets: {currentApartment?.pets}
              </CardSubtitle>
              <CardText>
                Amenities: {currentApartment?.amenities}
              </CardText>
                    {!currentUser && (
                      <>
                      <NavLink to="/apartments">
                        <Button>
                           Back To List
                       </Button>
              </NavLink>
                      </>
                    )}
              <NavLink to='/myapartments'>
                  <Button>
                  {currentUser && (
                  <Route path ="/myapartments" element={<ApartmentProtectedIndex  currentUser={currentUser} apartments={apartments}/>}/>
                   )}
                    My List
                  </Button>
              </NavLink>
            </CardBody>
          </Card>
        }
      </div>
    </>
  )
}

export default ApartmentShow