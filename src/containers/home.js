import React, { Component } from 'react';
import { loadCategories } from '../actions/categories';
import { loadManufacturers } from '../actions/manufacturers';
import { loadRobots } from '../actions/robots';
import { connect } from 'react-redux';


import Home from '../components/robot/µ';
import store from '../store';

class HomeContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        store.dispatch(loadRobots());
        store.dispatch(loadManufacturers());
        store.dispatch(loadCategories());
    }

    render() {
        return (
            <Home {...this.props} />
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        robots: state.robots,
        manufacturers: state.manufacturers,
        categories: state.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(HomeContainer);