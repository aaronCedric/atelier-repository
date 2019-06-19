import React from 'react'

const Materials = (props) => {
    return (
        <div className='item-container'>
            <div className='item-wrapper'>
                <img src={props.mats.img} alt={props.mats.name}  className='item-image'/>
                <h2 className='item-name'>{props.mats.name}</h2>
                <div className="item-lvl">
                    <div className="topPart">Item Level</div>
                    <div className="bottomPart">{props.mats.iLevel}</div>
                </div>
                <div className="item-category">
                    {props.mats.categoryImg.map((item, index) => {
                        return <img key={index} src={item} alt={item}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Materials

// when container is clicked fires an event
// need target to know what type of material

// event will open an overlay about that item