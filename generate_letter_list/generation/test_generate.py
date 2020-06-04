from constants import DEFAULT_LETTER_LIST
from generation.generate import generate
from test_helpers import run_assertion_100_times


def is_string(item: str) -> bool:
    if type(item) == str:
        return True
    else:
        raise Exception(f'Item {item} is not a string')


def is_length_1(item: str) -> bool:
    if len(item) == 1:
        return True
    else:
        raise Exception(f'Item {item} is not length 1')


def is_capital_letter(item: str) -> bool:
    if item.isupper():
        return True
    else:
        raise Exception(f'Item {item} is not a capital letter')


def fits_specification(item):
    return is_string(item) & is_length_1(item) & is_capital_letter(item)


class TestGenerate:
    def test_outputs_list(self):
        letter_list = generate()
        assert type(letter_list) == list

    def test_list_contains_uppercase_characters(self):
        letter_list = generate()
        assert len(letter_list) == 16
        assert all(fits_specification(item) for item in letter_list)

    def test_list_contains_random_letters(self):
        def assertion():
            assert generate() != DEFAULT_LETTER_LIST

        run_assertion_100_times(assertion)


