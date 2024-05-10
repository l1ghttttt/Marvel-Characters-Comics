import { useState, useEffect } from "react";
import './app-characters.css'
import CharactersItem from "../characters-item/characters-item";
import CharacterDetail from "../character-detail/character-detail";
import MarvelService from "../../services/MarvelService";
import CharactersItemnull from "../characters-itemnull/characters-itemnull";

const marvelService = new MarvelService();
const AppCharacters = () => {

    const [characters, setCharacters] = useState([]);
    const [characterAbout, setCharacterAbout] = useState(null);
    const [loadingTimes, setLoadingTimes] = useState()
    const [loadedToggle, setLoadedToggle] = useState()

    const genCharacters = () => {
        marvelService.getAllCharacters().then(res => {
            setCharacters([...characters, ...res.data.results])
        })
    }
    useEffect(() => {
        genCharacters()
        setLoadingTimes(9)
        setLoadedToggle(false)
    }, [])
    const characterList = characters.map((character, id) => {
        return (
            <CharactersItem
                character = {character}
                id = {id}
                key = {id}
                setCharacterAbout = {(id) => setCharacterAbout(characters[id])} />
        )
    })
    return (
        <main>
            <div className='AppCharacters'>
                <div className='AppCharacters-list'>
                    {characters.length === loadingTimes ? characterList : <View loadingTimes={loadingTimes} characterList={characterList}/>}
                    {characters.length === loadingTimes && loadedToggle === false ? setLoadedToggle(true) : null}
                    <button
                        className='red-button'
                        onClick={() => {
                            if (loadedToggle) {
                                setLoadingTimes(loadingTimes + 9);
                                genCharacters();
                                setLoadedToggle(false);
                            }
                        }}
                    >LOAD MORE
                    </button>
                </div>
                <CharacterDetail characterAbout={characterAbout}/>
            </div>
        </main>
    )
}
const View = ({loadingTimes, characterList}) => {
    const ar = [];
    for (let i = 0; i < loadingTimes-characterList.length; i++) {
        ar.push(
            <CharactersItemnull key={i}/>
        )
    }
    return (
        <>
            {characterList}
            {ar}
        </>
    )

}
export default AppCharacters;