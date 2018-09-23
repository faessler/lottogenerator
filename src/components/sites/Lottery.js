import React, { Component } from 'react';
import Suggestions from '../Suggestions';

import '../../styles/Main.css';


class Lottery extends Component {
    componentWillMount() {
        this.props.setBodyClassNames();
    }

    render() {
        const lotteryKey = this.props.lotteryKey;
        const lottery = this.props.lottery;
        const onClickCreateSuggestions = this.props.onClickCreateSuggestions;
        const onClickDeleteSuggestion = this.props.onClickDeleteSuggestion;
        const onClickReshuffleSuggestions = this.props.onClickReshuffleSuggestions;
        return (
            <main>
                {
                    lottery &&
                    <React.Fragment>
                        <h1>{lottery.name}</h1>
                        <Suggestions
                            lotteryKey={lotteryKey}
                            lottery={lottery}
                            onClickCreateSuggestions={onClickCreateSuggestions}
                            onClickDeleteSuggestion={onClickDeleteSuggestion}
                            onClickReshuffleSuggestions={onClickReshuffleSuggestions}
                        />
                    </React.Fragment>
                }
            </main>
        );
    }
}


export default Lottery;
