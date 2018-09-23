import React, { Component } from 'react';
import Numbers from './Numbers';

import '../styles/Suggestions.css';


class Suggestions extends Component {
    additionalLegend = () => {
        const type = this.props.lottery.additional.type;
        const quantity = this.props.lottery.additional.quantity;
        const sCondition =  quantity > 1 ? 's' : '';

        // Stars
        if (type === 'star') {
            return 'Star'+sCondition;
        }

        // Lucky numbers
        if (type === 'lucky') {
            return 'Lucky number'+sCondition;
        }

        // Default: Additional numbers
        return 'Additional number'+sCondition;
    };

    render() {
        const lotteryKey = this.props.lotteryKey;
        const lottery = this.props.lottery;
        return (
            <section className="suggestions">
                <div className="suggestions__numbers">
                    <table>
                        <thead>
                        <tr>
                            <th>{lottery.numbers.quantity} Number{lottery.numbers.quantity > 1 && 's'} ({lottery.numbers.min} - {lottery.numbers.max})</th>
                            <th colSpan="2">{lottery.additional.quantity} {this.additionalLegend()} ({lottery.additional.min} - {lottery.additional.max})</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                lottery.suggestions.map((suggestion, index) =>
                                    <tr key={index}>
                                        <td><Numbers numbers={suggestion.numbers} /></td>
                                        <td><Numbers numbers={suggestion.additional} type={lottery.additional.type} /></td>
                                        <td><button onClick={() => {this.props.onClickDeleteSuggestion(lotteryKey, index)}}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" xmlSpace="preserve"><path d="M7.8,18.8l3.3,40.1c0.2,2.9,2.7,5.2,5.6,5.2h30.6c2.9,0,5.4-2.3,5.6-5.2l3.3-40.1H7.8z M22.6,56.5c-1,0-1.8-0.8-1.9-1.8l-1.9-30.2c-0.1-1,0.7-1.9,1.8-2c1.1-0.1,1.9,0.7,2,1.8l1.9,30.2C24.6,55.6,23.7,56.5,22.6,56.5z M33.9,54.6c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9V24.4c0-1,0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9V54.6z M45.1,24.5l-1.9,30.2c-0.1,1-0.9,1.8-2,1.8c-1-0.1-1.8-1-1.8-2l1.9-30.2c0.1-1,1-1.8,2-1.8C44.4,22.6,45.2,23.5,45.1,24.5z"/><path d="M56.4,7.5H45.1V5.6c0-3.1-2.5-5.6-5.6-5.6h-15c-3.1,0-5.6,2.5-5.6,5.6v1.9H7.6c-2.1,0-3.8,1.7-3.8,3.8c0,2.1,1.7,3.8,3.8,3.8c17.2,0,31.5,0,48.8,0c2.1,0,3.8-1.7,3.8-3.8C60.1,9.2,58.4,7.5,56.4,7.5z M41.4,7.5H22.6V5.6c0-1,0.8-1.9,1.9-1.9h15c1,0,1.9,0.8,1.9,1.9V7.5z"/></svg></button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="suggestions__controls">
                    <button onClick={() => {this.props.onClickCreateSuggestions(lotteryKey, lottery)}}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" xmlSpace="preserve"><path d="M60.5,27.5H36.5V3.5C36.5,2.4,35,0,32,0s-4.5,2.4-4.5,3.5v24.1H3.5C2.4,27.5,0,29,0,32c0,3,2.4,4.5,3.5,4.5h24.1v24.1c0,1.1,1.5,3.5,4.5,3.5s4.5-2.4,4.5-3.5V36.5h24.1c1.1,0,3.5-1.5,3.5-4.5S61.6,27.5,60.5,27.5z"/></svg>More Numbers</button>
                    <button onClick={() => {this.props.onClickReshuffleSuggestions(lotteryKey, lottery)}}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" xmlSpace="preserve"><path d="M61.4,2.6l-6.7,6.7C48.8,3.6,40.8,0,32,0C14.9,0,0.9,13.5,0,30.4C0,31.3,0.7,32,1.6,32h3.6c0.8,0,1.5-0.6,1.5-1.5C7.5,17.2,18.5,6.7,32,6.7c7,0,13.3,2.8,17.9,7.4l-7,7c-1,1-0.3,2.6,1.1,2.6h18.5c0.9,0,1.5-0.7,1.5-1.5V3.7C64,2.4,62.3,1.7,61.4,2.6z M62.4,32h-3.6c-0.8,0-1.5,0.6-1.5,1.5C56.5,46.8,45.5,57.3,32,57.3c-7,0-13.3-2.8-17.9-7.4l7-7c1-1,0.3-2.6-1.1-2.6H1.5C0.7,40.3,0,41,0,41.8v18.5c0,1.4,1.7,2.1,2.6,1.1l6.7-6.7C15.2,60.4,23.2,64,32,64c17.1,0,31.1-13.5,32-30.4C64,32.7,63.3,32,62.4,32L62.4,32z"/></svg>New Numbers</button>
                </div>
            </section>
        );
    }
}


export default Suggestions;