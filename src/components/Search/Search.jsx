import React, { useState } from 'react';

const Search = (props) => {
    const { getMovie = Function.prototype } = props;
    const [searchValue, setSearchValue] = useState('');
    const [filterType, setFilterType] = useState('');

    const changeSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    const findMovie = (event) => {
        if (event.keyCode === 13) {
            getMovie(searchValue, filterType);
        }
    };

    const filterChange = (event) => {
        setFilterType(event.target.dataset.type);
        getMovie(searchValue, event.target.dataset.type);
    };

    return (
        <div className='row'>
            <div className='input-field search'>
                <input
                    placeholder='Input name movie'
                    type='text'
                    className='validate'
                    value={searchValue}
                    onChange={changeSearchValue}
                    onKeyDown={findMovie}
                />
                <button
                    class='waves-effect waves-light btn'
                    onClick={() => {
                        getMovie(searchValue, filterType);
                    }}
                >
                    Search
                </button>
            </div>
            <div className='filters'>
                <p>
                    <label>
                        <input
                            className='with-gap'
                            name='filterValue'
                            type='radio'
                            data-type=''
                            onChange={filterChange}
                            checked={filterType === ''}
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
                            onChange={filterChange}
                            checked={filterType === 'movie'}
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
                            onChange={filterChange}
                            checked={filterType === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </p>
            </div>
        </div>
    );
};

export { Search };
