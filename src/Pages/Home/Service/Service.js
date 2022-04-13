import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useDarkMode from '../../../Hooks/useDarkMode';
import './Service.css'
const Service = ({ service }) => {
  const {darkMode} = useDarkMode()
    const {id,name, description, img} = service;
const navigate = useNavigate()
const handleDetails = () => {
  navigate(`/serviceDetail/${id}`)
}

    return (
        <div className='col-12 col-md-6 col-lg-4'>
           
 <CardGroup>
  <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title className='text-black'>{name}</Card.Title>
      <Card.Text className='text-black'>
       {description}
      </Card.Text>
    </Card.Body>
    <Card.Footer className='text-black'>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    <Button  onClick={handleDetails} variant="primary">ServicesDetails</Button>
  </Card>
</CardGroup>


        </div>
    );
};

export default Service;