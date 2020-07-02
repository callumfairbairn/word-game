pub(crate) fn find_possible_words(start_of_word: &String, possible_words: &Vec<String>) -> Vec<String> {
    c![possible_word, for possible_word in possible_words, if possible_word.starts_with(start_of_word)]
}

#[cfg(test)]
mod find_possible_words_tests {
    use crate::find_possible_words::find_possible_words;

    #[test]
    fn returns_empty_if_input_is_not_start_of_any_word() {
        let start_of_word: String = "mnkjboj".to_string();
        let possible_words: &Vec<String> = &vec!["kafwa".to_string()];
        let expected: Vec<&str> = vec![];
        assert_eq!(expected, find_possible_words(&start_of_word, possible_words))
    }

    #[test]
    fn returns_input_if_input_is_in_list_of_possible_words() {
        let start_of_word: String = "jungle".to_string();
        let possible_words: &Vec<String> = &vec!["jungle".to_string()];
        let expected: Vec<&str> = vec!["jungle"];
        assert_eq!(expected, find_possible_words(&start_of_word, possible_words))
    }

    #[test]
    fn test_returns_all_words_that_start_with_input_start_of_word() {
        let start_of_word: String = "catamaran".to_string();
        let possible_words: &Vec<String> = &vec!["catamaran".to_string(), "catamarans".to_string()];
        let expected: Vec<&str> = vec!["catamaran", "catamarans"];
        assert_eq!(expected, find_possible_words(&start_of_word, possible_words))
    }

    #[test]
    fn test_does_not_return_words_that_do_not_start_with_input_word() {
        let start_of_word: String = "disposed".to_string();
        let possible_words: &Vec<String> = &vec!["predisposed".to_string(), "disposed".to_string()];
        let expected: Vec<&str> = vec!["disposed"];
        assert_eq!(expected, find_possible_words(&start_of_word, possible_words))
    }
}