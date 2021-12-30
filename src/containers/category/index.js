import { connect } from 'react-redux';
import React, {Component} from 'react';

import Index from '../../components/category/index';
import store from '../../store';
import { loadCategories } from '../../actions/categories';

class IndexContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        // TODO: aanvullen
        store.dispatch(loadCategories());
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
        categories: state.categories

    }
};

const mapDispatchToProps = (dispatch) => {
    // mapDispatchToProps: mapping of the eventhandlers with dispatch
    return {

    }
};

export default connect( mapStateToProps, mapDispatchToProps )(IndexContainer);