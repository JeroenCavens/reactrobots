import React from "react";

const List = ( { manufacturers } ) => {
    const output = manufacturers.map ( (manufacturer, i) => {
        return (
            <div key={i} >

            </div>
        )
    });

    return (
        <div>
            <h1 className="post_heading">All Manufacturers</h1>
            {output}
        </div>
    );
};


export default List;