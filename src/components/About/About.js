import React from 'react';
import { NavLink } from 'react-router-dom';
import first from '/JhankerProject/education-website/src/images/first.jpg'
import "./About.css"


const About = () => {
    return (
        <div>
            <section className="">
      <div>
      <h2 className="about-us mt-4 mb-4 p-4">About us</h2>
        <h5 className="mt-4 mb-4"><span className="orange-color">Web DEV</span> World!</h5>
        <p>
        A complete guideline of website designing through 12 course tutorial, quiz, notes and many more.
        </p>
        <NavLink className="btn btn-warning mt-4 mb-4" target="_blank" to="">explore now</NavLink>
      </div>
      <div>
        <img src={first} alt="banner pic" />
      </div>
    </section>
        </div>
    );
};

export default About;