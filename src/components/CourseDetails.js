import React, {useRef} from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

const CourseDetails = () => {
    const ref=useRef();
    const course=useLoaderData();
   const {name, image, description, price}=course
    return (
        <div>
            <div className='text-center'>
            <ReactToPrint  trigger={() => {
            return <button className='bg-success text-white p-2 rounded-3'>Download PDF</button>;
          }}
          content={() => ref.current}
        />
            </div>
            
        <div ref={ref}>
            <div className='d-flex justify-content-between align-items-center'>
                <h2>Course Title: {name}</h2>
                
                
            </div>
            <img height={200} className='img-sm ' src={image} alt="this is pic" />
            <h3>Course Description: {description}</h3>
            <p>Course Price: {price}</p>
        </div>
           
            <button>Get Premium Access</button>
        </div>
    );
};

export default CourseDetails;