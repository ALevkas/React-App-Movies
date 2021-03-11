import React from 'react';
import { Movies } from '../components/Movies/Movies';
import { Preloader } from '../components/Preloader/Preloader';
import { Search } from '../components/Search/Search';

class Main extends React.Component {

    state = {
        movies: [],
    }

    getMovie = (nameMovie) => {
        fetch(`http://www.omdbapi.com/?s=${nameMovie}&apikey=24b3a9f2`)
            .then(response => response.json())
            .then((data) => {
                if (data.totalResults > 0) {
                    this.setState({ movies: data.Search })
                } else {
                    this.setState({ movies: []})
                }
            });
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?s=Matrix&apikey=24b3a9f2')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }));
    }

    render() {

        return <main className="container content">
            <Search getMovie={this.getMovie} />
            {
                this.state.movies?.length ? (
                    <Movies movies={this.state.movies} />
                ) : <Preloader />

            }
        </main>
    }
}

export { Main }