import os
import re

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.js', '.jsx')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Look for lines containing typical male pronouns
            lines = content.split('\n')
            for i, line in enumerate(lines):
                if re.search(r'\b(he|his|him|himself)\b', line, re.IGNORECASE):
                    # Filter out obvious false positives like "The", "Then", HTML attributes, generic usage.
                    # We are looking for sentences that talk about a doctor (Subhan)
                    if "Subhan" in line or "doctor" in line.lower() or "team" in line.lower() or "expertise" in line.lower():
                        print(f"{filepath}:{i+1}: {line.strip()}")
