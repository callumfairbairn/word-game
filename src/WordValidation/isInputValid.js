const isInputValid = (input, dict) => {
    return input.length < 3 ? false : dict.words.indexOf(input) !== -1;
};

export default isInputValid