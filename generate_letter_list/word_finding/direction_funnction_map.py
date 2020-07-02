direction_function_map = {
    'right': lambda location, grid:
    None
    if location['y'] + 1 >= len(grid)
    else grid[location['y'] + 1][location['x']],

    'downright': lambda location, grid:
    None
    if location['y'] + 1 >= len(grid)
    or location['x'] + 1 >= len(grid[location['y']])
    else grid[location['y'] + 1][location['x'] + 1],

    'down': lambda location, grid:
    None
    if location['x'] + 1 >= len(grid[location['y']])
    else grid[location['y']][location['x'] + 1],

    'downleft': lambda location, grid:
    None
    if location['y'] - 1 <= 0
    or location['x'] + 1 >= len(grid[location['y']])
    else grid[location['y'] - 1][location['x'] + 1],

    'left': lambda location, grid:
    None
    if location['y'] - 1 <= 0
    else grid[location['y'] - 1][location['x']],

    'upleft': lambda location, grid:
    None
    if location['y'] - 1 < 0
    or location['x'] - 1 < 0
    else grid[location['y'] - 1][location['x'] - 1],

    'up': lambda location, grid:
    None
    if location['x'] - 1 < 0
    else grid[location['y']][location['x'] - 1],

    'upright': lambda location, grid:
    None
    if location['y'] + 1 >= len(grid)
    or location['x'] - 1 < 0
    else grid[location['y'] + 1][location['x'] - 1]
}
