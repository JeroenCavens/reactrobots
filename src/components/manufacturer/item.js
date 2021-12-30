import React from "react";

const Item = ({ }) => {
    return (
        <div className="post">
            <h3>{}</h3>
            <p>Location: {}</p>
            <div className="control-buttons">
                <button className="edit" >Edit</button>
                &nbsp;&nbsp;
                <button className="delete" >Delete</button>
            </div>
        </div>
    )
};

export default Item;