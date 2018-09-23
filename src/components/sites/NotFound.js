import React, { Component } from 'react';


class NotFound extends Component {
    componentWillMount() {
        this.props.setBodyClassNames();
    }

    render() {
        const startPageUrl = window.location.protocol+'//'+window.location.hostname+(window.location.port && ':'+window.location.port);
        return (
            <main>
                <h1>Error 404 - Page Not Found</h1>
                <p>
                    This page couldn't be found or doesn't exist at all.
                    Try to find the page you're looking for over the menu or open the start page <a href={startPageUrl}>{window.location.hostname}</a>.
                </p>
            </main>
        );
    }
}


export default NotFound;