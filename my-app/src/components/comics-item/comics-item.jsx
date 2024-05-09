import React from 'react';
import './comics-item.css'
import { useNavigate } from "react-router-dom";

const ComicsItem = ({title, price, path, extension, id}) => {
    const navigate = useNavigate();
    return (
        <div className='comics' onClick={() => {
            navigate(`/comics/${id}`);
        }}>
            <img className="comics-image" src={path + '.' + extension} alt="" width="225" height="346" loading="lazy" />
            <h4 className="comics-name">{title}</h4>
            <h5 className="comics-price">{price ? price : `NOT AVAILABLE`}</h5>
        </div>
    );
};

export default ComicsItem;