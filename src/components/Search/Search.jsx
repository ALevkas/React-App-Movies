import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        searchValue: ''
    }

    changeSearchValue = (event) => {
        const movieName = event.target.value;
        this.setState({ searchValue: movieName });
    }

    findMovie = (event) => {
        if (event.keyCode === 13) {
            this.props.getMovie(this.state.searchValue);
        }
    }

    render() {
        return <div className="row">
            <div className="input-field">
                <input
                    placeholder="Input name movie"
                    type="text"
                    className="validate"
                    value={this.state.searchValue}
                    onChange={this.changeSearchValue}
                    onKeyDown={this.findMovie}
                />
            </div>
        </div >
    }
}

export { Search }