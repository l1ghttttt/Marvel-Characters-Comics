import React, {useEffect, useState} from 'react';
import './comics-detail.css';
import {useNavigate, useParams} from "react-router-dom";
import MarvelService from "../../services/MarvelService";
import ComicsHeader from "../comics-header/comics-header";

const ComicsDetail = () => {
    const marvelService = new MarvelService();
    const [comics, setComics] = useState(null);
    const {comicsId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        marvelService.getComicsDetails(comicsId).then(res => {
            setComics(res)
        })
    },[])


    return (
        <>
            <ComicsHeader/>
            <main className='comicss'>
                {comics ? <View comics={comics.data.results[0]} navigate={navigate}/> : <Loading/>}
            </main>
        </>
    );
};

const Loading = () => {
    return (
        <div className='comicDitail-loading'>
            <div className="cssload-container2">
                <div className="cssload-speeding-wheel2"></div>
            </div>
        </div>
    )
}

const View = ({comics, navigate}) => {
    return (
        <div className='comicDitail'>
            <img className="comicsImage" src={comics.thumbnail.path + '.' + comics.thumbnail.extension} alt="comics"/>
            <div className='comicInfo'>
                <div className='comicText'>
                    <h2>📖 {comics.title}</h2>
                    <h3>📌 {comics.description ? comics.description : 'No description('}</h3>
                    <h3>👁‍🗨 {comics.pageCount} pages</h3>
                    <h3>🌍 Language: en-us</h3>
                    <h2>{comics.prices[0].price ? '❌ Not Available' : comics.prices[0].price + '$'}</h2>
                </div>
                <button className="red-button" onClick={() => {
                    navigate(-1)
                }}>Back
                </button>
            </div>
        </div>
    )
}

export default ComicsDetail;