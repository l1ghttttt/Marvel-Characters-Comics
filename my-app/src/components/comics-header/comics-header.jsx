import React from 'react';
import './comics-header.css'

const ComicsHeader = () => {
    return (
        <header className="comics-header">
            <div className="comics-header_leftside">
                <img className="comics-header_icon" src="/Avengers.svg" loading="lazy" alt=""/>
                <h4 className="comics-header_text">New comics every week!<br/>Stay tuned!</h4>
            </div>
            <div className="comics-header_rightside">
            <img src="/Avengerslogo.svg" loading="lazy" width="133" height="100" alt=""/>
            </div>
        </header>
    );
};

export default ComicsHeader;