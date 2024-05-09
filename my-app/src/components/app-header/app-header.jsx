import './app-header.css'
import { NavLink } from "react-router-dom";


const AppHeader = () => {
    return (
        <header className="App-header">
            <h1><NavLink to="/">Marvel information portal</NavLink></h1>
            <h2><NavLink to="/" end className={({isActive}) => isActive ? "active" : ''}>Characters</NavLink> / <NavLink to="/comics" className={({isActive}) => isActive ? "active" : ''}>Comics</NavLink></h2>
        </header>
    )
}
export default AppHeader