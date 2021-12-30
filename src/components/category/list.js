import React from "react";

const List = ( { categories } ) => {
    const output = categories.map ( (category, i) => {
        return (
            <div key={i} >

            </div>
        )
    });

    return (
        <div>
            <h1 className="post_heading">All Categories</h1>
            {output}
        </div>
    );
};


export default List;