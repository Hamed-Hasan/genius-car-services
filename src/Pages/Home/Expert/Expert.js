
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Expert = ({ expert }) => {
    const {names, description, img} = expert;
const navigate = useNavigate()
    const handleGo = () =>{ 
        navigate('/about')
    }
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <Card>
             <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-black'>{names}</Card.Title>
                    <Card.Text className='text-black'>
                    {description}
                    </Card.Text>
                    <Button  onClick={handleGo} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Expert;