import { Movie } from './Movie'

export const Movies = (props) => {
    console.log('movies', props.movies)
    return (
        <div className="movies">
            {
                props.movies.map(movie => {
                    return <Movie key={movie.imdbID} {...movie} />
                })
            }
        </div>
    )
}