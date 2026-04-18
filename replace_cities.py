import os
import glob

def process_file(filepath):
    print(f"Processing {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content.replace('Bangalore', 'Chennai')
    new_content = new_content.replace('bangalore', 'chennai')
    new_content = new_content.replace('Banglore', 'Chennai')
    new_content = new_content.replace('banglore', 'chennai')

    if content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.jsx', '.js', '.css', '.html')):
            process_file(os.path.join(root, file))

