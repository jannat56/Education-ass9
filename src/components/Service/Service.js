import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';

const Service = () => {
    const [courses, setCourse] = useState([]);
    useEffect(()=> {
        fetch('./course.JSON')
        .then(res=> res.json())
        .then(data =>setCourse(data))
      }, [])
    return (
        <div>
            <div className="my-5">
                 <h1>Service page</h1>
                 <h3 className="color">service: {courses.length}</h3>
        </div>
        <div className="containe-fluid mb-5">
            <div className="row">
                <div className="col-12 mx-auto">
                    <div className="row gy-4">
                       {
                           courses.map(course=><Card course={course}></Card>)
                       }
                    </div>  
            </div>
         </div>
        </div>
        </div>
    );
};

export default Service;