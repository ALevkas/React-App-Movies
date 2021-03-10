import React from 'react';
import { Movies } from '../components/Movies/Movies';

class Main extends React.Component {

    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?s=Matrix&apikey=24b3a9f2')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }));
    }

    render() {

        return <main className="container content">
            {
                this.state.movies.length ? (
                    <Movies movies={this.state.movies} />
                ) : <h5>Loading...</h5>

            }
        </main>
    }
}

export { Main }