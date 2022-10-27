import React from 'react';
import { Link } from 'react-router-dom';

const CourseRight = (props) => {
    const {id, name, image, price}=props.course;
    return (
        <div style={{border:"2px solid green"}} className='col-sm-12 col-md-6 col-lg-4 g-3'>
            <h4>Course Title: {name}</h4>
            <img height={200} className='img-fluid' src={image} alt="This is course" />
            <p>Price: {price}</p>
            <div>{<Link to={`/courses/${id}`}><span className='rounded-3 p-3'>See Details</span> </Link>}</div>
            
        </div>
    );
};

export default CourseRight;