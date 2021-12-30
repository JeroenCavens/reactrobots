import { connect } from 'react-redux';
import React, {Component} from 'react';

import store from '../../store';
import { loadRobots } from '../../actions/robots';
import List from '../../components/robot/list';

class IndexContainer extends Component {
    constructor(props){
        super();
    }

    componentDidMount() {
        // TODO: aanvullen
        store.dispatch(loadRobots());
    }

    render() {
        console.log(this.props);
        return (  
            <List {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    // mapStateToProps: mapping of the props with the state
    return {
        robots: state.robots
    }
};

const mapDispatchToProps = (dispatch) => {
    // mapDispatchToProps: mapping of the eventhandlers with dispatch
    return {
    }
};

export default connect( mapStateToProps, mapDispatchToProps )(IndexContainer);