const fs = require('fs');

const files = [
    "src/pages/TestimonialsPage.jsx",
    "src/pages/TakeATour.jsx",
    "src/pages/DoctorProfile.jsx",
    "src/pages/Awards.jsx",
    "src/pages/Media.jsx",
    "src/pages/SmileBrightDental.jsx",
    "src/components/Header.jsx",
    "src/components/Doctors.jsx",
    "src/data/servicesData.js",
    "src/components/Testimonials.jsx"
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace names and image URLs
    content = content.replace(/Dr\. Sasha Helene/g, "Dr. Ponni Valavan, MDS (OMFS)");
    content = content.replace(/dr-sasha\.png/g, "dr_ponni_valavan.png");
    content = content.replace(/dr-sasha-helene/g, "dr-ponni-valavan");
    content = content.replace(/dr-sasha-professional\.png/g, "dr_ponni_valavan.png");
    
    // Basic pronoun replacements (case sensitive) where context implies the doctor
    content = content.replace(/She /g, "He ");
    content = content.replace(/ she /g, " he ");
    content = content.replace(/ Her /g, " His ");
    content = content.replace(/ her /g, " his ");
    
    fs.writeFileSync(file, content, 'utf8');
});
console.log('Doctor details updated successfully.');
