import React from 'react'

const SortPic = (props) => {
    return (
        <div className="sortPic">
                
            <button value="Plants" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/plant.png" alt="Plants"/>
            </button>
            <button value="Vegetables" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/vegetable.png" alt="Vegetable"/>
            </button>
            <button value="Medicinal" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/medicinal.png" alt="Medicinal"/>
            </button>
            <button value="Vapor" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/vapor.png" alt="Vapor"/>
            </button>
            <button value="Elixir" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/elixir.png" alt="Elixir"/>
            </button>
            <button value="Ore" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/ore.png" alt="Ore"/>
            </button>
            <button value="Animal Products" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/animalProduct.png" alt="Animal Product"/>
            </button>
            <button value="Threads" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/thread.png" alt="Thread"/>
            </button>
            <button value="Gunpowder" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/gunpowder.png" alt="Gunpowder"/>
            </button>
            <button value="Fuel" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/fuel.png" alt="Fuel"/>
            </button>
            <button value="Clay" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/clay.png" alt="Clay"/>
            </button>
            <button value="Meat" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/meat.png" alt="Meat"/>
            </button>
            <button value="Poison" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/poison.png" alt="Poison"/>
            </button>
            <button value="Lumber" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/lumber.png" alt="Lumber"/>
            </button>
            <button value="Spice" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/spice.png" alt="Spice"/>
            </button>
            <button value="Magic Tool" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/magicTool.png" alt="Magic Tool"/>
            </button>
            <button value="Bug" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/bug.png" alt="Bug"/>
            </button>
            <button value="Mushroom" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/mushroom.png" alt="Mushroom"/>
            </button>
            <button value="Dragon" onClick={props.sortingFunction} className="sortButton">
                <img src="./img/dragon.png" alt="Dragon"/>
            </button>
        </div>
    )
}

export default SortPic