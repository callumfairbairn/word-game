from typing import Callable


def run_assertion_100_times(assertion: Callable):
    for x in range(0, 99):
        assertion()
