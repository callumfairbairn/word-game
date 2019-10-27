const isInputValid = (input, dict, foundWords) => {
    if (input.length < 3) return false;
    if (foundWords.indexOf(input) !== -1) return false;
    return dict.words.indexOf(input) !== -1;
};

export default isInputValid