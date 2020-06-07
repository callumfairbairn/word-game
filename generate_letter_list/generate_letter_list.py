import argparse
import csv
import json
import logging
import os

from generation.generate import generate
from word_finding.find_words import find_words
from timeit import default_timer as timer


def setup_logging() -> logging.Logger:
    logging.basicConfig(format='[%(asctime)s]:%(message)s')
    new_logger = logging.getLogger('logger')
    new_logger.setLevel(20)
    return new_logger


def setup_arg_parser() -> argparse.ArgumentParser:
    new_parser = argparse.ArgumentParser(description='Generate random letter list')
    new_parser.add_argument(
        '--data-output-file',
        '-d',
        type=str,
        help='Name of data output file (.csv is not necessary)'
    )
    return new_parser


parser = setup_arg_parser()
args = parser.parse_args()
print(args)

logger = setup_logging()
logger.info('Running generate_letter_list.py...')


def create_folder(folder_path: str) -> None:
    if not os.path.isdir(folder_path):
        logger.info('generated folder does not exist, creating...')
        os.makedirs(folder_path)
    else:
        logger.info('generated folder already exists, skipping...')


def write_output(output_path: str, output: dict) -> None:
    with open(output_path, 'w') as output_file:
        logger.info(f'outputting letter list to {output_path}')
        json.dump(output, output_file)
        output_file.close()


def append_data(output_path: str, time_taken: float, words_found: int) -> None:
    if os.path.isfile(output_path):
        logger.info(f'{output_path} exists...')
        file_exists = True
    else:
        logger.info(f'{output_path} does not exist...')
        file_exists = False

    with open(output_path, 'a') as csv_file:
        writer = csv.writer(csv_file, delimiter=',')
        if not file_exists:
            logger.info('creating file...')
            writer.writerow(['time', 'words_found'])

        logger.info('Appending data to %s', output_path)
        writer.writerow([round(time_taken, 3), words_found])
        csv_file.close()


def main():
    folder_path = 'generated'
    output_path = 'generated/letter_list.json'

    create_folder(folder_path)

    letter_list = generate()
    dictionary = json.load(open('src/words.json', 'r'))['words']

    start = timer()
    found_words = find_words(letter_list, dictionary, logger)
    end = timer()
    time_taken = end - start

    logger.info('Words found in grid: %s', found_words)
    logger.info('Time elapsed: %s', time_taken)
    logger.info('Number of words found: %s', len(found_words))

    if args.data_output_file is not None:
        append_data(f'visualisations/{args.data_output_file}.csv', time_taken, len(found_words))

    output = {'letter_list': letter_list}
    write_output(output_path, output)


main()
