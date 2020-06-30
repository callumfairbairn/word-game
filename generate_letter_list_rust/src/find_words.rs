fn find_possible_words<'a>(start_of_word: &'a str, possible_words: Vec<&'a str>) -> Vec<&'a str> {
    c![possible_word, for possible_word in possible_words, if possible_word.starts_with(start_of_word)]
}

#[cfg(test)]
mod find_possible_words_tests {
    use crate::find_words::find_possible_words;

    #[test]
    fn returns_empty_if_input_is_not_start_of_any_word() {
        let start_of_word: &str = "mnkjboj";
        let possible_words: Vec<&str> = vec!["kafwa"];
        let expected: Vec<&str> = vec![];
        assert_eq!(expected, find_possible_words(start_of_word, possible_words))
    }

    #[test]
    fn returns_input_if_input_is_in_list_of_possible_words() {
        let start_of_word: &str = "jungle";
        let possible_words: Vec<&str> = vec!["jungle"];
        let expected: Vec<&str> = vec!["jungle"];
        assert_eq!(expected, find_possible_words(start_of_word, possible_words))
    }

    #[test]
    fn test_returns_all_words_that_start_with_input_start_of_word() {
        let start_of_word: &str = "catamaran";
        let possible_words: Vec<&str> = vec!["catamaran", "catamarans"];
        let expected: Vec<&str> = vec!["catamaran", "catamarans"];
        assert_eq!(expected, find_possible_words(start_of_word, possible_words))
    }

    #[test]
    fn test_does_not_return_words_that_do_not_start_with_input_word() {
        let start_of_word: &str = "disposed";
        let possible_words: Vec<&str> = vec!["predisposed", "disposed"];
        let expected: Vec<&str> = vec!["disposed"];
        assert_eq!(expected, find_possible_words(start_of_word, possible_words))
    }
}