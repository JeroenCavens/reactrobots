import React from "react";
import PropTypes from 'prop-types';


const Item = ( {robot} ) => {
    return (
        <div className="post">
            <div className="alright">
                <img src={"./images/" + robot.img}  height={150} alt="robot" />
            </div>
            <h3 className="post_title">{robot.name}</h3>
            <p>Serial Number: {robot.serialNumber} <br/>
                Manufacturer: {robot.manufacturer}</p>
            <div className="control-buttons">
                <button className="edit"  >Edit</button>
                &nbsp;&nbsp;
                <button className="delete"  >Delete</button>
            </div>
        </div>
    )
};

Item.propTypes = {
    robot: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        serialNumber: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired
    }).isRequired
};

export default Item;