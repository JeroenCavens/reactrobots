import { connect } from 'react-redux';
import React, {Component} from 'react';

import Index from '../../components/manufacturer/index';
import store from '../../store';
import { loadManufacturers } from '../../actions/manufacturers';

class IndexContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        // TODO: aanvullen
        store.dispatch(loadManufacturers());
    }

    render() {
        return (
            <Index {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    // mapStateToProps: mapping of the props with the state
    return {
        manufacturers: state.manufacturers
    }
};

const mapDispatchToProps = (dispatch) => {
    // mapDispatchToProps: mapping of the eventhandlers with dispatch
    return {

    }
};

export default connect( mapStateToProps, mapDispatchToProps )(IndexContainer);