export const Movie = (props) => {
    return (
        <div id={props.imdbID} className="card movie">
            <div className="card-image movie-image">
                {
                    props.Poster === 'N/A' ?
                        <img className="activator film__img" src={`https://via.placeholder.com/300x400?text=${props.Title}`} />
                        :
                        <img className="activator film__img" src={props.Poster} />
                }
            </div>
            <div className="card-content movie-content">
                <span className="card-title activator green-text text-darken-1">{props.Title}</span>
                <p>{props.Year} <span className="right">{props.Type}</span> </p>
            </div>
        </div>
    )
}