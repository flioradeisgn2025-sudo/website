// Services data based on Smile Bright Dental reference
// Each service has: slug, title, tagline, heroImage, icon, overview, whyUs,
//   benefits (array), procedure (array of steps), faqs, relatedServices

export const servicesData = [
  {
    slug: 'teeth-replacement',
    title: 'Teeth Replacement',
    subtitle: 'Dental Implants',
    tagline: 'A permanent fix that looks and chews like the original.',
    heroImage: '/website/services/teeth_replacement.png',
    color: '#7B6CF6',
    overview: `A missing tooth doesn't stay just a cosmetic problem for long. The bone around it slowly shrinks, the teeth on either side start to drift, and chewing on that side becomes a habit you give up. Implants fix that. A titanium post is placed into the jawbone, the bone grows around it over a few months, and a crown is fitted on top — so the new tooth has a real root holding it in place, not just a shell sitting on the gum.

Whether you've lost a tooth to decay, an injury, or gum disease, Dr. Ayesha will plan the placement around what your bone actually looks like — sometimes that means a graft first, sometimes it means immediate placement. There's no single template for this.`,
    benefits: [
      'Chews and feels like a natural tooth — no plate, no clicking',
      'Stops the jawbone from shrinking where the tooth was lost',
      'Doesn\'t involve grinding down the healthy teeth on either side',
      'Cleans like a normal tooth — brush and floss as usual',
      'Built to last decades when looked after',
      'Tooth-coloured ceramic crown matched to the rest of your smile',
    ],
    procedure: [
      { step: '01', title: 'Consultation & 3D scan', desc: 'A CBCT scan shows us the bone in three dimensions — density, depth, where the nerve runs. Without this, you\'re guessing.' },
      { step: '02', title: 'Placing the implant', desc: 'The titanium post is placed under local anaesthetic. Most people are surprised it feels easier than an extraction.' },
      { step: '03', title: 'Healing (3–6 months)', desc: 'The bone grows around the implant — this is the part that can\'t be rushed. You\'ll have a temporary tooth in the meantime.' },
      { step: '04', title: 'Fitting the abutment', desc: 'Once the bone is solid, a small connector is fitted onto the implant to hold the crown.' },
      { step: '05', title: 'The crown', desc: 'A custom ceramic crown is made to match your other teeth and screwed or cemented into place.' },
    ],
    whyUs: [
      'Years of implant cases under Dr. Ayesha — including the difficult ones referred from elsewhere',
      'Swiss and Korean implant systems (not the cheap clones)',
      'CBCT-guided placement, not freehand',
      'On-site lab — crowns made here, not posted out',
      'Sedation available if needles or surgery worry you',
    ],
    faqs: [
      { q: 'How long do dental implants last?', a: 'The implant itself can last a lifetime. The crown on top usually needs replacing after 15–20 years — same as any well-used tooth surface.' },
      { q: 'Does it hurt?', a: 'It\'s done under local anaesthetic, and most patients tell us afterwards that an extraction was harder. There\'s some soreness for a couple of days and then it settles.' },
      { q: 'Am I a candidate?', a: 'Most adults are. The two things we look at on the scan are bone volume and general health. If the bone is thin we can sometimes graft; if you\'re a heavy smoker we\'ll talk about that too.' },
      { q: 'What does it cost?', a: 'It depends on how many implants, whether you need a graft, and the type of crown. We give you a written quote after the scan — no surprises later.' },
    ],
    relatedServices: ['teeth-alignment', 'teeth-cleaning', 'in-house-laboratory'],
  },

  {
    slug: 'teeth-alignment',
    title: 'Teeth Alignment',
    subtitle: 'Braces & Invisalign',
    tagline: 'Straighter teeth, on a timeline that fits your life.',
    heroImage: '/website/services/teeth_alignment.jpg',
    color: '#1e88e5',
    overview: `Crowded, gapped, or twisted teeth aren't only a confidence issue — they make brushing harder, wear unevenly, and can throw your bite off over time. We fit metal braces, ceramic braces, lingual braces (behind the teeth), and Invisalign clear aligners. Which one is right for you usually comes down to two things: how much movement is needed, and how visible you're willing for the treatment to be.

We do a digital scan and show you a preview of what your teeth will look like at the end of treatment — that way you're not signing up for something abstract. Children, teens, adults: we treat all of them, and the approach changes for each.`,
    benefits: [
      'Fixes crowding, gaps, overbite, underbite, and crossbite',
      'Invisalign — almost invisible, removable for meals',
      'Easier to brush and floss when teeth aren\'t overlapping',
      'Eases jaw strain and uneven tooth wear over time',
      'Digital preview before you commit',
      'Works for children, teens, and adults — including patients in their 50s',
    ],
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Digital scans, photos, and X-rays of your teeth, bite, and jaw. No moulding goop.' },
      { step: '02', title: 'Plan & preview', desc: 'We map the treatment in software and show you the expected end result. You pick between braces and aligners after seeing both options.' },
      { step: '03', title: 'Fitting', desc: 'Braces are bonded to the teeth, or your first set of aligners is handed over with care instructions.' },
      { step: '04', title: 'Adjustments', desc: 'Roughly monthly for braces, every 6–8 weeks for Invisalign. Quick visits, small movements.' },
      { step: '05', title: 'Retainers', desc: 'Once teeth are where they should be, you get retainers. Wearing them is what stops the teeth drifting back.' },
    ],
    whyUs: [
      'Invisalign Diamond Provider — top tier of certification',
      'Digital Smile Design preview before you commit',
      'Metal, ceramic, and lingual braces all available',
      'Comfortable working with both children and adults',
      'Clear written quotes; EMI options if you need them',
    ],
    faqs: [
      { q: 'How long does it take?', a: 'Invisalign is usually 6–18 months. Braces 12–24 months. Complex bite work can run longer — we\'ll give you a realistic timeline at the consultation.' },
      { q: 'Is Invisalign actually as good as braces?', a: 'For most alignment cases, yes. For some bite corrections braces still do the job better. We\'ll be straight with you about which fits your case.' },
      { q: 'When should my child be checked?', a: 'Around age 7 for a first look — even if treatment doesn\'t start then. Active treatment is usually between 10 and 14.' },
      { q: 'Can adults still get braces?', a: 'Roughly half of our orthodontic patients are adults. Ceramic braces and Invisalign make it much less of a teenage thing than it used to be.' },
    ],
    relatedServices: ['teeth-replacement', 'teeth-whitening', 'preventive-dentistry'],
  },

  {
    slug: 'pain-management',
    title: 'Pain Management',
    subtitle: 'Comfortable, Pain-Free Dental Care',
    tagline: 'For people who put off the dentist because of what it might feel like.',
    heroImage: '/website/services/pain_management.png',
    color: '#43a047',
    overview: `Most adults who avoid the dentist for years don't avoid it because of cost — they avoid it because of one bad experience, usually as a child. We work with a lot of patients in this position. The first appointment isn't about treatment; it's about figuring out what makes you tense and how we can take that off the table.

We use topical numbing gel before any injection, computer-controlled injection (slow, no jab), and nitrous oxide or IV sedation when that helps. None of this is exotic — it's standard care that some clinics skip. We don't.`,
    benefits: [
      'Computer-controlled injection — slow, steady, no jab',
      'Topical numbing applied before any needle goes near you',
      'Nitrous oxide ("laughing gas") if you want to take the edge off',
      'IV sedation for longer or higher-anxiety procedures',
      'Same approach scaled down for children',
      'A calm room, no rushing, time for you to ask questions',
    ],
    procedure: [
      { step: '01', title: 'A talk first', desc: 'Before any treatment, we sit down and go through what worries you, what your medical history is, and what kind of numbing or sedation suits you.' },
      { step: '02', title: 'Topical numbing', desc: 'A gel goes on first. By the time anything else happens, the area is already numb on the surface.' },
      { step: '03', title: 'Slow, steady injection', desc: 'We use an STA system that delivers the anaesthetic gradually instead of in one push. Most patients don\'t realise the injection has happened.' },
      { step: '04', title: 'Sedation, if you want it', desc: 'Nitrous oxide via a small mask or IV sedation through a vein. You stay aware enough to respond, but the anxiety drops away.' },
      { step: '05', title: 'Aftercare', desc: 'We send you off with written instructions, painkillers if needed, and a number to call if anything feels off.' },
    ],
    whyUs: [
      'STA computer-controlled anaesthesia',
      'Certified in conscious sedation and nitrous oxide',
      'Patience over speed — we don\'t rush nervous patients',
      'Tailored protocols for children and phobic adults',
      'A clinic environment built to feel less clinical',
    ],
    faqs: [
      { q: 'I genuinely cannot handle needles. Can you still treat me?', a: 'Yes. We use topical numbing first so you usually don\'t feel the needle at all, and for some procedures we can use needle-free options. Tell us at the consultation and we\'ll work around it.' },
      { q: 'Is nitrous oxide safe?', a: 'Yes — it\'s been used in dentistry for decades. It\'s breathed in through a small mask, makes you feel relaxed but still aware, and wears off within minutes once we take the mask off. You can drive home.' },
      { q: 'And IV sedation?', a: 'Also safe for healthy adults. It\'s done by a trained specialist with continuous monitoring of your pulse and oxygen. You\'ll need someone to take you home afterwards.' },
      { q: 'My child is terrified. What do you do?', a: 'A lot. We have a pediatric approach: tell-show-do, distraction, topical gels, sometimes nitrous oxide. Most children leave more curious than scared.' },
    ],
    relatedServices: ['sedation-dentistry', 'laser-dentistry', 'pediatric-dentistry'],
  },

  {
    slug: 'preventive-dentistry',
    title: 'Preventive Dentistry',
    subtitle: 'Protect Your Smile Before Problems Start',
    tagline: 'The cheapest dental work is the work you avoid needing.',
    heroImage: '/website/services/preventive_dentistry.jpeg',
    color: '#00897b',
    overview: `Most of the painful, expensive dental work people end up with — root canals, extractions, large fillings — could have been a small cleaning two years earlier. Preventive dentistry is the slow, unglamorous part of practice that makes the rest of your life easier. Six-monthly check-ups, a professional clean, an oral cancer screen, fluoride for the kids, sealants on the back teeth that always end up with cavities.

We also pick up things you wouldn't notice yet — early decay, a gum line that's starting to recede, a tooth wearing unevenly because of how you bite. Catching them early is what keeps them small.`,
    benefits: [
      'Catches cavities, gum disease, and oral cancer at a stage they\'re still easy',
      'Removes the plaque and tartar that brushing genuinely can\'t reach',
      'Fluoride to strengthen enamel — especially useful for children',
      'Sealants on back teeth (the ones that always trap food)',
      'Custom mouthguards for grinders and contact sport',
      'A home routine that fits how you actually live',
    ],
    procedure: [
      { step: '01', title: 'Full mouth check', desc: 'Teeth, gums, bite, jaw joints, and the soft tissue inside your mouth. Digital X-rays only when there\'s something we need to see.' },
      { step: '02', title: 'Cleaning', desc: 'Ultrasonic scaler and hand instruments — above and below the gumline. The bit where most home-brushing falls short.' },
      { step: '03', title: 'Oral cancer screen', desc: 'A quick check of the lips, tongue, cheeks, and throat. Two minutes, painless, can save a life.' },
      { step: '04', title: 'Fluoride', desc: 'A varnish or gel painted onto the teeth at the end. Strengthens enamel, painless, takes seconds.' },
      { step: '05', title: 'A plan that\'s honest', desc: 'How often you actually need to come back, what to fix at home, and what isn\'t worth worrying about.' },
    ],
    whyUs: [
      'Digital X-rays — about 90% less radiation than the older film type',
      'Screening that includes oral cancer and TMJ check, not just teeth',
      'Children\'s programme with sealants and fluoride built in',
      'Sensible packages that play well with insurance',
      'Honest advice about home care, not a sales pitch for a fancy brush',
    ],
    faqs: [
      { q: 'How often should I come in?', a: 'Every six months is the standard. If your gums are bleeding regularly or you\'re prone to cavities, every three to four months for a while.' },
      { q: 'When should my child see a dentist for the first time?', a: 'When the first tooth comes through, or around their first birthday. The visit is short and mostly about making the chair feel familiar.' },
      { q: 'Do sealants actually work?', a: 'Yes. Properly placed, they prevent the majority of cavities in the back teeth where most childhood decay starts.' },
      { q: 'Are dental X-rays safe?', a: 'The digital ones we use are very low dose — about a tenth of older film X-rays, and a fraction of what you get on a flight. We only take them when they\'ll change a decision.' },
    ],
    relatedServices: ['teeth-cleaning', 'oral-cancer-screening', 'pediatric-dentistry'],
  },

  {
    slug: 'laser-dentistry',
    title: 'Laser Dentistry',
    subtitle: 'Precision Treatment, Faster Healing',
    tagline: 'Often without the scalpel, the stitches, or the days of recovery.',
    heroImage: '/website/services/laser_dentistry.png',
    color: '#8e24aa',
    overview: `For a lot of soft-tissue dental work, a laser is now genuinely a better tool than a scalpel. It cuts more precisely, seals blood vessels as it goes (so much less bleeding), and sterilises the area at the same time — which is why people heal faster and infection is rarer. We use FDA-approved soft and hard tissue lasers for gum reshaping, cavity preparation, certain biopsies, frenectomy, and treatment of gum disease.

Dr. Ayesha is a certified laser practitioner. Where the laser is the right tool, we use it; where a traditional approach gives a better result, we tell you. There's no point picking the technique by what sounds modern.`,
    benefits: [
      'Often no scalpel and no stitches',
      'Considerably less pain — many soft-tissue procedures need no injection at all',
      'Far less bleeding and swelling, both during and after',
      'Faster healing because the area is sterilised as it\'s treated',
      'Precise — only the tissue we\'re targeting is affected',
      'Particularly useful for children and anxious patients',
    ],
    procedure: [
      { step: '01', title: 'Is the laser the right tool here?', desc: 'Not every procedure is. We talk through what we\'re treating and why a laser does (or doesn\'t) make sense for your case.' },
      { step: '02', title: 'Eyewear on', desc: 'You and the team wear protective glasses — standard precaution.' },
      { step: '03', title: 'Treatment', desc: 'The laser is directed precisely at the area. Soft-tissue work is often done with no injection.' },
      { step: '04', title: 'Sterilisation built in', desc: 'The laser sterilises as it works, which is why infection rates are lower than with traditional methods.' },
      { step: '05', title: 'Aftercare', desc: 'Usually a short list of instructions. Most people get back to their day the same evening.' },
    ],
    whyUs: [
      'FDA-approved soft and hard tissue laser systems',
      'Dr. Ayesha — certified laser dentistry practitioner',
      'Used for gum reshaping, cavities, biopsies, whitening activation and more',
      'Particularly good for children and patients with dental anxiety',
      'A purpose-built laser suite, not a borrowed corner',
    ],
    faqs: [
      { q: 'What can lasers actually do in dentistry?', a: 'Gum reshaping, gum disease treatment, certain cavity preparation, biopsies, cold sore treatment, frenectomy, and activating whitening gel, among other things.' },
      { q: 'Does it hurt?', a: 'Most soft-tissue laser work needs no injection at all. Hard-tissue work needs minimal numbing. Either way, considerably less than the traditional version.' },
      { q: 'Is it safe?', a: 'Yes — FDA-approved dental lasers are well-established and safe in trained hands. Eyewear is the main precaution.' },
      { q: 'Can it be used on children?', a: 'It\'s particularly good for children — no injections for a lot of procedures, less scary, faster healing.' },
    ],
    relatedServices: ['pain-management', 'sedation-dentistry', 'teeth-whitening'],
  },

  {
    slug: 'sedation-dentistry',
    title: 'Sedation Dentistry',
    subtitle: 'Relax through it. Wake up with the work done.',
    tagline: 'For people whose teeth have suffered because the dentist scares them more than the pain.',
    heroImage: '/website/services/sedation_dentistry.webp',
    color: '#3949ab',
    overview: `Dental anxiety isn't rare. We see plenty of patients who haven't sat in a chair in five, ten, fifteen years — and most of them are embarrassed about it, which doesn't help. Sedation dentistry exists for exactly this. It lets us do the work you need without you having to white-knuckle through it.

There are three levels: nitrous oxide (a small mask, light relaxation), oral sedation (a tablet you take an hour before), and IV sedation (deeper, twilight state). We pick what fits your anxiety level and the procedure. With deeper sedation we can also do several treatments in one sitting, instead of stretching them across visits you dread.`,
    benefits: [
      'Treatment becomes possible for patients who\'ve avoided it for years',
      'Several procedures done in a single sitting instead of many',
      'Little or no memory of the appointment with deeper sedation',
      'Helpful for a strong gag reflex',
      'Pediatric protocols for children with severe anxiety',
      'Well-established protocols, continuously monitored',
    ],
    procedure: [
      { step: '01', title: 'Medical & anxiety assessment', desc: 'We go through your medical history and how you actually feel about the dentist, then choose the level of sedation that fits.' },
      { step: '02', title: 'Consent & instructions', desc: 'You\'ll get clear instructions ahead of time — what to eat, when to stop, and whether you need someone to take you home.' },
      { step: '03', title: 'Sedation', desc: 'Nitrous oxide through a mask, an oral tablet, or an IV line — whichever was agreed.' },
      { step: '04', title: 'Treatment', desc: 'We get on with the work while you stay relaxed. Vital signs are monitored throughout.' },
      { step: '05', title: 'Recovery', desc: 'You\'re kept in a recovery space until you\'re fully alert. With IV or oral sedation, a companion takes you home.' },
    ],
    whyUs: [
      'Trained and certified in sedation dentistry',
      'Three levels of sedation — nitrous oxide, oral, IV',
      'Continuous monitoring of pulse, oxygen, blood pressure',
      'Calm, no-judgement environment for patients with phobia',
      'Several procedures consolidated into one comfortable session',
    ],
    faqs: [
      { q: 'What\'s the difference between nitrous oxide and IV sedation?', a: 'Nitrous oxide is light — you stay awake, just relaxed, and it wears off in minutes. IV sedation is deeper. You\'re in a twilight state and usually don\'t remember the appointment afterwards.' },
      { q: 'Will I be unconscious?', a: 'Not under general anaesthesia, no. Even with IV sedation you\'re in twilight — responsive but very relaxed. Most people doze.' },
      { q: 'Is it safe?', a: 'Yes, when done by a trained specialist with monitoring. We track vital signs the whole time.' },
      { q: 'Can my child have sedation?', a: 'Nitrous oxide is regularly used for children and is safe. For deeper sedation in children we have specific pediatric protocols.' },
    ],
    relatedServices: ['pain-management', 'laser-dentistry', 'pediatric-dentistry'],
  },

  {
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    subtitle: "Caring for Your Child's Smile",
    tagline: "The dental visit your child won't dread coming back to.",
    heroImage: '/website/services/pediatric_dentistry.png',
    color: '#F59E0B',
    overview: `How a child's first few dental visits go shapes how they feel about the dentist for the rest of their lives. We take that seriously. Our pediatric area has games, TV, and people who genuinely like working with kids — which sounds obvious, but isn't always the case in dental practice.

We see children from the first tooth through to their teens: routine check-ups, fluoride, sealants, early orthodontic checks, and the occasional filling. Our default is the gentlest technique that does the job, often without an injection.`,
    benefits: [
      'A waiting area designed for children, not retrofitted for them',
      'A team trained specifically in working with kids',
      'Tell-show-do approach — no surprises, no being held down',
      'Early spotting of bite or alignment issues',
      'Sealants and fluoride to head off cavities before they start',
      'Stickers, small prizes, and a positive end to the visit',
    ],
    procedure: [
      { step: '01', title: 'Saying hello', desc: "We don't start with treatment. We give your child time to look around, meet the team, sit in the chair, decide it's not scary." },
      { step: '02', title: 'A look in the mouth', desc: 'A proper but unhurried check — counting teeth, looking at gums, the bite, how the jaw is developing. We narrate everything so it isn\'t a mystery.' },
      { step: '03', title: 'Cleaning', desc: 'Flavoured paste and a soft electric brush. Plaque comes off; the experience stays light.' },
      { step: '04', title: 'Fluoride & sealants', desc: 'Fluoride varnish is painted on at the end. Sealants on the molars take a couple of minutes and are painless.' },
      { step: '05', title: 'Talking to the parent', desc: 'How brushing is going at home, what to watch for, what to ignore. Then a sticker for the child and you\'re both out of there.' },
    ],
    whyUs: [
      'A pediatric area designed for children — games, screens, the lot',
      'Team trained in child behaviour management',
      'Needle-free options for many treatments',
      'Sealant programme for school-age kids',
      'Most children leave more curious than scared',
    ],
    faqs: [
      { q: 'When should I bring my child in for the first time?', a: 'When the first tooth appears, or around the first birthday. The visit is short and is mostly about getting them comfortable in the chair.' },
      { q: 'My child is petrified. Can you handle that?', a: 'Yes — we see this often. We use tell-show-do, take it slowly, and where it helps, nitrous oxide makes the appointment manageable.' },
      { q: 'Do milk teeth really need treating? They\'re going to fall out anyway.', a: 'Yes. Untreated decay in milk teeth causes real pain, can spread to the gum and bone, and affects how the adult teeth come through. They matter.' },
      { q: 'When should my child see an orthodontist?', a: 'A first check around age 7 is sensible — even if no treatment is needed yet. Early enough to catch things, not so early that anything has to be done.' },
    ],
    relatedServices: ['preventive-dentistry', 'pain-management', 'sedation-dentistry'],
  },

  {
    slug: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    subtitle: 'Professional Scaling & Polishing',
    tagline: 'The bit your toothbrush genuinely cannot do.',
    heroImage: '/website/services/teeth_cleaning.png',
    color: '#00acc1',
    overview: `Even if you brush twice a day and floss like you mean it, tartar still builds up — particularly along the gumline and on the inside of the lower front teeth. It hardens, traps bacteria, and is the slow-burn cause of gum disease, decay, and the bad breath that toothpaste can't fix.

Our hygienists use ultrasonic scaling and hand instruments to clean above and below the gumline, then polish surface stains away. Most patients leave running their tongue across their teeth, surprised at how smooth they feel.`,
    benefits: [
      'Removes the tartar that home brushing has no chance with',
      'Stops gingivitis turning into the more serious kind of gum disease',
      'Lifts surface stains — coffee, tea, tobacco',
      'Bad breath caused by gum bacteria settles down',
      'Catches small cavities and gum issues early',
      'That just-cleaned, smooth feeling that lasts a week',
    ],
    procedure: [
      { step: '01', title: 'Quick check first', desc: 'We look at the gums, existing fillings, and anything that\'s changed since last time before starting.' },
      { step: '02', title: 'Ultrasonic scaling', desc: 'A small vibrating tip with water — breaks up tartar including the bits below the gumline that you\'ve never been able to reach.' },
      { step: '03', title: 'Hand scaling', desc: 'Fine instruments to clear anything the ultrasonic missed, especially between teeth.' },
      { step: '04', title: 'Polish', desc: 'A flavoured paste and a rotating brush to smooth the tooth surface and lift staining.' },
      { step: '05', title: 'Fluoride', desc: 'A varnish or rinse at the end to strengthen the enamel.' },
    ],
    whyUs: [
      'Piezon ultrasonic — gentle, far better than the older units',
      'Hygienists who can actually read your gum health, not just clean',
      'Periodontal check built into every cleaning visit',
      'Honest advice on your home routine',
      'A nudge when your six months is up',
    ],
    faqs: [
      { q: 'Does cleaning hurt?', a: 'For most people, no — it\'s pressure rather than pain. If your gums are sensitive we slow down or apply some topical numbing.' },
      { q: 'How often?', a: 'Every six months covers most adults. If your gums bleed, or you build tartar quickly, every three to four months for a while.' },
      { q: 'Will it whiten my teeth?', a: 'It\'ll lift surface stains and the teeth will look noticeably brighter. For whitening beyond your natural shade, that\'s a separate treatment.' },
      { q: 'Will cleaning make my teeth wobble?', a: 'No — that\'s a myth. What can happen: tartar was filling the gaps between teeth, and once it\'s gone the gaps feel more obvious. The teeth themselves are healthier.' },
    ],
    relatedServices: ['teeth-whitening', 'preventive-dentistry', 'oral-cancer-screening'],
  },

  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    subtitle: 'Professional In-Chair & Take-Home Whitening',
    tagline: 'A noticeably brighter smile, in one sitting or over a couple of weeks at home.',
    heroImage: '/website/services/teeth_whitening.png',
    color: '#fdd835',
    overview: `Whitening toothpastes and strip kits are mostly underwhelming — they work on the very outer stains, and a bit of sensitivity often comes along for the ride. Professional whitening is a different category: stronger gel, applied properly, with the gums protected. The result is real, visible, and lasts.

Two options here: in-chair whitening (60–90 minutes, biggest jump in shade in one go) using laser or LED activation, or take-home trays we custom-fit for you so you can whiten gradually over a couple of weeks. Both are supervised so the result is even and the enamel stays healthy.`,
    benefits: [
      'Eight to ten shades brighter in a single chair-side session',
      'Done by a dentist — gums protected, enamel safe',
      'Holds far longer than supermarket kits',
      'Custom-fitted home trays if you prefer to go gradually',
      'Laser or LED activation for the in-chair version',
      'Useful timing before a wedding, graduation, or interview',
    ],
    procedure: [
      { step: '01', title: 'Check first', desc: 'We look for cavities, sensitive areas, or gum issues that need sorting before we whiten. Existing crowns and veneers won\'t change shade — we\'ll talk about that.' },
      { step: '02', title: 'A clean', desc: 'Surface plaque and staining come off first so the gel works on actual enamel rather than the layer over it.' },
      { step: '03', title: 'Gum protection', desc: 'A rubber dam or protective gel goes onto the gums so the whitening agent only touches teeth.' },
      { step: '04', title: 'The gel', desc: 'Professional-strength hydrogen peroxide gel is applied to the front of each tooth.' },
      { step: '05', title: 'Light & reveal', desc: 'Laser or LED activates the gel. Three or four 15-minute rounds, then we compare to the starting shade. The change is usually obvious.' },
    ],
    whyUs: [
      'ZOOM! and Philips whitening systems — the established professional kits',
      'In-chair (60–90 min) or take-home options',
      'Safe for enamel and gums when supervised',
      'Shade recorded before and after — no guesswork',
      'Desensitising protocol for anyone prone to it',
    ],
    faqs: [
      { q: 'How long do the results last?', a: 'In-chair whitening usually holds for 1–2 years with sensible care. A short top-up keeps it where it was.' },
      { q: 'Is it safe?', a: 'Yes, when supervised. The gels are formulated to whiten without damaging enamel, and we monitor for sensitivity.' },
      { q: 'Will it make my teeth sensitive?', a: 'Some people get mild sensitivity for a day or two. We apply desensitiser as we go to keep this to a minimum.' },
      { q: 'Will it whiten crowns, veneers, or fillings?', a: 'No — whitening only changes natural enamel. If you have visible restorations and you want everything matching, those would need replacing afterwards.' },
    ],
    relatedServices: ['teeth-cleaning', 'teeth-alignment', 'laser-dentistry'],
  },

  {
    slug: 'oral-cancer-screening',
    title: 'Oral Cancer Screening',
    subtitle: 'Early Detection Saves Lives',
    tagline: 'Five minutes. Painless. Genuinely worth doing.',
    heroImage: '/website/services/preventive_dentistry.jpeg',
    color: '#7B6CF6',
    overview: `Oral cancer is one of the most common cancers in India, largely because of how widespread tobacco and pan use are. The reassuring part: caught early, the survival rate is high. Caught late, it isn't. That's why we screen every patient at every routine check-up — it costs you no extra time and isn't an extra fee.

The exam takes a few minutes. We look at the lips, tongue, cheeks, floor of the mouth, palate, and throat, feel the neck for swollen nodes, and use a VELscope fluorescence light that makes early cellular changes visible before you'd see them in a mirror.`,
    benefits: [
      'Catches problems at the stage they\'re most treatable',
      'Painless — under five minutes',
      'VELscope fluorescence to spot what the naked eye can\'t',
      'Included in every check-up, no separate fee',
      'Done by a specialist trained in oral medicine',
      'Particularly important if you smoke, chew pan, or drink regularly',
    ],
    procedure: [
      { step: '01', title: 'A few questions first', desc: 'Tobacco (smoked or chewed), alcohol, HPV history, sun exposure on the lips. None of this is judgemental — it just changes what we look for.' },
      { step: '02', title: 'Visual exam', desc: 'A careful look at every part of the mouth, lips, throat, and tongue under good light.' },
      { step: '03', title: 'Feeling for changes', desc: 'We feel the lymph nodes in the neck and the floor of the mouth — lumps you wouldn\'t notice show up here.' },
      { step: '04', title: 'VELscope', desc: 'A blue light device that makes healthy tissue glow green; abnormal tissue shows dark. It picks up changes earlier than visual inspection alone.' },
      { step: '05', title: 'Result', desc: 'If everything looks normal, that\'s the appointment. If anything looks suspicious, we biopsy or refer the same day — no waiting.' },
    ],
    whyUs: [
      'Dr. Ayesha — trained in oral medicine and radiology',
      'VELscope fluorescence as part of routine screening',
      'Done at every check-up, not as an upsell',
      'On-site biopsy when it\'s needed',
      'Direct referral to oncology if a result calls for it',
    ],
    faqs: [
      { q: 'Who should get screened?', a: 'Everyone, ideally — but especially anyone over 18 who smokes, chews tobacco or pan, drinks regularly, or has had oral HPV. We screen all our patients without you having to ask.' },
      { q: 'Does it hurt?', a: 'No. It\'s a visual exam plus light pressure on the neck and floor of the mouth. Five minutes.' },
      { q: 'What should I look out for at home?', a: 'A white or red patch that won\'t go away, a sore that hasn\'t healed in two weeks, a lump in the mouth or neck, trouble swallowing, or bleeding you can\'t explain.' },
      { q: 'How often should I be screened?', a: 'Every six to twelve months as part of your check-up. Every six months if you fall in the higher-risk group.' },
    ],
    relatedServices: ['preventive-dentistry', 'teeth-cleaning', 'laser-dentistry'],
  },

];

export const getServiceBySlug = (slug) => servicesData.find(s => s.slug === slug);
export const getRelatedServices = (slugs) => servicesData.filter(s => slugs.includes(s.slug));
