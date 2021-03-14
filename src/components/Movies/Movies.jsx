import { Movie } from './Movie';
import { NotFound } from '../Shared/NotFound';

export const Movies = (props) => {
    return (
        <div className='movies'>
            {props.movies.length ? (
                props.movies.map((movie) => {
                    return <Movie key={movie.imdbID} {...movie} />;
                })
            ) : (
                <NotFound
                    key={props.imdbID}
                    errorMessage={props.errorMessage}
                />
            )}
        </div>
    );
};
