import React, { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button className="header" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <div className={`arrow ${isOpen ? 'open' : ''}`}>
                    <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                </div>
            </button>
            <div className={`content ${isOpen ? 'open' : ''}`}>
                {content}
            </div>
        </div>
    );
}

export default Collapse;
