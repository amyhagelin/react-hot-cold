import {SET_GUESSES, SET_FEEDBACK, SET_CORRECTANSWER, SET_GUESS_AND_FEEBACK, SET_NEWGAME} from '../actions/actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100)
};

export const gameReducer = (state=initialState, action) => {
    if (action.type === SET_GUESSES) {
        return Object.assign({}, state, {
            guesses: action.guesses
        });
    }
    else if (action.type === SET_FEEDBACK) {
        return Object.assign({}, state, {
            feedback: action.feedback
        });
    }
    else if (action.type === SET_CORRECTANSWER) {
        return Object.assign({}, state, {
            correctAnswer: action.correctAnswer
        });
    } 
    else if (action.type === SET_GUESS_AND_FEEBACK) {
        return Object.assign({}, state, {
            feedback: action.feedback,
            guesses: [...state.guesses, action.guess]
        });
    }
    else if (action.type === SET_NEWGAME) {
        return Object.assign({}, state, {
            guesses: action.newGame.guesses,
            feedback: action.newGame.feedback,
            correctAnswer: action.newGame.correctAnswer
        })
    }
    return state;
};









