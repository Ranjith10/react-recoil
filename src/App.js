import React, { useEffect } from 'react'
import { atom, useRecoilState} from 'recoil'

import './App.css'

const filmsAtom = atom({
    key: 'films',
    default: []
})

const App = () => {

    const [films, setFilms] = useRecoilState(filmsAtom)

    useEffect(() => {
        const getFilms = async () => {
            const url = `https://swapi.dev/api/films/`;
            // eslint-disable-next-line no-undef
            const resp = await fetch(url);
            const body = await resp.json();
            setFilms(body.results)
        }
        getFilms()
    }, [setFilms])

    return (
        <div className = 'App' >
            {films.map((film) => {
                return (
                    <>
                        <div>
                            Title: {film.title}
                        </div>
                        <div>
                            Director: {film.director}
                        </div>
                        <div>
                            Producer: {film.producer}
                        </div>
                    </>
            )})}   
        </div>
    )
}

export default App
