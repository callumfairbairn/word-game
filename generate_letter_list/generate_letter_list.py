import json
import logging
import os

from generation.generate import generate
from word_finding.find_words import find_words


def setup_logging() -> logging.Logger:
    logging.basicConfig(format='[%(asctime)s]:%(message)s')
    new_logger = logging.getLogger('logger')
    new_logger.setLevel(20)
    return new_logger


logger = setup_logging()
logger.info('Running generate_letter_list.py...')


def create_folder(folder_path: str):
    if not os.path.isdir(folder_path):
        logger.info('generated folder does not exist, creating...')
        os.makedirs(folder_path)
    else:
        logger.info('generated folder already exists, skipping...')


def write_output(output_path: str, output: dict):
    with open(output_path, 'w') as output_file:
        logger.info(f'outputting letter list to {output_path}')
        json.dump(output, output_file)
        output_file.close()


def main():
    folder_path = 'generated'
    output_path = 'generated/letter_list.json'

    create_folder(folder_path)

    letter_list = generate()
    dictionary = json.load(open('src/words.json', 'r'))['words']
    logger.info('Words found in grid: %s', find_words(letter_list, dictionary))

    output = {'letter_list': letter_list}
    write_output(output_path, output)


main()
