import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
   const courses= useLoaderData();
    return (
        <div>
            {
                courses.length
            }
        </div>
    );
};

export default Courses;