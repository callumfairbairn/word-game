import logging
import random

from constants import ALPHABET

logger = logging.getLogger('logger')


def generate() -> list:
    logger.info('Generating letter list...')

    letter_list = generate_random_list()

    logger.info(f'Generated: \n{letter_list[0:4]}\n{letter_list[4:8]}\n{letter_list[8:12]}\n{letter_list[12:16]}')
    return letter_list


def generate_random_list() -> list:
    return [get_random_letter() for x in range(0, 16)]


def get_random_letter() -> str:
    return random.choice(ALPHABET)
