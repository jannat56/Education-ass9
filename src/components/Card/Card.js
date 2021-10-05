import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    const {img,Course, Day, task, Amount} = props.course;
    
    return (
        
            <div className="">
                    <div className="card h-100" >
               <div className="card-img w-100 h-100">
               <img src={img} className="card-img-top" alt=""/>
               </div>
                <div className="card-body bg-dark">
                    <h5 className="color">Course Title: {Course}</h5>
                    <h6 className="color">Days: {Day}</h6>
                    <h6 className="color">Task: {task}</h6>
                    <h5 className="color">Amount: ${Amount}</h5>
                    
                    <NavLink to="/contact" className="btn btn-info text-white">Continue Course</NavLink>
                </div>
                </div>
                </div>
               
            
    );
};

export default Card;