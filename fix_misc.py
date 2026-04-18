import re

# 1. Fix pronoun in DoctorProfile.jsx
with open('src/pages/DoctorProfile.jsx', 'r') as f:
    dp = f.read()
dp = dp.replace('he has pioneered painless root canal technologies', 'she has pioneered painless root canal technologies')
with open('src/pages/DoctorProfile.jsx', 'w') as f:
    f.write(dp)

# 2. Fix ServicePage.jsx
with open('src/pages/ServicePage.jsx', 'r') as f:
    sp = f.read()
# Justification
sp = sp.replace('marginBottom: \'1.25rem\' }}>{para}</p>', 'marginBottom: \'1.25rem\', textAlign: \'justify\' }}>{para}</p>')
# Remove why choose us
sp = re.sub(r'\{\/\* ── Why Choose Us ────────────────────────────────────── \*\/\}[\s\S]*?</section>', '', sp)
with open('src/pages/ServicePage.jsx', 'w') as f:
    f.write(sp)

# 3. TakeATour.jsx
with open('src/pages/TakeATour.jsx', 'r') as f:
    tt = f.read()
# Remove cards 4,5,6
tt = re.sub(r'\s*\{\s*id:\s*4[\s\S]*?id:\s*6[\s\S]*?\},', '', tt)
with open('src/pages/TakeATour.jsx', 'w') as f:
    f.write(tt)

print("Misc fixes applied.")
