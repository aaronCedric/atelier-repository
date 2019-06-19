import React from 'react'

const SearchBar = (props) => {
    return (
        <div className='searchBar'>
            <input
            type='text'
            name='userInput'
            placeholder='Search'
            className="searchInput"
            value={props.data.search}
            onChange={props.updateBar}
            />
            <select
                onChange={props.sortingFunction}
                name="filterMats"
            >
                <option value="All">All</option>
                <option value="Plants">Plants</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Medicinal">Medicinal</option>
                <option value="Water">Water</option>
                <option value="Vapor">Vapor</option>
                <option value="Elixir">Elixir</option>
                <option value="Ore">Ore</option>
                <option value="Animal Products">Animal Products</option>
                <option value="Threads">Threads</option>
                <option value="Gunpowder">Gunpowder</option>
                <option value="Fuel">Fuel</option>
                <option value="Clay">Clay</option>
                <option value="Meat">Meat</option>
                <option value="Poison">Poison</option>
                <option value="Lumber">Lumber</option>
                <option value="Spice">Spice</option>
                <option value="Magic Tool">Magic Tool</option>
                <option value="Bug">Bug</option>
                <option value="Mushroom">Mushroom</option>
                <option value="Dragon">Dragon</option>
            </select>
        </div>
    )
}

export default SearchBar