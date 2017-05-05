import React from 'react';
import {connect} from 'react-redux';
import {setGuesses, setFeedback, setCorrectAnswer, setGuessAndFeedback, setNewGame} from '../actions/actions';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


export class Game extends React.Component {

    newGame() {
        this.props.dispatch(setNewGame({
             guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100)
        }));
    }

    guess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.props.dispatch(setFeedback('Please enter a valid number'));
            return;
        }

        const difference = Math.abs(guess - this.props.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        this.props.dispatch(setGuessAndFeedback(guess, feedback));
    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}

export default connect(state => state)(Game)


