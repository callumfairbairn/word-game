import json
import os


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


class TestGenerateLetterList:
    def test_runs_without_failing(self):
        exit_status = os.system('python3 generate_letter_list.py')
        assert exit_status == 0

    def test_creates_generated_directory(self):
        os.system('python3 generate_letter_list.py')
        assert os.path.isdir('../generated')

    def test_creates_json_file_inside_generated(self):
        os.system('python3 generate_letter_list.py')
        assert os.path.isfile('../generated/letter_list.json')

    def test_letter_list_file_contains_a_javascript_object(self):
        os.system('python3 generate_letter_list.py')
        with open('../generated/letter_list.json') as json_file:
            json_object = json.load(json_file)
            assert type(json_object) == dict
            json_file.close()

    def test_letter_list_dict_contains_a_list(self):
        os.system('python3 generate_letter_list.py')
        with open('../generated/letter_list.json') as json_file:
            json_object = json.load(json_file)
            letter_list = json_object['letter_list']
            assert type(letter_list) == list
            json_file.close()

    def test_letter_list_contains_16_characters(self):
        os.system('python3 generate_letter_list.py')
        with open('../generated/letter_list.json') as json_file:
            json_object = json.load(json_file)
            letter_list = json_object['letter_list']
            assert len(letter_list) == 16
            assert all(fits_specification(item) for item in letter_list)
            json_file.close()
