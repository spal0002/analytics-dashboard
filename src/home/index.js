import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import '../assets/css/styles.css';
import { connect } from 'react-redux';
import Home from './homecomponent';
import * as actionBuilder from "../actions/index";

class HomeComponent extends Component {

    state = {
        loggedIn:true
    }
    
    componentWillMount () {
        this.props.loadBrands();
    }

    render() {
        let content = null;
        if (this.state.loggedIn) {
            content = <Home />

        } else {
            content = "Login";
        }

        return (
            <Router>
                {content}
            </Router>
        );
    }
}
const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadBrands:() => dispatch(actionBuilder.loadBrands())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
