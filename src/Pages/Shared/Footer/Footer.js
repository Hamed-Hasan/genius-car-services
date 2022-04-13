import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <h2>copyright © {year}</h2>
        </div>
    );
};

export default Footer;