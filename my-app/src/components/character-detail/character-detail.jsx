import './character-detail.css'
import {Link, NavLink} from "react-router-dom";

const CharacterDetail = ({characterAbout}) => {

    if (!characterAbout) {
        return (
            <div className="CharacterDetail">
                <h4>Please select hero for more info</h4>
            </div>
        )
    }
    const comics = characterAbout.comics.items.map((item, id ) => {
        return (
            <li key={id}><NavLink to={`/comics/${item.resourceURI.split('/')[6]}`}>{item.name}</NavLink></li>
        )
    })
    return (
        <div className="CharacterDetail">
            <div className="CharacterDetail-cont">
                <img
                    className="CharacterDetail-image"
                    src={characterAbout.thumbnail.path + '.' + characterAbout.thumbnail.extension}
                    alt="character image"/>
                <div className="CharacterDetail-info">
                    <h3 className="CharacterDetail-name">{characterAbout.name}</h3>
                    <div className="CharacterDetail-buttons">
                        <a href="https://www.marvel.com/" target="_blank"><button className="red-button">HOMEPAGE</button></a>
                        <a href={characterAbout.urls[0].url} className="linkContainer" target="_blank"><button className="gray-button-detail">WIKI</button></a>
                </div>
            </div>
            </div>
            <h4 className="CharacterDetail-description">{characterAbout.description}</h4>
            <h3 className="CharacterDetail-comics">COMICS:</h3>
                <ul>
                    {comics.length === 0 ? <h3>There no comics!</h3> : comics}
                </ul>
        </div>
    )
}
export default CharacterDetail