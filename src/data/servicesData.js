// Services data based on Smile Bright Dental reference
// Each service has: slug, title, tagline, heroImage, icon, overview, whyUs,
//   benefits (array), procedure (array of steps), faqs, relatedServices

export const servicesData = [
  {
    slug: 'teeth-replacement',
    title: 'Teeth Replacement',
    subtitle: 'Dental Implants',
    tagline: 'Restore Your Smile with Permanent, Natural-Looking Teeth',
    heroImage: '/website/services/teeth_replacement.png',
    color: '#7B6CF6',
    overview: `Missing teeth affect more than your smile — they impact your confidence, ability to eat, and long-term oral health. At Smile Bright Dental, we offer state-of-the-art tooth replacement options, including dental implants, implant-supported bridges, and full-arch restorations. Our implants are crafted from titanium and fuse naturally with your jawbone, providing a permanent, stable foundation that looks, feels, and functions like your natural teeth.

Whether you've lost a single tooth or multiple teeth due to decay, injury, or gum disease, our specialist Dr. Sasha Helene designs a personalised treatment plan to restore full function and aesthetics.`,
    benefits: [
      'Looks, feels and functions exactly like natural teeth',
      'Prevents jawbone loss caused by missing teeth',
      'Improves speech, chewing, and confidence',
      'Long-lasting solution — implants can last a lifetime with proper care',
      'No damage to adjacent healthy teeth (unlike bridges)',
      'Easy to maintain — brush and floss just like natural teeth',
    ],
    procedure: [
      { step: '01', title: 'Consultation & 3D Imaging', desc: 'A thorough oral examination, dental X-rays, and 3D CBCT scan to assess bone density and plan precise implant placement.' },
      { step: '02', title: 'Implant Placement', desc: 'The titanium implant post is gently placed into the jawbone under local anaesthesia or sedation for complete comfort.' },
      { step: '03', title: 'Osseointegration (Healing)', desc: 'Over 3–6 months, the implant fuses with the jawbone in a natural process called osseointegration.' },
      { step: '04', title: 'Abutment Placement', desc: 'A small connector (abutment) is attached to the implant to support the final crown.' },
      { step: '05', title: 'Crown Fitting', desc: 'A custom-made, tooth-coloured ceramic crown is placed, completing your new natural-looking tooth.' },
    ],
    whyUs: [
      'Years of advanced implant procedures by Dr. Sasha Helene',
      'Swiss and Korean premium-grade implant systems',
      '3D CBCT guided implant surgery for precision',
      'In-house dental laboratory for same-day crowns',
      'Painless procedures with sedation dentistry available',
    ],
    faqs: [
      { q: 'How long do dental implants last?', a: 'With proper care, dental implants can last a lifetime. The crown typically lasts 15–20 years before needing replacement.' },
      { q: 'Are dental implants painful?', a: 'The procedure is performed under local anaesthesia. Most patients report that the discomfort is far less than expected, similar to a tooth extraction.' },
      { q: 'Am I a good candidate for dental implants?', a: 'Most adults with good general health and adequate jawbone are candidates. A consultation with our specialist will confirm suitability.' },
      { q: 'How much do dental implants cost?', a: 'Costs vary based on the number of implants and type of restoration. We offer flexible payment plans. Please book a consultation for a personalised quote.' },
    ],
    relatedServices: ['teeth-alignment', 'teeth-cleaning', 'in-house-laboratory'],
  },

  {
    slug: 'teeth-alignment',
    title: 'Teeth Alignment',
    subtitle: 'Braces & Invisalign',
    tagline: 'Straighten Your Smile Comfortably and Discreetly',
    heroImage: '/website/services/teeth_alignment.png',
    color: '#1e88e5',
    overview: `Crooked, crowded, or gapped teeth can affect your confidence and oral health. At Smile Bright Dental, we offer a comprehensive range of orthodontic solutions — from traditional metal braces to advanced clear aligners (Invisalign) — to suit every lifestyle, age, and budget.

Dr. Sasha Helene, our expert specialist, uses the latest digital smile design technology to map your treatment and show you the expected results before you even begin. Whether for children, teens, or adults, we create beautiful, perfectly aligned smiles.`,
    benefits: [
      'Correct crowding, gaps, overbite, underbite, and crossbite',
      'Invisible clear aligner options available',
      'Improved oral hygiene — easier to brush and floss straight teeth',
      'Reduce risk of jaw pain, tooth wear, and gum disease',
      'Digital smile preview before treatment begins',
      'Suitable for children, teens and adults',
    ],
    procedure: [
      { step: '01', title: 'Smile Assessment', desc: 'Digital photos, X-rays, and 3D scans are taken to analyse your teeth, bite, and jaw.' },
      { step: '02', title: 'Treatment Planning', desc: 'We use software to design your ideal smile and present you with treatment options (braces or clear aligners).' },
      { step: '03', title: 'Appliance Fitting', desc: 'Braces are bonded to teeth, or your first set of clear aligners is delivered. Instructions are provided for care and wear.' },
      { step: '04', title: 'Regular Progress Checks', desc: 'Monthly visits (for braces) or every 6–8 weeks (for Invisalign) to monitor progress and make adjustments.' },
      { step: '05', title: 'Retainer Phase', desc: 'Once alignment is achieved, retainers are provided to maintain your beautiful new smile for life.' },
    ],
    whyUs: [
      'Invisalign Diamond Provider — highest tier certification',
      'Digital Smile Design for pre-treatment preview',
      'Metal, ceramic, and lingual braces available',
      'Experienced in paediatric and adult orthodontics',
      'Transparent pricing with flexible EMI options',
    ],
    faqs: [
      { q: 'How long does orthodontic treatment take?', a: 'Treatment duration varies: 6–18 months for Invisalign and 12–24 months for braces, depending on case complexity.' },
      { q: 'Is Invisalign as effective as braces?', a: 'Yes — for most cases, Invisalign is equally effective. Complex bite corrections may require traditional braces.' },
      { q: 'At what age should my child start orthodontic treatment?', a: 'An orthodontic evaluation is recommended by age 7. Treatment typically begins between ages 10–14.' },
      { q: 'Can adults get braces?', a: 'Absolutely! A significant portion of our patients are adults. Discreet options like ceramic braces and Invisalign are very popular.' },
    ],
    relatedServices: ['teeth-replacement', 'teeth-whitening', 'preventive-dentistry'],
  },

  {
    slug: 'pain-management',
    title: 'Pain Management',
    subtitle: 'Comfortable, Pain-Free Dental Care',
    tagline: 'Advanced Techniques to Ensure a Completely Pain-Free Dental Experience',
    heroImage: '/website/services/pain_management.png',
    color: '#43a047',
    overview: `Dental anxiety and fear of pain are among the most common reasons people avoid the dentist. At Smile Bright Dental, we believe every patient deserves care that is gentle, comfortable, and completely pain-free. Our team is trained in the latest pain management and anxiety-reduction protocols, including topical anaesthesia, computer-controlled injections, nitrous oxide, and IV sedation.

Dr. Sasha Helene and her team take extra care with fearful patients, explaining every step of the procedure, using the gentlest techniques, and never rushing. Your comfort is our highest priority.`,
    benefits: [
      'Virtually painless injections using computer-controlled delivery',
      'Topical anaesthetics applied before any injection',
      'Nitrous oxide (laughing gas) for relaxation',
      'IV sedation for high-anxiety or lengthy procedures',
      'Child-friendly pain management techniques',
      'Calm, reassuring environment designed to reduce anxiety',
    ],
    procedure: [
      { step: '01', title: 'Pre-Treatment Consultation', desc: 'We discuss your anxiety levels, medical history, and determine the best pain management approach for you.' },
      { step: '02', title: 'Topical Anaesthesia', desc: 'A numbing gel or ointment is applied to the treatment area before any injection, eliminating the sting completely.' },
      { step: '03', title: 'Computer-Controlled Injection', desc: 'Our STA (Single Tooth Anaesthesia) system delivers anaesthetic at a controlled, slow rate — far more comfortable than traditional syringes.' },
      { step: '04', title: 'Sedation if Required', desc: 'For anxious patients or longer procedures, nitrous oxide or IV sedation ensures you remain relaxed and comfortable throughout.' },
      { step: '05', title: 'Post-Treatment Care', desc: 'We provide clear post-care instructions and pain relief guidance for a smooth, comfortable recovery.' },
    ],
    whyUs: [
      'State-of-the-art computerised anaesthesia delivery systems',
      'Certified in conscious sedation and nitrous oxide therapy',
      'Gentle, patient-first approach for every procedure',
      'Special care protocols for children and dental phobics',
      'Comfortable, calming clinic environment',
    ],
    faqs: [
      { q: 'I am terrified of needles. Can you still treat me?', a: 'Yes! We use topical anaesthetic before any injection, making the process virtually pain-free. We also offer needle-free delivery systems.' },
      { q: 'What is nitrous oxide and is it safe?', a: 'Nitrous oxide (laughing gas) is a safe, well-established sedative that helps you relax without putting you to sleep. It wears off within minutes after treatment.' },
      { q: 'Is IV sedation safe?', a: 'Yes. IV sedation is administered by a trained specialist and is closely monitored throughout the procedure. It is very safe for healthy adults.' },
      { q: 'My child is very anxious about the dentist. What do you recommend?', a: 'We have a dedicated paediatric approach with distraction techniques, topical gels, and a child-friendly environment. Most children leave our clinic smiling!' },
    ],
    relatedServices: ['sedation-dentistry', 'laser-dentistry', 'paediatric-dentistry'],
  },

  {
    slug: 'preventive-dentistry',
    title: 'Preventive Dentistry',
    subtitle: 'Protect Your Smile Before Problems Start',
    tagline: 'Prevention Is Better — and Cheaper — Than Cure',
    heroImage: '/website/services/preventive_dentistry.png',
    color: '#00897b',
    overview: `The most effective dental care is the care that prevents problems before they start. Our comprehensive preventive dentistry programme at Smile Bright Dental is designed to keep your teeth and gums healthy throughout every stage of life. From routine check-ups and professional cleanings to fluoride treatments, sealants, and custom mouthguards, we provide a full range of preventive services for adults and children alike.

Regular visits to Acharya Dental allow us to detect early signs of decay, gum disease, and oral cancer — catching minor issues before they become major (and costly) problems.`,
    benefits: [
      'Detect cavities, gum disease, and oral cancer early',
      'Professional removal of plaque and tartar buildup',
      'Fluoride treatments to strengthen enamel',
      'Dental sealants to protect cavity-prone back teeth in children',
      'Custom mouthguards for teeth grinders (bruxism) and sports',
      'Personalised oral hygiene coaching and diet advice',
    ],
    procedure: [
      { step: '01', title: 'Comprehensive Oral Examination', desc: 'A thorough check of teeth, gums, bite, jaw joints, and soft tissues. Digital X-rays are taken when needed.' },
      { step: '02', title: 'Professional Cleaning (Scaling & Polishing)', desc: 'Ultrasonic scalers and hand instruments remove plaque, tartar, and stains from all tooth surfaces above and below the gumline.' },
      { step: '03', title: 'Oral Cancer Screening', desc: 'A quick visual and tactile examination of soft tissues to detect any early signs of abnormality.' },
      { step: '04', title: 'Fluoride Application', desc: 'A topical fluoride varnish or gel is applied to strengthen enamel and prevent decay — quick and painless.' },
      { step: '05', title: 'Personalised Prevention Plan', desc: 'We advise on brushing technique, flossing, diet, and recommend how frequently you should return for check-ups.' },
    ],
    whyUs: [
      'Digital X-rays with 90% less radiation than conventional X-rays',
      'Comprehensive screenings including oral cancer and TMJ assessment',
      'Dedicated children\'s prevention programme',
      'Insurance-friendly check-up packages',
      'Home care kits and personalised oral hygiene coaching',
    ],
    faqs: [
      { q: 'How often should I visit the dentist?', a: 'We recommend a professional check-up and cleaning every 6 months. Higher-risk patients (those with gum disease or prone to cavities) may need 3–4 monthly visits.' },
      { q: 'At what age should my child first visit the dentist?', a: 'As soon as the first tooth appears, or by their first birthday — whichever comes first. Early visits build positive dental habits.' },
      { q: 'Do dental sealants really work?', a: 'Yes. Studies show sealants can prevent up to 80% of cavities in the back teeth where most childhood decay occurs.' },
      { q: 'Are X-rays safe?', a: 'Our digital X-rays use up to 90% less radiation than traditional film X-rays and are completely safe.' },
    ],
    relatedServices: ['teeth-cleaning', 'oral-cancer-screening', 'paediatric-dentistry'],
  },

  {
    slug: 'laser-dentistry',
    title: 'Laser Dentistry',
    subtitle: 'Precision Treatment, Faster Healing',
    tagline: 'Minimally Invasive Dental Treatment with Near-Zero Discomfort',
    heroImage: '/website/services/laser_dentistry.png',
    color: '#8e24aa',
    overview: `Laser dentistry represents one of the most significant advances in modern oral care. At Smile Bright Dental, we use FDA-approved soft and hard tissue dental lasers to perform a wide range of procedures with extraordinary precision, minimal discomfort, and dramatically faster healing times compared to traditional methods.

Dr. Sasha Helene is a certified laser dentistry practitioner with extensive clinical experience. Laser treatment eliminates the need for scalpels in most soft tissue procedures, reduces bleeding and swelling, and often requires no stitches — making recovery much easier.`,
    benefits: [
      'Minimally invasive — often no scalpel or stitches required',
      'Significant reduction in pain and discomfort',
      'Less bleeding and swelling during and after procedures',
      'Faster healing with reduced risk of infection',
      'Precision targeting — surrounding tissue is unaffected',
      'Suitable for children and patients with dental anxiety',
    ],
    procedure: [
      { step: '01', title: 'Consultation & Planning', desc: 'We assess whether laser treatment is appropriate for your condition and explain the procedure in detail.' },
      { step: '02', title: 'Protective Eyewear', desc: 'Both you and the dental team wear specialised protective eyewear before treatment begins.' },
      { step: '03', title: 'Laser Application', desc: 'The dental laser is precisely directed at the treatment area. Soft tissue procedures are often performed without anaesthesia.' },
      { step: '04', title: 'Sterilisation', desc: 'The laser simultaneously sterilises the area during treatment, dramatically reducing infection risk.' },
      { step: '05', title: 'Post-Care Guidance', desc: 'Healing is fast. We provide simple aftercare instructions. Most patients return to normal activities the same day.' },
    ],
    whyUs: [
      'FDA-approved soft and hard tissue laser systems',
      'Dr. Sasha Helene — certified laser dentistry practitioner',
      'Used for gum reshaping, cavity treatment, teeth whitening & more',
      'Ideal for children and anxious patients',
      'State-of-the-art laser suite',
    ],
    faqs: [
      { q: 'What dental procedures can be done with lasers?', a: 'Gum reshaping, gum disease treatment, cavity preparation, biopsies, cold sore treatment, frenectomy, teeth whitening activation, and more.' },
      { q: 'Does laser dentistry hurt?', a: 'Most soft tissue laser procedures require no anaesthesia at all. Others need minimal anaesthesia. Pain is significantly less than traditional methods.' },
      { q: 'Is laser dentistry safe?', a: 'Yes. FDA-approved dental lasers are completely safe when used by trained professionals. We take all necessary precautions including protective eyewear.' },
      { q: 'Is laser dentistry suitable for my child?', a: 'Yes — laser dentistry is particularly ideal for children as it is less scary, requires fewer or no injections, and heals faster.' },
    ],
    relatedServices: ['pain-management', 'sedation-dentistry', 'teeth-whitening'],
  },

  {
    slug: 'sedation-dentistry',
    title: 'Sedation Dentistry',
    subtitle: 'Relax, Sleep, and Wake Up with a Beautiful Smile',
    tagline: 'Experience Dental Care Without Fear or Anxiety',
    heroImage: '/website/services/sedation_dentistry.png',
    color: '#3949ab',
    overview: `Dental anxiety affects millions of people worldwide and is one of the leading reasons for neglected oral health. At Smile Bright Dental, we offer a complete range of sedation options so that even the most anxious patients can receive the dental care they need — completely comfortably.

From mild nitrous oxide sedation (laughing gas) to oral sedation and IV (intravenous) sedation, our sedation specialists customise your experience. With sedation dentistry, complex multi-procedure visits can be completed in a single appointment while you rest in complete comfort.`,
    benefits: [
      'Eliminate dental anxiety and phobia completely',
      'Multiple procedures can be completed in a single visit',
      'No memory or minimal memory of the procedure',
      'Ideal for patients with a strong gag reflex',
      'Suitable for children with severe dental anxiety',
      'Safe, closely monitored, and well-established protocols',
    ],
    procedure: [
      { step: '01', title: 'Medical & Anxiety Assessment', desc: 'A careful review of your medical history and anxiety level to determine the appropriate sedation method.' },
      { step: '02', title: 'Consent & Pre-Sedation Instructions', desc: 'We provide detailed pre-appointments instructions (fasting, companion escort) based on the sedation type selected.' },
      { step: '03', title: 'Sedation Administration', desc: 'Nitrous oxide via a comfortable mask, oral sedative tablet, or IV line — depending on your chosen plan.' },
      { step: '04', title: 'Dental Treatment', desc: 'While you are relaxed or resting, our team safely and efficiently completes your dental procedure(s).' },
      { step: '05', title: 'Recovery & Discharge', desc: 'You are monitored until fully awake and stable. A companion must accompany you home after IV or oral sedation.' },
    ],
    whyUs: [
      'Trained and certified sedation dentistry specialists',
      'Multiple sedation options: Nitrous oxide, oral, IV sedation',
      'Continuous vital monitoring throughout treatment',
      'Compassionate, judgement-free care for anxious patients',
      'Completes multiple procedures in one comfortable session',
    ],
    faqs: [
      { q: 'What is the difference between nitrous oxide and IV sedation?', a: 'Nitrous oxide is mild sedation delivered through a mask — you remain awake but relaxed and it wears off quickly. IV sedation produces a deeper, sleep-like state with little to no memory of the procedure.' },
      { q: 'Will I be completely asleep during the procedure?', a: 'With IV sedation, you are in a twilight state — deeply relaxed and unaware of the procedure, but not under general anaesthesia.' },
      { q: 'Is sedation dentistry safe?', a: 'Yes, when administered by trained specialists with proper monitoring. We track your vital signs throughout the entire procedure.' },
      { q: 'Can my child receive sedation?', a: 'Yes. Nitrous oxide is safe and commonly used for children. Our paediatric sedation protocols ensure safety and comfort.' },
    ],
    relatedServices: ['pain-management', 'laser-dentistry', 'paediatric-dentistry'],
  },

  {
    slug: 'paediatric-dentistry',
    title: 'Paediatric Dentistry',
    subtitle: "Caring for Your Child's Smile",
    tagline: "Building Healthy Smiles and Positive Dental Habits from Day One",
    heroImage: '/website/services/paediatric_dentistry.png',
    color: '#F59E0B',
    overview: `Children's dental health sets the foundation for a lifetime of healthy smiles. At Smile Bright Dental, we have created a warm, welcoming, child-friendly environment where little patients feel completely at ease. Our paediatric dentistry team is specially trained in child behaviour management, making dental visits a positive — even fun — experience.

From the first tooth to teenage years, we provide comprehensive care including check-ups, fluoride treatments, dental sealants, early orthodontic assessment, and treatment of cavities using the gentlest, most modern techniques available.`,
    benefits: [
      'Child-friendly, purpose-designed waiting area and treatment rooms',
      'Specially trained paediatric dental team',
      'Behaviour management expertise — no fear, no tears',
      'Early detection of orthodontic issues',
      'Preventive sealants and fluoride treatments',
      'Fun rewards and positive reinforcement after every visit',
    ],
    procedure: [
      { step: '01', title: 'Welcome & Introduction', desc: "We take time to introduce our child-friendly environment and team, allowing your child to feel safe and comfortable before any treatment begins." },
      { step: '02', title: 'Gentle Examination', desc: 'A thorough but fun check-up — we count your child\'s teeth, check gums, bite, and jaw development. We involve the child and keep them engaged.' },
      { step: '03', title: 'Professional Cleaning', desc: 'Flavoured toothpaste and a gentle electric brush make cleaning fun. We remove any plaque and tartar build-up.' },
      { step: '04', title: 'Fluoride & Sealants', desc: 'Quick application of fluoride varnish. Sealants can be applied to cavity-prone back teeth in a completely painless process.' },
      { step: '05', title: 'Parent Education & Prize', desc: 'We coach parents on home care routines. Your child gets a special prize or sticker for being brave — leaving with a big smile!' },
    ],
    whyUs: [
      'Purpose-built paediatric zone with games and TV',
      'Specialist-trained in child behaviour management',
      'Completely needle-free options for many treatments',
      'Dental sealants programme for school-age children',
      'Fun, fear-free experience every single visit',
    ],
    faqs: [
      { q: 'When should I bring my child for their first dental visit?', a: 'We recommend the first visit by age 1 or when the first tooth appears. Early visits create familiarity and prevent dental phobia.' },
      { q: 'My child is terrified of the dentist. Can you help?', a: 'Absolutely. Our tell-show-do approach, combined with gentle handling and sometimes nitrous oxide, makes even the most anxious children comfortable.' },
      { q: 'Do baby (milk) teeth need to be treated? They will fall out anyway.', a: 'Yes! Untreated decay in baby teeth can cause pain, infection, and affect the development of permanent teeth. Healthy baby teeth are essential.' },
      { q: 'When should my child get orthodontic evaluation?', a: 'By age 7. Early evaluation allows us to identify issues and monitor development, often preventing more complex treatment later.' },
    ],
    relatedServices: ['preventive-dentistry', 'pain-management', 'sedation-dentistry'],
  },

  {
    slug: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    subtitle: 'Professional Scaling & Polishing',
    tagline: 'Start Fresh with a Professionally Clean, Healthy Smile',
    heroImage: '/website/services/teeth_cleaning.png',
    color: '#00acc1',
    overview: `Even with excellent daily brushing and flossing, plaque and tartar accumulate in areas that are impossible to reach at home. Professional teeth cleaning at Smile Bright Dental removes this buildup, preventing gum disease, tooth decay, and bad breath.

Our hygienists use the latest ultrasonic scaling technology combined with hand instruments to gently and thoroughly clean all tooth surfaces — above and below the gumline. Each session concludes with polishing to remove surface stains and leave your teeth feeling incredibly smooth and clean.`,
    benefits: [
      'Removal of stubborn plaque and tartar that home brushing misses',
      'Prevents gum disease (gingivitis and periodontitis)',
      'Removes surface stains for a naturally brighter appearance',
      'Reduces bad breath (halitosis) caused by bacteria',
      'Early detection of cavities and gum problems',
      'Fresh, smooth, clean feeling that lasts',
    ],
    procedure: [
      { step: '01', title: 'Oral Examination', desc: 'We check gums, teeth, and existing restorations before cleaning to identify any areas of concern.' },
      { step: '02', title: 'Ultrasonic Scaling', desc: 'An ultrasonic scaler uses gentle vibrations and water to break up and flush away tartar, especially from below the gumline.' },
      { step: '03', title: 'Hand Scaling', desc: 'Fine hand instruments are used to remove any remaining calculus from between teeth and around the gumline.' },
      { step: '04', title: 'Polishing', desc: 'A flavoured polishing paste and a rotating brush smooth tooth surfaces and remove light staining for a gleaming finish.' },
      { step: '05', title: 'Fluoride Treatment', desc: 'A fluoride varnish or rinse is applied at the end of the session to strengthen enamel and protect against decay.' },
    ],
    whyUs: [
      'Painless Piezon ultrasonic scaling technology',
      'Trained dental hygienists with in-depth gum health expertise',
      'Comprehensive periodontal assessment with every cleaning',
      'Oral hygiene coaching and personalised home care plans',
      'Friendly reminders for your next check-up',
    ],
    faqs: [
      { q: 'Does teeth cleaning hurt?', a: 'Professional cleaning is generally well-tolerated. Patients with sensitive gums may feel mild pressure. We adjust our technique for complete comfort.' },
      { q: 'How often should I get a professional clean?', a: 'Every 6 months for most patients. Those with gum disease or heavy tartar buildup may benefit from 3–4 monthly sessions.' },
      { q: 'Will cleaning whiten my teeth?', a: 'Cleaning removes surface stains and tartar, making your teeth naturally cleaner and brighter. For whitening beyond natural shade, teeth whitening treatment is available.' },
      { q: 'Can cleaning loosen my teeth?', a: 'No. This is a common misconception. Cleaning removes tartar (which hides gaps between teeth) so teeth may feel slightly more spaced — but they are healthier.' },
    ],
    relatedServices: ['teeth-whitening', 'preventive-dentistry', 'oral-cancer-screening'],
  },

  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    subtitle: 'Professional In-Chair & Take-Home Whitening',
    tagline: 'A Brighter, More Radiant Smile in Just One Visit',
    heroImage: '/website/services/teeth_whitening.png',
    color: '#fdd835',
    overview: `A bright, white smile can transform your appearance and self-confidence. At Smile Bright Dental, we offer professional-grade teeth whitening solutions that are both safe and dramatically more effective than over-the-counter products.

Choose from our power in-chair whitening (results in 60–90 minutes) using advanced laser or LED light activation, or take-home whitening kits with custom-fitted trays for gradual whitening at your own pace. Both options are supervised by our dental team to ensure even, lasting, and safe results.`,
    benefits: [
      'Up to 8–10 shades whiter in a single session',
      'Safe, dentist-supervised — no gum or enamel damage',
      'Longer-lasting results than over-the-counter products',
      'Custom-fitted trays for at-home maintenance',
      'Laser-activated whitening for maximum effectiveness',
      'Suitable for special events — weddings, graduations, interviews',
    ],
    procedure: [
      { step: '01', title: 'Pre-Whitening Assessment', desc: 'We check for cavities, gum disease, or sensitivity that need treatment before whitening. Existing crowns and veneers will not whiten.' },
      { step: '02', title: 'Professional Cleaning', desc: 'Teeth are cleaned to remove surface plaque and stains, ensuring the whitening gel penetrates evenly.' },
      { step: '03', title: 'Gum Protection', desc: 'A rubber dam or protective gel is applied to shield your gums from the whitening agent.' },
      { step: '04', title: 'Whitening Gel Application', desc: 'Professional-strength hydrogen peroxide gel is applied to the tooth surfaces.' },
      { step: '05', title: 'Light Activation & Results', desc: 'A laser or LED light activates the gel to speed up whitening. After 3–4 sessions of 15 minutes, your new smile is revealed.' },
    ],
    whyUs: [
      'Professional-grade ZOOM! and Philips whitening systems',
      'Both in-chair (60–90 min) and take-home options',
      'Safe for enamel and gums — supervised by dentists',
      'Pre and post shade measurement',
      'Sensitivity management protocols for comfortable treatment',
    ],
    faqs: [
      { q: 'How long do whitening results last?', a: 'In-chair whitening results typically last 1–2 years with good oral hygiene and dietary care. Top-up treatments are simple and affordable.' },
      { q: 'Is teeth whitening safe?', a: 'Yes — when performed by professionals. Our whitening systems are carefully formulated to whiten without damaging enamel or gums.' },
      { q: 'Will it make my teeth sensitive?', a: 'Some patients experience mild, temporary sensitivity for 24–48 hours. We use desensitising agents to minimise this.' },
      { q: 'Will whitening work on crowns, veneers, or fillings?', a: 'No — whitening only lightens natural tooth enamel. Restorations will need to be replaced to match your new whiter shade if desired.' },
    ],
    relatedServices: ['teeth-cleaning', 'teeth-alignment', 'laser-dentistry'],
  },

  {
    slug: 'oral-cancer-screening',
    title: 'Oral Cancer Screening',
    subtitle: 'Early Detection Saves Lives',
    tagline: 'Quick, Painless Screening That Could Save Your Life',
    heroImage: '/website/services/preventive_dentistry.png',
    color: '#7B6CF6',
    overview: `Oral cancer is one of the most common cancers in India, yet it is one of the most curable when detected early. At Smile Bright Dental, oral cancer screening is part of every comprehensive check-up. Dr. Sasha Helene is highly trained in identifying the earliest signs of oral cancer and pre-cancerous lesions.

Our screening takes just a few minutes and involves a thorough visual and tactile examination of all oral soft tissues — lips, tongue, cheeks, floor of mouth, palate, and throat — combined with advanced diagnostic tools such as VELscope fluorescence imaging.`,
    benefits: [
      'Detection at the earliest, most treatable stage',
      'Painless — takes less than 5 minutes',
      'VELscope fluorescence imaging for enhanced detection',
      'Included in every routine dental check-up at no extra cost',
      'Performed by a specialist in Oral Medicine & Radiology',
      'Peace of mind — especially for tobacco, pan, and alcohol users',
    ],
    procedure: [
      { step: '01', title: 'Medical History Review', desc: 'We note risk factors such as tobacco use (smoked or smokeless), alcohol consumption, HPV history, and sun exposure.' },
      { step: '02', title: 'Visual Examination', desc: 'A thorough inspection of all oral tissues — lips, tongue, floor of mouth, palate, cheeks, and throat — under bright light.' },
      { step: '03', title: 'Tactile Examination', desc: 'Palpation of the neck lymph nodes and floor of mouth to detect any abnormal lumps, bumps, or tenderness.' },
      { step: '04', title: 'VELscope Fluorescence Screening', desc: 'A specialised blue light device makes healthy tissue appear green while abnormal tissue appears dark — detecting changes invisible to the naked eye.' },
      { step: '05', title: 'Results & Follow-Up', desc: 'Normal findings are recorded. Any suspicious areas are biopsied or referred to a specialist for further assessment promptly.' },
    ],
    whyUs: [
      'Expert Oral Health Specialist — Dr. Sasha Helene',
      'VELscope advanced fluorescence screening technology',
      'Routine screening at every check-up appointment',
      'Biopsy services available on-site',
      'Prompt referral network for complex cases',
    ],
    faqs: [
      { q: 'Who should get oral cancer screening?', a: 'Everyone over 18, but especially those who use tobacco, consume alcohol, chew pan/betel nut, or have had oral HPV infection. We screen all our patients routinely.' },
      { q: 'Is the screening painful?', a: 'Not at all. The entire process is gentle, non-invasive, and takes under 5 minutes.' },
      { q: 'What are the early signs of oral cancer?', a: 'White or red patches in the mouth, a sore that does not heal within 2 weeks, a lump or thickening, difficulty swallowing, or unexplained bleeding.' },
      { q: 'How often should I get screened?', a: 'Every 6–12 months as part of your routine check-up. High-risk individuals (tobacco and alcohol users) should be screened every 6 months.' },
    ],
    relatedServices: ['preventive-dentistry', 'teeth-cleaning', 'laser-dentistry'],
  },

];

export const getServiceBySlug = (slug) => servicesData.find(s => s.slug === slug);
export const getRelatedServices = (slugs) => servicesData.filter(s => slugs.includes(s.slug));
