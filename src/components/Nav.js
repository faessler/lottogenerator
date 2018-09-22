import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { getStringUrlFriendly } from "../helpers";

import '../styles/Nav.css';


class Nav extends Component {
    render() {
        const lotteries = this.props.lotteries;
        return (
            <nav>
                <ul>
                    {
                        Object
                            .keys(lotteries)
                            .map(key =>
                                <li key={key}>
                                    <NavLink to={'/'+getStringUrlFriendly(lotteries[key].name)}>
                                        <img src={lotteries[key].logo} alt={lotteries[key].name}/>
                                        {lotteries[key].name}
                                    </NavLink>
                                </li>
                            )
                    }
                </ul>
            </nav>
        );
    }
}


export default Nav;