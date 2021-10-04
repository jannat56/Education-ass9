import React from 'react';

const Contact = () => {
    return (
        <div className="w-50 contact">
           <div className="mb-3">
               <h1>Contact Us</h1>
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button className="btn btn-warning mt-4">Submit</button>
</div>
        </div>
        
    );
};

export default Contact;