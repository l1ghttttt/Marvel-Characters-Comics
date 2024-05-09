import React from 'react';
import AppCharacters from "../app-characters/app-characters";
import AppRandom from "../app-random/app-random";

const MainPage = () => {
    return (
        <>
            <AppRandom/>
            <AppCharacters/>
        </>
    );
};

export default MainPage;