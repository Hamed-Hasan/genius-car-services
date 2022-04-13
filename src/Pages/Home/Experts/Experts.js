import React from 'react';
import expect1 from '../../../images/experts/expert-1.jpg'
import expect2 from '../../../images/experts/expert-2.jpg'
import expect3 from '../../../images/experts/expert-3.jpg'
import expect4 from '../../../images/experts/expert-4.jpg'
import expect5 from '../../../images/experts/expert-5.jpg'
import expect6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';
const data = [
    {id: 1, name: 'car', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, voluptatum!', img: expect1},
    {id: 2, names: 'car usa', description: ' ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, voluptatum!', img: expect2},
    {id: 3, names: 'car uk', description: ' dolor sit amet consectetur adipisicing elit. Eveniet, voluptatum!', img: expect3},
    {id: 4, names: 'car indonesia', description: ' sit amet consectetur adipisicing elit. Eveniet, voluptatum!', img: expect4},
    {id: 5, names: 'car ind', description: ' amet consectetur adipisicing elit. Eveniet, voluptatum!', img: expect5},
    {id: 6, names: 'car xoo', description: 'consectetur adipisicing elit. Eveniet, voluptatum!', img: expect6}
];
const Experts = () => {
    return (
        <div id="experts" className='container pt-4'>
            <h2 className='text-center text-primary my-5'>That Is Expert product</h2>
            <div className="row g-4">
                {
                  data.map(expert => <Expert 
                    key={expert.id}
                    expert={expert}
                    />)
                }
            </div>
        </div>
    );
};

export default Experts;