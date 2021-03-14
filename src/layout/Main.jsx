import React from 'react';
import { Movies } from '../components/Movies/Movies';
import { Preloader } from '../components/Preloader/Preloader';
import { Search } from '../components/Search/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
        errorMessage: '',
    };

    getMovie = (nameMovie = 'Matrix', filter = '') => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?s=${nameMovie}&type=${filter}&apikey=${API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.totalResults > 0) {
                    this.setState({ movies: data.Search, loading: false });
                } else {
                    this.setState({
                        movies: [],
                        loading: false,
                        errorMessage: data.Error,
                    });
                }
            });
    };

    componentDidMount() {
        this.getMovie();
    }

    render() {
        return (
            <main className='container content'>
                <Search getMovie={this.getMovie} />
                {this.state.loading ? (
                    <Preloader />
                ) : (
                    <Movies
                        movies={this.state.movies}
                        errorMessage={this.state.errorMessage}
                    />
                )}
            </main>
        );
    }
}

export { Main };
