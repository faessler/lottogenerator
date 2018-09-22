import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { getStringUrlFriendly, getRandomNumbers, getLocalStorage, setLocalStorage } from './helpers';
import Nav from './components/Nav';
import Lottery from './components/sites/Lottery';
import Legal from './components/sites/Legal';
import NotFound from './components/sites/NotFound';
import Footer from './components/Footer';

import euroMillionsLogo from './media/euro_millions_logo.png';
import swissLottoLogo from './media/swiss_lotto_logo.png';

import './styles/App.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appClassNames: 'App',
            lotteries: {
                euroMillions: {
                    name: 'Euro Millions',
                    logo: euroMillionsLogo,
                    numbers: {
                        quantity: 5,
                        min: 1,
                        max: 50
                    },
                    additional: {
                        type: 'star',
                        quantity: 2,
                        min: 1,
                        max: 12
                    },
                    suggestions: [
                        {numbers: [], additional: []}
                    ]
                },
                swissLotto: {
                    name: 'Swiss Lotto',
                    logo: swissLottoLogo,
                    numbers: {
                        quantity: 6,
                        min: 1,
                        max: 42
                    },
                    additional: {
                        type: 'lucky',
                        quantity: 1,
                        min: 1,
                        max: 6
                    },
                    suggestions: [
                        {numbers: [], additional: []}
                    ]
                }
            }
        }
    }

    // Create new suggestion
    onClickCreateSuggestions = (lotteryKey, lottery) => {
        this.setCreateSuggestions(lotteryKey, lottery.numbers, lottery.additional);
    };
    setCreateSuggestions = (lotteryKey, numbers, additional) => {
        const randomNumbers = getRandomNumbers(numbers.quantity, numbers.min, numbers.max, 'asc');
        const randomAdditional = getRandomNumbers(additional.quantity, additional.min, additional.max, 'asc');
        this.setState(prevState => ({
            ...prevState,
            lotteries: {
                ...prevState.lotteries,
                [lotteryKey]: {
                    ...prevState.lotteries[lotteryKey],
                    suggestions: [
                        ...prevState.lotteries[lotteryKey].suggestions,
                        {
                            numbers: randomNumbers,
                            additional: randomAdditional
                        }
                    ]
                }
            }
        }));
    };

    // Delete specific suggestion
    onClickDeleteSuggestion = (lotteryKey, suggestionIdentifier) => {
        this.setDeleteSuggestion(lotteryKey, suggestionIdentifier);
    };
    setDeleteSuggestion = (lotteryKey, suggestionIdentifier) => {
        // remove clicked suggestion
        this.state.lotteries[lotteryKey].suggestions.splice(suggestionIdentifier,1);

        // update state
        this.setState(prevState => ({
            ...prevState,
            lotteries: {
                ...prevState.lotteries,
                [lotteryKey]: {
                    ...prevState.lotteries[lotteryKey],
                    suggestions: [
                        ...prevState.lotteries[lotteryKey].suggestions
                    ]
                }
            }
        }));
    };

    // Update/Reshuffle all suggestions
    onClickReshuffleSuggestions = (lotteryKey, lottery) => {
        this.setReshuffledSuggestion(lotteryKey, lottery.numbers, lottery.additional);
    };
    setReshuffledSuggestion = (lotteryKey, numbers, additional) => {
        // get currently set suggestions
        const suggestions = this.state.lotteries[lotteryKey].suggestions;

        // update state
        for (let i = 0; i < suggestions.length; i++) {
            suggestions[i] = {
                numbers: getRandomNumbers(numbers.quantity, numbers.min, numbers.max, 'asc'),
                additional: getRandomNumbers(additional.quantity, additional.min, additional.max, 'asc')
            };

            // update state
            this.setState({
                suggestions,
            });
        }
    };

    // Set local storage for each lottery
    setLocalStorageForEachLottery = (onUpdate) => {
        if (onUpdate) {
            for (let lotteryKey in this.state.lotteries) {
                setLocalStorage(lotteryKey+'.suggestions', JSON.stringify(this.state.lotteries[lotteryKey].suggestions))
            }
        } else {
            for (let lotteryKey in this.state.lotteries) {
                if (
                    !(getLocalStorage(lotteryKey+'.suggestions')) ||
                    !(getLocalStorage(lotteryKey+'.suggestions')).length ||
                    !(getLocalStorage(lotteryKey+'.suggestions')[0]['numbers'].length || getLocalStorage(lotteryKey+'.suggestions')[0]['additional'].length)
                ) {
                    const numbers = this.state.lotteries[lotteryKey].numbers;
                    const additional = this.state.lotteries[lotteryKey].additional;
                    const randomNumbers = getRandomNumbers(numbers.quantity, numbers.min, numbers.max, 'asc');
                    const randomAdditional = getRandomNumbers(additional.quantity, additional.min, additional.max, 'asc');
                    this.setState(prevState => ({
                        ...prevState,
                        lotteries: {
                            ...prevState.lotteries,
                            [lotteryKey]: {
                                ...prevState.lotteries[lotteryKey],
                                suggestions: [
                                    {
                                        numbers: randomNumbers,
                                        additional: randomAdditional
                                    }
                                ]
                            }
                        }
                    }));
                    setLocalStorage(lotteryKey+'.suggestions', '[{"numbers": ['+randomNumbers+'], "additional": ['+randomAdditional+']}]');
                } else {
                    this.setState(prevState => ({
                        ...prevState,
                        lotteries: {
                            ...prevState.lotteries,
                            [lotteryKey]: {
                                ...prevState.lotteries[lotteryKey],
                                suggestions: getLocalStorage(lotteryKey+'.suggestions')
                            }
                        }
                    }))
                }
            }
        }
    };

    // App class names
    setAppClassNames = () => {
        this.setState({
            appClassNames: this.getAppClassNames()
        });
    };
    getAppClassNames = () => {
        for (let lotteryKey in this.state.lotteries) {
            const firstPartOfUrlPath = window.location.pathname.split('/')[1];
            const lotteryPath = getStringUrlFriendly(this.state.lotteries[lotteryKey].name);
            if (firstPartOfUrlPath === lotteryPath) {
                return 'App ' + lotteryKey;
            }
        }
        return 'App';
    };

    // Life cycle
    componentWillMount() {
        this.setLocalStorageForEachLottery();
    }
    componentDidUpdate() {
        this.setLocalStorageForEachLottery(true);
    }

    // Render content
    render() {
        return (
            <Router>
                <div className={this.state.appClassNames}>
                    <div className="content">
                        <Nav lotteries={this.state.lotteries} />

                        <Switch>
                            <Route path={'/legal-notice'} render={()=> <Legal setAppClassNames={this.setAppClassNames} />} />
                            {
                                Object
                                    .keys(this.state.lotteries)
                                    .map(key =>
                                        <Route key={key} path={'/'+getStringUrlFriendly(this.state.lotteries[key].name)} render={()=>
                                            <Lottery
                                                lotteryKey={key}
                                                lottery={this.state.lotteries[key]}
                                                onClickCreateSuggestions={this.onClickCreateSuggestions}
                                                onClickDeleteSuggestion={this.onClickDeleteSuggestion}
                                                onClickReshuffleSuggestions={this.onClickReshuffleSuggestions}
                                                setAppClassNames={this.setAppClassNames}
                                            />
                                        } />
                                    )
                            }
                            <Redirect exact from='/' to={'/'+getStringUrlFriendly(this.state.lotteries['euroMillions'].name)} />
                            <Route render={()=> <NotFound setAppClassNames={this.setAppClassNames} />} />
                        </Switch>

                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;