import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseLeft from './CourseLeft';
import CourseRight from './CourseRight';

const Courses = () => {
   const courses= useLoaderData();
//   const [id, name, price, image, description]=courses;
    return (
        <div className='row'>
            <div className='col-sm-12 col-md-3'>
                <h2 className='bg-primary text-white rounded-2 p-2'>Courses in Menu</h2>
                {
                courses.map(course => <CourseLeft key={course.id} course={course} />)
            },
            </div>
            <div className='col-sm-12 col-md-9'>
                <div className='row'>
                    <h2 className='bg-primary text-white rounded-2 p-2'>Courses in Cards</h2>
                {
                courses.map(course => <CourseRight key={course.id} course={course} />)
                }
                </div>
            
            </div>
        </div>
    );
};

export default Courses;