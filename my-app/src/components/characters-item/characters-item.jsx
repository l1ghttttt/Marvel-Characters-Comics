import './characters-item.css'

const CharactersItem = ({character, id, setCharacterAbout}) => {
    return (
        <div className='CharactersItem-item' onClick={() => {setCharacterAbout(id)}} >
            <img src= {character.thumbnail.path +'.'+ character.thumbnail.extension} alt="" />
            <h3>{character.name}</h3>
        </div>
    )
}

export default CharactersItem;