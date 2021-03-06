import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const element = <FontAwesomeIcon icon={faHome} />
    return (
        <section>
            <div className="mt-4 about-us p-4">
           <h5>Best Education Center</h5>
           <p>Home  | About | Services | Contact</p>
           <p>copyright@2021 | WEBDEV EDUCATION</p>
            <h3>{element}</h3>
        </div>
        </section>
    );
};

export default Footer;