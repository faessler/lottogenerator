import React, { Component } from 'react';

import '../styles/Numbers.css';


class Numbers extends Component {
    getNumbersClassNames = () => {
        if (this.props.type === 'star') {
            return 'numbers numbers--stars'
        }
        if (this.props.type) {
            return 'numbers numbers--lucky'
        }
        if (this.props.type) {
            return 'numbers numbers--additional'
        }
        return 'numbers'
    };
    render() {
        const numbers = this.props.numbers;
        return (
            <ul className={this.getNumbersClassNames()}>
                {
                    numbers.map((number, index) =>
                        <li key={index}>{number}</li>
                    )
                }
            </ul>
        );
    }
}


export default Numbers;