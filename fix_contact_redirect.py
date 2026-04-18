import re
import os

def fix_contact(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()

        original = content

        # Replace window.open with window.location.href
        content = content.replace("window.open(`https://wa.me/918778836682?text=${encodeURIComponent(text)}`, '_blank');", "window.location.href = `https://wa.me/918778836682?text=${encodeURIComponent(text)}`;")

        # Add explicit fallback link
        old_thanks = "Thank you, {form.name}! Our team will contact you within 4 hours to confirm your appointment.\n                    </p>"
        new_thanks = "Thank you, {form.name}! Our team will contact you within 4 hours to confirm your appointment.\n                      <br/><br/>If WhatsApp did not open, <a href={`https://wa.me/918778836682?text=${encodeURIComponent('Hi, ' + form.name + ' here. I submitted the form on the website.')}`} target=\"_blank\" style={{color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'underline'}}>click here to message us directly</a>.\n                    </p>"
        
        content = content.replace(old_thanks, new_thanks)

        if content != original:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Fixed {filepath}")
    except Exception as e:
        print(f"Error {filepath}: {e}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('ContactUs.jsx'):
            fix_contact(os.path.join(root, file))

