import json
import os

path_to_script = 'generate_letter_list/generate_letter_list.py'


class TestGenerateLetterList:
    def test_runs_without_failing(self):
        exit_status = os.system(f'python3 {path_to_script}')
        assert exit_status == 0

    def test_creates_generated_directory(self):
        os.system(f'python3 {path_to_script}')
        assert os.path.isdir('generated')

    def test_creates_json_file_inside_generated(self):
        os.system(f'python3 {path_to_script}')
        assert os.path.isfile('generated/letter_list.json')

    def test_letter_list_file_contains_a_javascript_object_which_contains_a_list(self):
        os.system(f'python3 {path_to_script}')
        with open('generated/letter_list.json') as json_file:
            json_object = json.load(json_file)
            assert type(json_object) == dict

            letter_list = json_object['letter_list']
            assert type(letter_list) == list
            json_file.close()
