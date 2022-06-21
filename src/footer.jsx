import React from 'react';
import './index.css';

const Footer = () => {
    return ( 
        <div className="footer">
                <div className="footer-content">
                    <p>Designed and Built by <a href="https://www.akintunde.dev/">akintunde.dev</a></p>
                    <p>Data retrieved via RESTful API from <a href="https://restcountries.com/">restcountries.com</a></p>
                    <p>Illustration by <a href="https://storyset.com/travel">Storyset</a></p>
                </div>
        </div>
     );
}
 
export default Footer;