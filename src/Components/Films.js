import React, {useEffect} from 'react'
import { useRecoilState} from 'recoil'

import {filmsAtom} from '../State/Atoms'

const Films = () => {
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
        films.map((film) => {
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
        )})   
    )
}

export default Films
