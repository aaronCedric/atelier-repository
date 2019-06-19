import React from 'react'
import Materials from './Materials'
import '../style.css'
import materialData from './data'
import SortPic from './SortPic'
import SearchBar from './SearchBar'

class MaterialList extends React.Component {
    constructor() {
        super()
        this.state = {
            // save user input
            search: '',
            // save database in state for updating on search
            materialDB: materialData
        }

        this.updateSearch = this.updateSearch.bind(this)
        this.filterItems = this.filterItems.bind(this)

    }
    
    updateSearch(e) {
        this.setState({
            search: e.target.value
        })
    }

    filterItems(e) {
        let sortSearch = materialData.filter(item => {
            return item.category.indexOf(e.target.value) !== -1
        })

        this.setState({
            materialDB: sortSearch
        })

        // For resetting filter
        if (e.target.value === 'All') {
            this.setState({
                materialDB: materialData
            })
        }
    }

    render() {

        // To filter search input
        let filterSearch = this.state.materialDB.filter(item => {
            return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })

        return (
            <div className='gridThis'>
                <SearchBar sortingFunction={this.filterItems} updateBar={this.updateSearch} data={this.state} />
                <SortPic sortingFunction={this.filterItems} data={this.state} />
                <div className="material-container">
                    {/* filterSearch is the filtered database */}
                    {filterSearch.map(item => {
                        return <Materials key={item.id} mats={item} />
                    })}
                </div>
            </div>
        )
    }
}

export default MaterialList