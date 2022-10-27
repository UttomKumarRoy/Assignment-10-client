import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CheckOut = () => {
    //const {name} =props.name
    const course=useLoaderData()
    const {name}=course;
    return (
        <div>
            Congratulations! You are in the <span className='text-primary'>{name}</span>  course.
        </div>
    );
};

export default CheckOut;