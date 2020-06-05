def find_possible_words(start_of_word: str, possible_words: list) -> list:
    return list(filter(lambda possible_word: possible_word.startswith(start_of_word), possible_words))
