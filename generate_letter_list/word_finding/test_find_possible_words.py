from word_finding.find_possible_words import find_possible_words


class TestFindPossibleWords:
    def test_returns_empty_list_if_input_is_not_start_of_any_word(self):
        start_of_word = 'mnkjboj'
        possible_words = ['kafwa']
        assert find_possible_words(start_of_word, possible_words) == []

    def test_returns_input_if_input_is_in_list_of_possible_words(self):
        start_of_word = 'jungle'
        possible_words = ['jungle']
        assert find_possible_words(start_of_word, possible_words) == ['jungle']

    def test_returns_all_words_that_start_with_input_start_of_word(self):
        start_of_word = 'catamaran'
        possible_words = ['catamaran', 'catamarans']
        assert find_possible_words(start_of_word, possible_words) == ['catamaran', 'catamarans']

    def test_does_not_return_words_that_do_not_start_with_input_word(self):
        start_of_word = 'disposed'
        possible_words = ['predisposed', 'disposed']
        assert find_possible_words(start_of_word, possible_words) == ['disposed']
