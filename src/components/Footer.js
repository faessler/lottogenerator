import React, { Component } from 'react';
import {Link} from "react-router-dom";

import '../styles/Footer.css';


class Footer extends Component {
    render() {
        const currentDate = new Date();
        return (
            <footer>
                © {currentDate.getFullYear()} by Jan Fässler | <Link to="/legal-notice">Legal notice</Link>
            </footer>
        );
    }
}


export default Footer;