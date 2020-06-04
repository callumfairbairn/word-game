import json
import os


if not os.path.isdir('../generated'):
    os.makedirs('../generated')

output = {'letter_list': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']}

with open('../generated/letter_list.json', 'w') as output_file:
    json.dump(output, output_file)
    output_file.close()

