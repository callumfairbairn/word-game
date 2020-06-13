import json

from generate_letter_list import setup_logging
from word_finding.find_words import find_words

dictionary = json.load(open('../../src/words.json', 'r'))['words']

logger = setup_logging()


class TestFindWords:
    def test_finds_no_words_in_a_letter_list_that_contains_no_words(self):
        letter_list = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
        assert find_words(letter_list, dictionary, logger) == []

    def test_finds_a_horizontal_word(self):
        letter_list = ['J', 'A', 'Z', 'Z', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
        assert find_words(letter_list, dictionary, logger) == ['jazz', 'zax']
