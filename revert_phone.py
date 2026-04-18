import re
import os

def fix_phones(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()

        original = content

        # Number replaces
        content = content.replace("8778836682", "9444408087")
        content = content.replace("87788 36682", "94444 08087")

        if content != original:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Fixed {filepath}")
    except Exception as e:
        print(f"Error {filepath}: {e}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js'):
            fix_phones(os.path.join(root, file))

