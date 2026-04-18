import os

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        original = content

        # Number replaces
        content = content.replace("94444 08087", "87788 36682")
        content = content.replace("9444408087", "8778836682")

        # Specific Book Appointment replaces
        if 'Header.jsx' in filepath:
            content = content.replace('<button className="btn btn-primary">Book Appointment</button>', '<a href="https://wa.me/918778836682" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Appointment</a>')
            content = content.replace('<button className="btn btn-primary w-full">Book Appointment</button>', '<a href="https://wa.me/918778836682" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">Book Appointment</a>')
        
        if 'ServicePage.jsx' in filepath:
            content = content.replace('<button className="btn btn-primary">\n                  <CalendarDays size={18} /> Book Appointment\n                </button>', '<a href="https://wa.me/918778836682" target="_blank" rel="noopener noreferrer" className="btn btn-primary">\n                  <CalendarDays size={18} /> Book Appointment\n                </a>')
            content = content.replace('<button className="btn btn-primary" style={{ fontSize: \'1.1rem\', padding: \'1rem 2.5rem\' }}>\n                  <CalendarDays size={20} /> Book Appointment\n                </button>', '<a href="https://wa.me/918778836682" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: \'1.1rem\', padding: \'1rem 2.5rem\' }}>\n                  <CalendarDays size={20} /> Book Appointment\n                </a>')

        if 'DoctorProfile.jsx' in filepath:
            content = content.replace('<button className="btn btn-primary w-full" style={{ marginTop: \'1.5rem\' }}>\n                                            Book Appointment\n                                        </button>', '<a href="https://wa.me/918778836682" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full" style={{ marginTop: \'1.5rem\' }}>\n                                            Book Appointment\n                                        </a>')

        if 'SmileBrightDental.jsx' in filepath:
            content = content.replace('<button className="btn btn-primary w-full" style={{ marginTop: \'1.5rem\' }}>\n                                            Book Appointment\n                                        </button>', '<a href="https://wa.me/918778836682" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full" style={{ marginTop: \'1.5rem\' }}>\n                                            Book Appointment\n                                        </a>')
            
        if 'ContactUs.jsx' in filepath:
            # Fix form submit
            old_submit = "  const handleSubmit = e => {\n    e.preventDefault();\n    setSubmitted(true);\n  };"
            new_submit = "  const handleSubmit = e => {\n    e.preventDefault();\n    const text = `Hi, I am reaching out from the website.\\n*Name:* ${form.name}\\n*Phone:* ${form.phone}\\n*Service:* ${form.service}\\n*Message:* ${form.message}`;\n    window.open(`https://wa.me/918778836682?text=${encodeURIComponent(text)}`, '_blank');\n    setSubmitted(true);\n  };"
            content = content.replace(old_submit, new_submit)

        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated WA links and nums in {filepath}")
    except Exception as e:
        pass

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.jsx'):
            process_file(os.path.join(root, file))

