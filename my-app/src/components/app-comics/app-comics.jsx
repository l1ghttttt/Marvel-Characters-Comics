import React, {useEffect, useState} from 'react';
import ComicsItem from "../comics-item/comics-item";
import MarvelService from "../../services/MarvelService";
import ComicsItemNull from "../comics-itemnull/comics-itemnull";
import './app-comics.css'
import '../../mixins.scss'

const marvelService = new MarvelService();

const AppComics = () => {
    const [comics, setComics] = useState([]);
    const [loadingTimes, setLoadingTimes] = useState()
    const [loadedToggle, setLoadedToggle] = useState()
    const genComics = () => {
        marvelService.getAllComics().then(res => {
            setComics([...comics, ...res.data.results]);
        })
    }
    useEffect(() =>{
        genComics()
        setLoadingTimes(8)
        setLoadedToggle(false)
    },[])
    const comicsList = comics.map((item, id) => {
        return(<ComicsItem
            title={item.title}
            price={item.prices[0].price}
            path={item.thumbnail.path}
            extension={item.thumbnail.extension}
            id={item.id}
            key={id} />)
    })

    return (
        <main className="AppComics">
            {comics.length === loadingTimes ? comicsList : <ViewComics loadingTimes={loadingTimes} comicsList={comicsList}/>}
            {comics.length === loadingTimes && loadedToggle === false ? setLoadedToggle(true) : null}
            <button
                className='red-button'
                onClick={() => {
                    if (loadedToggle) {
                        setLoadingTimes(loadingTimes + 8);
                        genComics();
                        setLoadedToggle(false);
                    }
                }}
            >LOAD MORE
            </button>
        </main>
    );
}

const ViewComics = ({loadingTimes, comicsList}) => {
    const ar = [];
    for (let i = 0; i < loadingTimes-comicsList.length; i++) {
        ar.push(
            <ComicsItemNull key={i}/>
        )
    }
    return (
        <>
            {comicsList}
            {ar}
        </>
    )
}


export default AppComics;