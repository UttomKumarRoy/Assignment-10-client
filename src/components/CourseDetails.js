import React, {useRef} from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

const CourseDetails = () => {
    const ref=useRef();
    const course=useLoaderData();
   const {id, name, image, description, price}=course
    return (
        <div>
            <div className='text-center'>
                <ReactToPrint  trigger={() => {
                return <button className='bg-success text-white p-2 rounded-3'>Download PDF</button>;
                    }} content={() => ref.current} />
            </div>
            
        <div ref={ref}>
            <h2>Course Title: {name}</h2>
            <img height={200} className='img-sm ' src={image} alt="this is pic" />
            <h3>Course Description: {description}</h3>
            <p>Course Price: {price}</p>
        </div>
        {
 <Link to={`/checkout/${id}`}><button className='bg-secondary text-white p-3 rounded-2'>Get Premium Access</button></Link>
        }
          
            
        </div>
    );
};

export default CourseDetails;