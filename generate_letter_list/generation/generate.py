import logging

logger = logging.getLogger('logger')


def generate() -> list:
    logger.info('Generating letter list..')
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
