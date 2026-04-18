import os
import re

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content

        # 1. Update the phone number globally
        content = content.replace("9444408087", "8778836682")
        content = content.replace("94444 08087", "87788 36682")

        # 2. Convert Book Appointment buttons to WhatsApp anchors
        content = re.sub(
            r'<button([^>]*)>([\s\S]*?Book Appointment[\s\S]*?)</button>',
            r'<a href="https://wa.me/918778836682" target="_blank" rel="noopener noreferrer"\1>\2</a>',
            content
        )

        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.jsx', '.js', '.html')):
            process_file(os.path.join(root, file))

