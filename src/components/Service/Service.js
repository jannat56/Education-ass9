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
        <div className="container">
            <div className="my-5">
                 <h1>Service page</h1>
                 <h3 className="color">service: {courses.length}</h3>
        </div>
        <div className="container-fluid mb-5 p-4 m-4 ">
        
                    <div className="row gy-4 row-cols-lg-3">
                        
                       {

                           courses.map(course=><Card course={course}></Card>)
                       }
                    </div>  
            </div>
         </div>
    );
};

export default Service;