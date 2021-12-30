import React from "react";
import PropTypes from 'prop-types';

import Item from './item';
import EditForm from './edit_form';

const List = ( {robots} ) => {
    const output = robots.map ( (robot, i) => {
        return (
            <div key={i} >
                { robot.isEditing ? <EditForm robot={robot} /> : <Item robot={robot} /> }
            </div>
        )
    });

    return (
        <div>
            <h1 className="post_heading">All Robots</h1>
            {output}
        </div>
    );
};

List.propTypes = {
    robots: PropTypes.array.isRequired
}

export default List;