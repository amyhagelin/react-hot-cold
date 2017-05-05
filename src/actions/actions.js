export const SET_GUESSES = 'SET_GUESSES';
export const setGuesses = guesses => ({
    type: SET_GUESSES,
    guesses
});


export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedback = feedback => ({
    type: SET_FEEDBACK,
    feedback
});

export const SET_GUESS_AND_FEEBACK = 'SET_GUESS_AND_FEEBACK';
export const setGuessAndFeedback = (guess, feedback) => ({
	type: SET_GUESS_AND_FEEBACK,
	guess,
	feedback
});


export const SET_CORRECTANSWER = 'SET_CORRECTANSWER';
export const setCorrectAnswer = correctAnswer => ({
    type: SET_CORRECTANSWER,
    correctAnswer
});

export const SET_NEWGAME = 'SET_NEWGAME';
export const setNewGame = newGame => ({
    type: SET_NEWGAME,
    newGame
});
