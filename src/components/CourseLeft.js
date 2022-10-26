import React from 'react';
import { Link } from 'react-router-dom';

const CourseLeft = (props) => {
    const {id, name}=props.course;
    
    return (
        <div>
            {<Link to={`/courses/${id}`}>{name}</Link>}
        </div>
    );
};

export default CourseLeft;