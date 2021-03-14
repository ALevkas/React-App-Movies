import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        searchValue: '',
        filterValue: '',
    };

    changeSearchValue = (event) => {
        const movieName = event.target.value;
        this.setState({ searchValue: movieName });
    };

    findMovie = (event) => {
        if (event.keyCode === 13) {
            this.props.getMovie(this.state.searchValue, this.state.filterValue);
        }
    };

    filterChange = (event) => {
        this.setState(
            () => ({ filterValue: event.target.dataset.type }),
            () => {
                this.props.getMovie(
                    this.state.searchValue,
                    this.state.filterValue
                );
            }
        );
    };

    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        placeholder='Input name movie'
                        type='text'
                        className='validate'
                        value={this.state.searchValue}
                        onChange={this.changeSearchValue}
                        onKeyDown={this.findMovie}
                    />
                </div>
                <div className='filters'>
                    <p>
                        <label>
                            <input
                                className='with-gap'
                                name='filterValue'
                                type='radio'
                                data-type=''
                                onChange={this.filterChange}
                                checked={this.state.filterValue === ''}
                            />
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                className='with-gap'
                                name='filterValue'
                                type='radio'
                                data-type='movie'
                                onChange={this.filterChange}
                                checked={this.state.filterValue === 'movie'}
                            />
                            <span>Movies only</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                className='with-gap'
                                name='filterValue'
                                type='radio'
                                data-type='series'
                                onChange={this.filterChange}
                                checked={this.state.filterValue === 'series'}
                            />
                            <span>Series only</span>
                        </label>
                    </p>
                </div>
            </div>
        );
    }
}

export { Search };
