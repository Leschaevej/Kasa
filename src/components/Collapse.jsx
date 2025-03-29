import React, { useState } from 'react';
import '../assets/Collapse.scss';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button className="collapseHeader" onClick={toggleCollapse}>
                <span className="collapseTitle">{title}</span>
                <div className={`collapseArrow ${isOpen ? 'open' : ''}`}>
                    <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                </div>
            </button>
            <div className={`collapseContent ${isOpen ? 'open' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Collapse;
