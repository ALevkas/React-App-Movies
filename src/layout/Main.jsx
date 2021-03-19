import React, { useState, useEffect } from 'react';
import { Movies } from '../components/Movies/Movies';
import { Preloader } from '../components/Preloader/Preloader';
import { Search } from '../components/Search/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const getMovie = (nameMovie = 'Wars', filter = '') => {
        nameMovie = nameMovie.trim() ? nameMovie.trim() : 'Wars';
        setLoading(true);
        fetch(
            `https://www.omdbapi.com/?s=${nameMovie}&type=${filter}&apikey=${API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.totalResults > 0) {
                    setMovies(data.Search);
                    setLoading(false);
                } else {
                    setMovies([]);
                    setLoading(false);
                    setErrorMessage(data.Error);
                }
            });
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <main className='container content'>
            <Search getMovie={getMovie} />
            {loading ? (
                <Preloader />
            ) : (
                <Movies movies={movies} errorMessage={errorMessage} />
            )}
        </main>
    );
};

export { Main };
