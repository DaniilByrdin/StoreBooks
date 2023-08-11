import React from "react";
import { Component } from "react";

import ErrorEndicator from '../error-indicator/error-endicator'

class ErrorBountry extends Component {

    state = {
        hasError: false,
    }

    componentDidCatch() {
        this.setState( {hasError: true} )
    }

    render () {
        if (this.state.hasError) {
            <ErrorEndicator />
        }

        return this.props.children;
    }
}

export default ErrorBountry