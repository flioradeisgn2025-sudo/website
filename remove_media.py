import os
import re

def fix_header(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
            
        original = content

        content = re.sub(r'<Link to="/about/media" className="dropdown-item".*?>Media</Link>\s*', '', content)

        if content != original:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Fixed {filepath}")
    except Exception as e:
        print(f"Error {filepath}: {e}")

for root, _, files in os.walk('src'):
    for file in files:
        if file == 'Header.jsx':
            fix_header(os.path.join(root, file))

