import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    console.log(props.course)
    const {img,Course, Day, task, Amount} = props.course;
    
    return (
        
            <div className="">
                    <div class="card h-100" >
               <div className="card-img">
               <img src={img} className="card-img-top" alt=""/>
               </div>
                <div className="card-body">
                    <h3 className="color">Couse Title: {Course}</h3>
                    <h5 className="color">Days: {Day}</h5>
                    <h5 className="color">Task: {task}</h5>
                    <h5 className="color">Amount: {Amount}</h5>
                    
                    <NavLink to="" class="btn btn-info text-white">Continue Course</NavLink>
                </div>
                </div>
                </div>
               
            
    );
};

export default Card;