import os

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content

        # Multi-pass replacements
        content = content.replace("Dr. Ponni Valavan, MDS (OMFS)", "Dr. Ayesha Subhan, BDS, MBA")
        content = content.replace("Dr Ponni Valavan, MDS (OMFS)", "Dr. Ayesha Subhan, BDS, MBA")
        content = content.replace("Dr. Ponni Valavan", "Dr. Ayesha Subhan")
        content = content.replace("Dr Ponni Valavan", "Dr. Ayesha Subhan")

        # Pronoun fixes specific to the bio
        content = content.replace("Subhan, BDS, MBA and his team", "Subhan, BDS, MBA and her team")
        content = content.replace("renowned for his gentle approach", "renowned for her gentle approach")
        content = content.replace("His dedication to clinical excellence", "Her dedication to clinical excellence")
        content = content.replace("made his a trusted name", "made her a trusted name")

        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error on {filepath}: {e}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.jsx', '.js', '.css', '.html')):
            process_file(os.path.join(root, file))

