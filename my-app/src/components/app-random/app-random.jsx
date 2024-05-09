import {useState, useEffect} from "react";
import MarvelServices from '../../services/MarvelService'
import './app-random.css'
const AppRandom = () => {
    const marvelServices = new MarvelServices();
    const [character, setCharacter] = useState()
    const getCharacter = () => {
        setCharacter(null)
        marvelServices.getCharacter().then(res => {
            setCharacter(res.data.results[0])
        })
    }
    useEffect(() => {
        getCharacter();
    }, [])
    return (
        <div className="AppRandom">
            {character ? <View character={character}/> : <Loading/>}
            <div className="AppRandom-try">
                <div className="AppRandom-description"><h4 className="AppRandom-phraze">Random character for today!
                    Do you want to get to know him better?</h4>
                </div>
                <div className="AppRandom-chose">
                    <h3 className="AppRandom-text">Or choose another one</h3>
                    <button
                        onClick={getCharacter}
                        className="red-button">TRY IT
                    </button>
                </div>
                <img className="AppRandom-decoration" src="/Decoration.png" alt="Decoration"/>
            </div>
        </div>
    )
}
const View = ({character}) => {
    return(
        <div className="AppRandom-cont">
            <div className="AppRandom-imgcont">
                <img className="AppRandom-image"
                     src={character.thumbnail.path +'.'+ character.thumbnail.extension}
                     alt="character"
                     loading="lazy"/>
            </div>
            <div className="AppRandom-info">
                <h3 className="AppRandom-info-name">{character.name}</h3>
                <h4 className="AppRandom-info-description">{character.description ? character.description : 'No description'}</h4>
                <div className="AppRandom-info-buttons">
                    <a href="https://www.marvel.com/" target="_blank"><button className="red-button">HOMEPAGE</button></a>
                    <a href={character.urls[0].url} target="_blank"><button className="gray-button">WIKI</button></a>
                </div>
            </div>
        </div>
    )
}
const Loading = () => {
    return(
        <div className="AppRandom-cont_load">
            <div className="cssload-container">
                <div className="cssload-speeding-wheel"></div>
            </div>
        </div>
    )
}
export default AppRandom