import re
import os

with open("src/components/Testimonials.jsx", "r") as f:
    t = f.read()

# Replace Names
t = t.replace("Priya Sharma", "Deepa Sundaram")
t = t.replace("Ananya Reddy", "Meenakshi Krishnan")
t = t.replace("Mohammed Ashraf", "Karthik Velu")

# Replace Roles
t = t.replace("Patient — Dental Care, Chennai", "Patient")
t = t.replace("Patient — Smile Makeover, Hyderabad", "Patient")
t = t.replace("Patient — Laser Care, Chennai", "Patient")

# Fix pronoun for Meenakshi Krishnan
t = t.replace("He rebuilt my entire smile", "She rebuilt my entire smile")
t = t.replace("His patience, attention to detail", "Her patience, attention to detail")

with open("src/components/Testimonials.jsx", "w") as f:
    f.write(t)

print("Updated Testimonials.jsx")


with open("src/pages/TestimonialsPage.jsx", "r") as f:
    tp = f.read()

# Replace Names
tp = tp.replace("Priya Sharma", "Deepa Sundaram")
tp = tp.replace("Rajesh Kulkarni", "Ramesh Krishnan")
tp = tp.replace("Ananya Reddy", "Meenakshi Krishnan")
tp = tp.replace("Mohammed Ashraf", "Karthik Velu")
tp = tp.replace("Sunita Nair", "Janani Ramesh")
tp = tp.replace("Amit Joshi", "Saravanan Chandran")
tp = tp.replace("Deepa Menon", "Kavitha Rajan")
tp = tp.replace("Venkatesh Rao", "Muruganandam")
tp = tp.replace("Lakshmi Patel", "Swathi Balaji")

# Fix pronoun
tp = tp.replace("He rebuilt my entire smile", "She rebuilt my entire smile")
tp = tp.replace("His patience, attention to detail", "Her patience, attention to detail")
tp = tp.replace("His expertise is extraordinary", "Her expertise is extraordinary")

# Remove location & treatment entirely and replace with "Patient"
tp = re.sub(r'<span[^>]*>\s*<MapPin[^>]*/>\s*\{t\.location\}\s*&nbsp;·&nbsp;\s*\{t\.treatment\}\s*</span>', '<span style={{ color: \'var(--text-secondary)\', fontSize: \'0.875rem\' }}>Patient</span>', tp)

tp = re.sub(r'<span[^>]*>\{t\.location\}\s*·\s*\{t\.treatment\}</span>', '<span style={{ color: \'var(--text-secondary)\', fontSize: \'0.8rem\' }}>Patient</span>', tp)

with open("src/pages/TestimonialsPage.jsx", "w") as f:
    f.write(tp)

print("Updated TestimonialsPage.jsx")
