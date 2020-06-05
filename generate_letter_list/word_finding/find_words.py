from word_finding.direction_funnction_map import direction_function_map
from word_finding.find_possible_words import find_possible_words


def find_words(letter_list: list, dictionary: list) -> list:
    grid = create_grid(letter_list)

    found_words = []
    for row in grid:
        for starting_letter in row:
            for direction in direction_function_map.keys():
                possible_words = find_possible_words(starting_letter['character'], dictionary)
                recursively_find_words([starting_letter], found_words, possible_words, direction, grid)

    return found_words


def recursively_find_words(
        current_chain: list,
        found_words: list,
        possible_words: list,
        direction: str,
        grid: list
) -> None:
    current_letter = current_chain[-1]
    next_letter = direction_function_map[direction](current_letter['location'], grid)

    if next_letter is not None:
        if next_letter not in current_chain:
            current_chain.append(next_letter)
            current_chain_as_string = ''.join(letter['character'] for letter in current_chain)
            new_possible_words = find_possible_words(current_chain_as_string, possible_words)

            if len(new_possible_words) > 0:
                if len(current_chain_as_string) > 2 and current_chain_as_string in new_possible_words:
                    if current_chain_as_string not in found_words:
                        found_words.append(current_chain_as_string)

                for direction in direction_function_map.keys():
                    recursively_find_words(current_chain, found_words, new_possible_words, direction, grid)

            current_chain.pop()


def create_grid(letter_list: list) -> list:
    return [[
        {'character': letter_list[x * 4 + y].lower(), 'location': {'x': x, 'y': y}}
        for x in range(0, 4)] for y in range(0, 4)]
