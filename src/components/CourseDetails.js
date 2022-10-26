import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course=useLoaderData()
   const {name, image, description, price}=course
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <h2>Course Title: {name}</h2>
                <button>Download PDF</button>
            </div>
            <img height={200} className='img-sm ' src={image} alt="this is pic" />
            <h3>Course Description: {description}</h3>
            <p>Course Price: {price}</p>
            <button>Get Premium Access</button>
        </div>
    );
};

export default CourseDetails;