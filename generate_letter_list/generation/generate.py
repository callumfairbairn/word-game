import logging

logger = logging.getLogger('logger')


def generate() -> list:
    logger.info('Generating letter list...')

    letter_list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']

    logger.info(f'Generated: \n{letter_list[0:4]}\n{letter_list[4:8]}\n{letter_list[8:12]}\n{letter_list[12:16]}')
    return letter_list
