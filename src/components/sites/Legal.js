import React, { Component } from 'react';


class Legal extends Component {
    componentWillMount() {
        this.props.setBodyClassNames();
    }

    render() {
        return (
            <main>
                <h1>Legal Notice</h1>
                <h2>Owner</h2>
                <p>
                    Jan Fässler<br />
                    <a href="mailto:info@faessler.be">info(at)faessler.be</a>
                </p>

                <h2>Information</h2>
                <p>
                    No guarantee for the correctness of the generated lottery numbers.<br />
                    This page is created with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> <span role="img" aria-label="Blue heart">💙</span>.
                </p>

                <h2>Sources</h2>
                <p>
                    The logos from "Euro Millions" and "Swiss Lotto" are from the website <a href="https://www.swisslos.ch/" target="_blank" rel="noopener noreferrer">www.swisslos.ch</a>.
                </p>
            </main>
        );
    }
}


export default Legal;