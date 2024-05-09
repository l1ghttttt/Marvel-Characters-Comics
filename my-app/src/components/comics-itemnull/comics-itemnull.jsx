import React from 'react';
import './comics-itemnull.css'

const ComicsItemNull = () => {
    return (
        <div className='comicsnull'>
            <div className="placeholderImageComics">
                <div className="animated-backgroundImageComics"></div>
            </div>
            <h4 className="comicsnull-name"></h4>
            <div className="placeholderTextComics">
                <div className="animated-backgroundTextComics"></div>
            </div>
        </div>
    );
};

export default ComicsItemNull;