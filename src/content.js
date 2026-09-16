/* ============================================================
   content.js
   Every word, image path and destination on the site lives here.
   Edit this file to change the site. No other file needs touching
   for normal copy, photo or destination updates.
   ============================================================ */

export const brand = {
  org: "RealLives Foundation",
  programme: "RealLives to RealWorld",
  tagline: "The ChangeMaker Journey",
  arc: ["Live", "Understand", "Experience", "Reflect", "Change"],
  sites: ["reallivesworld.com", "changemakerindex.com"],
  contact: {
    name: "Dr. Parag Mankeekar",
    role: "Chief Curator, RealLives Foundation",
    email: "parag@reallivesworld.com",
    phone: "+91 98220 57393",
    linkedin: "linkedin.com/in/reallives",
  },
};

export const nav = [
  { path: "/the-idea", label: "The idea" },
  { path: "/method", label: "The method" },
  { path: "/what-it-builds", label: "What it builds" },
  { path: "/destinations", label: "Destinations" },
  { path: "/korea", label: "Korea 2026" },
  { path: "/who-leads", label: "Who leads it" },
  { path: "/schools", label: "For schools" },
];

export const moreNav = [
  { path: "/contact", label: "Contact" },
];

export const hero = {
  kicker: "RealLives Foundation",
  /* Swap headline and standfirst for any of the alternates in
     heroAlternates below if you want a different opening note. */
  headline: ["A country is not a destination.", "It is a case study."],
  standfirst:
    "We take young people to nations that rebuilt themselves, and we train them to read how it was done. They come home with a way of seeing the world that most people acquire, if ever, twenty years later.",
  meta: ["Ages 14 and above", "First journey: South Korea, October 2026", "Teams in India and on the ground"],
  primaryCta: { label: "See the Korea journey", href: "/korea" },
  secondaryCta: { label: "Bring this to your school", href: "/schools" },
  script: ["한국", "변화", "참", "미래"],
  image: "/assets/hero-seoul-student.jpg",
  badge: { country: "South Korea", line: "Education · Innovation · Opportunity" },
  highlights: [
    { title: "World-class education system" },
    { title: "Young, innovative society" },
    { title: "From resilience to global leadership" },
  ],
  flourish: "Real People, Real Countries, Real Change.",
};

export const featured = {
  kicker: "Featured destinations",
  title: "Learn from countries that changed themselves",
  intro:
    "Each destination is a living classroom — a place where real challenges, bold ideas and everyday people show how change happens.",
  cta: { label: "Explore all destinations", href: "/destinations" },
  items: [
    {
      kicker: "Korea 2026",
      title: "South Korea",
      tags: "Innovation · Education · Global Mindset",
      meta: ["October 2026", "Ages 14+"],
      blurb: "The first ChangeMaker journey — a nation rebuilt in a generation, read as a living case study.",
      href: "/korea",
      image: "/assets/card-korea.jpg",
    },
    {
      kicker: "Universities",
      title: "Global Universities",
      tags: "Research · Diversity · Impact",
      meta: ["Multiple institutions", "Ages 16+"],
      href: "/destinations",
      image: "/assets/card-universities.jpg",
    },
    {
      kicker: "Schools",
      title: "International Schools",
      tags: "Leadership · Collaboration · Future Skills",
      meta: ["Selected schools", "Ages 14+"],
      href: "/schools",
      image: "/assets/card-schools.jpg",
    },
  ],
};

export const heroAlternates = [
  "They arrive as students. They leave as changemakers.",
  "Some lessons cannot be taught in a classroom. They have to be lived.",
  "Ten days abroad can be a holiday, or it can be the turning point.",
  "We do not show students a country. We teach them to read one.",
];

export const idea = {
  title: "Three things this is not",
  intro:
    "Every thoughtful parent and every principal asks the same honest question before they say yes. Here is the answer, in the order the question is usually asked.",
  cards: [
    {
      not: "Not a tour.",
      is: "A learning journey.",
      body: "Nobody follows a guide with a flag. Students are handed a lens: a trained way to walk into any city, read its hidden systems, and stay sharp in a complex world.",
    },
    {
      not: "Not a cost.",
      is: "An investment.",
      body: "The return is not a passport stamp. It is a way of seeing, a set of skills, and a first real glimpse of the kind of person a young person could become.",
    },
    {
      not: "Not a souvenir.",
      is: "A measured result.",
      body: "Every participant finishes with a certificate and a personal ChangeMaker Index report, with a before and after reading of their actual growth across 18 competencies.",
    },
  ],
  pledge: {
    label: "The one thing every journey is built to do",
    body: "Give a young person the entrepreneurial and innovation ability to look at the world, spot what could be built, and gain the insight, and the confidence, to start an idea of their own.",
  },
};

export const arc = {
  title: "One continuous arc, not ten days",
  intro:
    "It begins months before the flight and lands back home as a public contribution. The journey abroad is the spark. The growth is the whole arc.",
  steps: [
    { n: 1, name: "Live", body: "Students live other lives inside the RealLives simulation, across 193 countries." },
    { n: 2, name: "Understand", body: "Weekend workshops at home: design thinking, research, problem framing, the SDGs." },
    { n: 3, name: "Experience", body: "The immersion itself, on the ground, run as a sequence of field labs." },
    { n: 4, name: "Reflect", body: "Daily journals, a self video every evening, and a comparison diary against their own country." },
    { n: 5, name: "Change", body: "A public exhibition, a press conference and a community project back home, with a measured RCMI result." },
  ],
  footnote:
    "Most of the value is built at home, before and after. That is the part a holiday can never replicate.",
};

export const method = {
  title: "A city becomes a classroom",
  intro:
    "The whole model runs on one rigorous idea: a student learns most when a real place becomes a lesson they are trained to read. We call each of these a RealWorld Experiential Lab. The city is observed, questioned and decoded the way an anthropologist reads a culture. This is fieldwork, not sightseeing.",
  rhythm: {
    label: "A daily rhythm that protects depth",
    note: "One demanding block a day, never three. Reflection needs room to breathe.",
    blocks: [
      { when: "Morning", body: "Institutions and focused fieldwork, while minds are fresh and streets are calm." },
      { when: "Afternoon", body: "The main doing: markets, workshops, cooking, culture, making." },
      { when: "Evening", body: "Youth culture and the city at night, observed by wandering." },
    ],
  },
  matrix: {
    label: "The Observation Matrix",
    intro:
      "Five disciplined ways of capturing a place, which turn wandering into research. Each one maps to a ChangeMaker competency, so reading the city is building the skill.",
    modes: [
      { name: "Observe", hint: "watch a system", body: "Watch one behaviour or system closely until you can describe how it actually works, not how it is advertised." },
      { name: "Interview", hint: "ask a stranger", body: "Ask one honest question of one real person, and record the real answer rather than the expected one." },
      { name: "Photograph", hint: "frame meaning", body: "Frame a detail that carries a value. A photograph made to argue something, not to be posted." },
      { name: "Sketch", hint: "look slowly", body: "Draw it. Slow, deliberate looking is the only way to notice what a camera skips." },
      { name: "Note", hint: "what it means", body: "Write what you saw, then what it means at home. The second half is where the learning lives." },
    ],
  },
  lenses: {
    label: "Six teams, one mission",
    intro:
      "Students split into six groups, each carrying a specialist lens for the whole journey. Back home the six lenses assemble into one complete picture, which is how they decode a national model rather than bring back six copies of the same postcard.",
    items: [
      { name: "Order & Trust", q: "How does it stay functional when nobody is watching?" },
      { name: "Beauty & Speed", q: "How does it look, and how does it move so fast?" },
      { name: "Pride & Purpose", q: "Why does all of this matter so deeply to them?" },
      { name: "Making & Innovation", q: "How is it built, and who is it built for?" },
      { name: "Effort & Craft", q: "What does the relentless effort actually cost?" },
      { name: "People & Belonging", q: "How do people treat each other and the commons?" },
    ],
  },
  contrast: {
    a: { label: "A sightseeing tour", points: ["You are shown a place", "You take a photo", "You move on", "You remember a view"] },
    b: { label: "A RealWorld Experiential Lab", points: ["You are given a question", "You read the system", "You interview a stranger", "You leave changed"] },
  },
  labStructure: {
    label: "Inside a single lab",
    intro: "Every lab runs two to three hours with the same disciplined structure.",
    steps: [
      { n: 1, name: "Objectives", body: "Set before they go in" },
      { n: 2, name: "Field toolkit", body: "Photos, video, notes, interviews, sketches" },
      { n: 3, name: "Assessment", body: "Measured after, not for grades" },
      { n: 4, name: "RealBoard", body: "Every capture, live" },
      { n: 5, name: "Growth report", body: "Feeds the ChangeMaker Index" },
    ],
  },
};

export const builds = {
  title: "What a journey builds in a young person",
  intro:
    "Ten days abroad can be a holiday, or it can be a turning point. Beneath every visit, workshop and conversation runs one quiet aim: to grow the inner qualities a young changemaker will draw on for the rest of their life.",
  qualities: [
    { name: "A design mindset", body: "Seeing problems as things that can be reshaped, and prototyping an answer instead of waiting for one." },
    { name: "Genuine curiosity", body: "Leaning into the unfamiliar with wonder instead of hesitation, the habit behind every discovery." },
    { name: "Finding their passion", body: "A first, clearer glimpse of this is the kind of person I could become." },
    { name: "An innovation instinct", body: "Standing inside a culture that chose to build gives a young person permission to think big." },
    { name: "Empathy and civic sense", body: "Global problems stop being abstract and start feeling human and close." },
    { name: "The courage to begin", body: "The quiet conviction that they can start contributing now, not someday." },
  ],
  transformation: {
    before: {
      label: "A student who arrives",
      points: ["Curious but unsure", "Waits to be told", "Sees a country as a place to visit", "Problems feel abstract", "Unsure their ideas matter"],
    },
    after: {
      label: "A changemaker who returns",
      points: ["Reads hidden systems", "Takes initiative", "Sees a country as a case study", "Problems feel solvable", "Believes an idea can start with them"],
    },
  },
  rcmi: {
    label: "Measured, not asserted",
    intro:
      "The RealLives ChangeMaker Index grew out of a suggestion from Nobel Laureate Prof. James Heckman. It reads what a young person actually does, inside the simulation and in the field, rather than what they say about themselves on a questionnaire. Eighteen competencies sit across four clusters.",
    clusters: [
      {
        name: "Personal",
        body: "Mastering yourself first: self awareness, resilience, initiative, ethical judgement.",
        items: ["Self awareness", "Resilience", "Initiative", "Ethical judgement"],
      },
      {
        name: "Interpersonal",
        body: "Connecting with and mobilising others: empathy, collaboration, communication, leadership.",
        items: ["Empathy", "Collaboration", "Communication", "Leadership"],
      },
      {
        name: "Strategic thinking",
        body: "The intellectual toolkit: critical thinking, creativity, problem solving, systems thinking.",
        items: ["Critical thinking", "Creativity", "Problem solving", "Systems thinking"],
      },
      {
        name: "Contextual awareness",
        body: "Grounding effort in responsibility: social awareness, global citizenship, sustainability, civic sense.",
        items: ["Social awareness", "Global citizenship", "Sustainability", "Civic sense"],
      },
    ],
    note:
      "Replace the competency names above with the canonical eighteen from changemakerindex.com before launch.",
  },
  outcomes: [
    {
      name: "I am a ChangeMaker certificate",
      body: "Recognition for a young person who has completed a demanding empathy to action journey. A real, credible addition to a portfolio and to applications.",
    },
    {
      name: "A personal ChangeMaker Index report",
      body: "Eighteen competencies, read before and after, so growth is visible to the student, to you, and to any institution that asks.",
    },
  ],
};

/* ------------------------------------------------------------
   DESTINATIONS
   South Korea is live. The rest are the programme pipeline.
   Set status to "open" | "design" | "proposed" and the card
   styles itself. Add a country by adding an object here.
   ------------------------------------------------------------ */
export const destinations = {
  title: "One method. Many countries.",
  intro:
    "The method does not belong to Korea. It belongs to any nation with a question worth decoding. Each journey is chosen because a young Indian standing inside it will ask a different, useful question about their own country.",
  items: [
    {
      country: "South Korea",
      script: "한국",
      status: "open",
      when: "October 2026",
      question: "How does a nation rebuild itself inside one lifetime?",
      body: "In the 1950s Korea was poorer than much of India. Within a single lifetime, through education, discipline, civic sense and technology, it became one of the most advanced societies on earth. For a young Indian that is a living answer to the changemaker's question: if they could do it, why not us.",
      href: "/korea",
    },
    {
      country: "Thailand",
      script: "ไทย",
      status: "design",
      when: "In design for 2027",
      question: "How does a culture modernise without losing its temperament?",
      body: "A student and teacher exchange built around a country that industrialised fast and stayed itself. Designed with partner universities already running RealLives.",
    },
    {
      country: "Japan",
      script: "日本",
      status: "proposed",
      when: "Proposed",
      question: "How does a society make quality an ordinary habit?",
      body: "Craft, maintenance, public order and the discipline of doing small things properly, over decades.",
    },
    {
      country: "Singapore",
      script: "新加坡",
      status: "proposed",
      when: "Proposed",
      question: "What happens when a country is designed on purpose?",
      body: "Housing, water, schooling and clean governance, treated as engineering problems by a nation with no natural advantages.",
    },
    {
      country: "Vietnam",
      script: "Việt Nam",
      status: "proposed",
      when: "Proposed",
      question: "How does a young nation leapfrog?",
      body: "Manufacturing, a very young workforce, and a country moving faster than its own infrastructure.",
    },
    {
      country: "Rwanda",
      script: "u Rwanda",
      status: "proposed",
      when: "Proposed",
      question: "How does a nation heal, and then build?",
      body: "Reconciliation, civic discipline and a leap into digital governance, in a country that had every reason to stay broken.",
    },
    {
      country: "Estonia",
      script: "Eesti",
      status: "proposed",
      when: "Proposed",
      question: "What does a country get right when it trusts software and teachers?",
      body: "A digital state run by a million people, and a school system that quietly outperforms most of the world.",
    },
    {
      country: "United Arab Emirates",
      script: "الإمارات",
      status: "proposed",
      when: "Proposed",
      question: "What can ambition build in fifty years?",
      body: "A desert economy that chose aviation, trade, tolerance and tourism, and executed on all four.",
    },
  ],
  invite: {
    label: "Schools choose the question",
    body: "If your school has a partner country, a sister school or a curriculum theme, the method travels. We design the journey around the question your students should be asking.",
  },
};

export const korea = {
  title: "The first journey: South Korea",
  standfirst:
    "Seventy years ago a river ran through the ashes of a ruined city. Seoul lay flattened, and Korea was among the poorest places on earth. Within one human lifetime the farmers' grandchildren came to design the phones in our pockets and the culture on our screens. We take students to stand inside that answer.",
  meta: ["October 2026", "Ages 14 and above", "Nine days on the ground"],
  transformation: [
    { from: "1953", to: "Today", body: "One of the world's poorest nations into a top fifteen global economy." },
    { from: "Ruins", to: "Skylines", body: "A war flattened capital into a global technology and culture hub." },
    { from: "Aid", to: "Invention", body: "Dependent on foreign aid, into a home of world shaping industry and design." },
  ],
  honest: {
    label: "The honest picture students study before they go",
    intro:
      "Real understanding means seeing a country whole. In groups, students research the achievements and the tensions, so they arrive able to ask sharper questions and draw balanced conclusions.",
    columns: [
      { name: "The rise", body: "Education, discipline, civic sense, the innovation economy, design and culture as global exports." },
      { name: "The cost", body: "Intense academic pressure, long working hours, youth stress, an ageing society, the price of relentless effort." },
      { name: "The systems", body: "World class public transport, safety and trust, urban design, technology in daily life." },
      { name: "The questions", body: "What should India adopt, what should it avoid, and what is worth building in our own way?" },
    ],
  },
  labs: [
    { n: 1, name: "Samsung Innovation Lab", body: "Inside a global technology giant" },
    { n: 2, name: "SK Innovation Lab", body: "Energy and future materials" },
    { n: 3, name: "Hyundai Innovation Lab", body: "Mobility and the making of things" },
    { n: 4, name: "Start-Up Lab", body: "A founder's mindset, and a pitch of their own" },
    { n: 5, name: "Seoul Public Transport Lab", body: "Decoding a world class system" },
    { n: 6, name: "COEX & Starfield Library Lab", body: "Retail design and the world's grandest mall library" },
    { n: 7, name: "Diplomacy Lab", body: "Meeting the Ambassador of India" },
    { n: 8, name: "Defector Lab", body: "A North Korean's story, first hand" },
    { n: 9, name: "Yeomyung School Lab", body: "Our students become teachers" },
    { n: 10, name: "Fish Market Lab", body: "Noryangjin, work and business at dawn" },
    { n: 11, name: "Food Culture Lab", body: "Cooking a Korean meal together" },
    { n: 12, name: "Heritage Lab", body: "Palaces, hanok and hanbok" },
    { n: 13, name: "K-Pop Culture Lab", body: "Inside a global creative industry" },
    { n: 14, name: "Myeongdong Lab", body: "K-beauty, tourism and the street food economy" },
    { n: 15, name: "Youth Culture Lab", body: "Hongdae and Seongsu after dark" },
    { n: 16, name: "Sustainability Lab", body: "Upcycling and climate smart design" },
  ],
  labsNote:
    "A representative sixteen. The full journey carries more than twenty labs across nine days, including university and study pathway visits.",
  spotlights: [
    {
      kicker: "The mission central day",
      name: "RealLives Lab at Yeomyung School",
      body: "Our students stop being visitors and become teachers. At a Seoul school for North Korean refugee youth they lead students through the RealLives simulation, train the teachers to keep using it, present the ChangeMaker journey to the whole school, and are hosted for lunch. Every student at that school cleans it themselves, every single day, which is the quietest and most powerful civic lesson of the trip.",
      builds: "Leadership, empathy, initiative",
      image: "/assets/yeomyung-school.jpg",
    },
    {
      kicker: "Lab spotlight",
      name: "The Diplomacy Lab",
      body: "Students step inside India's diplomatic home in Korea, interview the Ambassador on diplomacy, trade, culture and what it means to represent a nation, then present their own school and the RealLives concept. Representation practised, not described.",
      builds: "Conviction, cross cultural reading, public poise",
      image: "/assets/embassy-ambassador.jpg",
    },
    {
      kicker: "Lab spotlight",
      name: "The Defector Lab",
      body: "Students sit with a woman who escaped North Korea and hear, first hand, what division does to a human life: the everyday reality beyond the headlines, how an escape happens, what it costs, and how a person rebuilds an identity in freedom. Facilitated, age appropriate, and handled with dignity rather than spectacle.",
      builds: "Deep empathy, perspective, gratitude",
      image: null,
      glyph: "참",
    },
    {
      kicker: "Culture labs",
      name: "Cooking, palaces and the hanbok",
      body: "Students cook a Korean meal, stand inside Gyeongbokgung and the hanok quarter, and wear the hanbok. Culture felt on their own shoulders rather than photographed from outside, with the India mirror asked every time: what do we quietly treasure, and still protect?",
      builds: "Cultural literacy, cooperation, respect",
      image: "/assets/hanbok-palace.jpg",
    },
  ],
  homecoming: {
    title: "The journey ends in public, at home",
    intro:
      "Not at the airport. Three culminating acts turn ten days of experience into lasting skill, and a personal journey into a public good.",
    items: [
      {
        n: 1,
        name: "A public exhibition in Pune",
        body: "The fifty to seventy five best photographs become a ticketed public exhibition, the whole Korean model told by young Indians. Students run live workshops at the venue, and the money they earn is theirs to see, understand and manage: a first real taste of building something people value.",
        learns: "Content driven entrepreneurship",
      },
      {
        n: 2,
        name: "A press conference",
        body: "Students face the media and present what they learned, standing behind their own findings in public.",
        learns: "Voice, poise and public accountability",
      },
      {
        n: 3,
        name: "A social campaign",
        body: "They share their work across social media as an example of pushing thoughtful, positive content that earns genuine attention.",
        learns: "Digital storytelling for good",
      },
    ],
  },
  gallery: [
    { src: "/assets/seoul-skyline.jpg", caption: "Seoul: one lifetime from rubble to this" },
    { src: "/assets/myeongdong.jpg", caption: "Myeongdong: a street read as an economy" },
    { src: "/assets/korean-food.jpg", caption: "Food Culture Lab: a nation read through its table" },
    { src: "/assets/korea-reallives-host.jpg", caption: "Korean partners already running RealLives" },
  ],
};

export const tool = {
  title: "The tool they capture it all on",
  sub: "Learning to see the real world, not just make a reel",
  body:
    "Every student carries RealBoard through the journey. They capture each lab with photos, videos, notes and interviews, write a daily reflection, and record a short self video of what they felt. It is a private, protected network where students share real observations with each other: an antidote to the endless reel, and a training in looking at the world with purpose.",
  features: [
    { name: "Capture everything, live", body: "Photos, videos, notes and interviews sync instantly across devices, on iOS and Android." },
    { name: "A safe, private network", body: "Students share and learn from each other inside a closed group, fully protected." },
    { name: "Insight, generated", body: "Auto generated key points, reports and the ChangeMaker Index." },
    { name: "A daily close", body: "A written reflection and an emotional self video, every evening." },
  ],
  watchers: {
    label: "For parents, teachers and mentors",
    body: "Through a secure, private web link you can follow the journey day by day, every activity and every reflection, as a trusted watcher with view only access. You are part of what your child is experiencing, in real time and far away.",
  },
  image: "/assets/realboard-app.jpg",
};

export const leader = {
  title: "Who leads this",
  name: "Dr. Parag Mankeekar",
  roles: ["Chief Curator", "Ashoka Fellow", "Salzburg Global Fellow"],
  standfirst:
    "A medical doctor with a postgraduate degree in Medical Anthropology, who has spent more than twenty years building the RealLives simulation, and a lifetime learning in the field rather than from a desk.",
  portrait: "/assets/leader-ceo.jpg",
  photosLabel: "In the field",
  photosTitle: "Rooms that took years to enter",
  pathLabel: "The path",
  pathTitle: "How a lifetime became the method",
  bio: [
    "A recipient of the TropEd Europe Fellowship, he studied across sixteen leading European universities in medicine, public health, management and beyond. He has been part of four hospitals, working alongside eminent doctors and contributing to the planning and design of the hospitals themselves.",
    "He has worked in disaster preparedness and in areas affected by terrorism, in Punjab on the border with Pakistan, and in Afghanistan in 2002 and again in 2014 with USAID. He is a mountaineer who has stood with legends of the Himalaya. He has met one to one with three Prime Ministers of India.",
    "He knows first hand that the deepest lessons are lived rather than taught, and brings that same spirit to every student he guides: read the real world closely, keep your feet on the ground, and let each journey change how you see.",
  ],
  timeline: [
    { when: "1986", what: "Pune to Kanyakumari", body: "The first long journey, taken as a young person. The habit of learning by travelling starts here." },
    { when: "1987", what: "Pune to Kathmandu", body: "Further, harder, and across a border." },
    { when: "1988", what: "Pune to Kashmir", body: "The third expedition, and the beginning of a lifelong method." },
    { when: "Medicine", what: "Four hospitals, and their design", body: "Practising alongside eminent doctors, and helping plan and design the hospitals themselves." },
    { when: "TropEd", what: "Sixteen European universities", body: "A fellowship across medicine, public health and management, and a postgraduate degree in Medical Anthropology." },
    { when: "2002 & 2014", what: "Afghanistan, with USAID", body: "Field work in emergency and disaster management, and in areas affected by terrorism." },
    { when: "Himalaya", what: "Mountaineering", body: "Time spent with legends of the range, and the discipline a mountain teaches." },
    { when: "Since 2000", what: "RealLives", body: "Building a life simulation drawing on data from 193 countries, now used by schools and universities across North America, Europe and Asia." },
    { when: "With Prof. Heckman", what: "The ChangeMaker Index", body: "A suggestion from the Nobel Laureate seeded a way to measure character through behaviour rather than self report." },
    { when: "Three times", what: "Prime Ministers of India", body: "One to one meetings, including presenting the RealLives concept to Hon'ble PM Shri Narendra Modi." },
  ],
  photos: [
    { src: "/assets/parag-pm-modi.jpg", caption: "Presenting RealLives to Hon'ble Prime Minister Shri Narendra Modi" },
    { src: "/assets/parag-afghanistan.jpg", caption: "Field work in Afghanistan, 2002 and 2014, with USAID" },
    { src: "/assets/korean-educators.jpg", caption: "With Korean educators in Seoul. These doors were years in the building." },
    { src: "/assets/parag-global.jpg", caption: "A global network of social innovators, through Ashoka and Salzburg Global" },
  ],
  cards: [
    {
      name: "A real network in the destination",
      body: "This is never a first arrival. Multiple Korean schools already use RealLives, and the relationships with educators and institutions are personal and long standing. The doors a journey opens are doors already built.",
    },
    {
      name: "A global changemaking network",
      body: "A TEDx speaker, startup advisor and mentor, an Ashoka and Salzburg Global Fellow, with a habit of connecting young people to the people and ideas that change their trajectory.",
    },
  ],
};

export const assurance = {
  title: "Your peace of mind comes first",
  intro: "A turnkey programme. Design, safety and logistics are handled, with teams in India and on the ground.",
  items: [
    { name: "Teams on both sides", body: "Dedicated RealLives teams at home and trusted hosts in the destination country: familiar faces at both ends." },
    { name: "A teacher travels too", body: "A place for at least one teacher from your school on the journey, so a known adult is always present." },
    { name: "Deep local roots", body: "Institutions that already work with RealLives. A return to partners, not a cold arrival." },
    { name: "A balanced, unhurried pace", body: "One main activity a day, protected rest, calm evenings. Designed to enrich, never to exhaust." },
    { name: "Small, supervised groups", body: "Students move in small groups on planned routes, never alone, always accounted for." },
    { name: "Age appropriate throughout", body: "Every visit, workshop and conversation is chosen for a student of fourteen and above." },
  ],
  outreachSafeguard: {
    label: "Student led, with a safeguard built in",
    body: "Students write to people and organisations in the destination country themselves, introducing themselves as a delegation of Indian students visiting as changemakers, and request appointments. Every proposed meeting is then shared with the group and finalised with the RealLives Foundation team, so the outreach stays genuine and student driven while the core schedule and safety are never compromised.",
  },
};

export const schools = {
  title: "For schools and for families",
  forStudents: {
    label: "What your student gains",
    items: [
      "A leadership mindset and the courage to begin",
      "Empathy and real global citizenship",
      "Startup and entrepreneurial skills",
      "Design thinking and SDG literacy",
      "The first words of a new language",
      "A life shaping glimpse of who they could become",
      "A certificate and a personal growth report",
    ],
  },
  forSchool: {
    label: "What your school gains",
    items: [
      "Standing as a RealLives partner school",
      "Curated by an Ashoka Fellow, with teams in both countries",
      "A place for at least one teacher on the journey",
      "Sister school and exchange opportunities",
      "A genuine differentiator for admissions and for parents",
      "A turnkey programme: design, safety and logistics handled",
      "Dates aligned to your school calendar",
    ],
  },
  question: {
    label: "The question we ask every parent",
    body: "Ten years from now, what will you wish your child had started building at fourteen?",
  },
};

export const bookPage = {
  kicker: "Book a conversation",
  title: "A 20 minute call is enough.",
  lede: "Pick a weekday, choose a slot, and tell us a little about you. We will walk through the programme, the labs, the safeguards and the questions only a parent thinks to ask.",
  tz: "All times are India Standard Time (IST).",
  weekday: "Calls run Monday to Friday.",
  name: "Your name",
  email: "Email",
  phone: "Phone",
  role: "I am a",
  roles: [
    { id: "parent", label: "Parent / guardian" },
    { id: "school", label: "School leader" },
    { id: "teacher", label: "Teacher" },
    { id: "other", label: "Other" },
  ],
  org: "School or organisation",
  date: "Date",
  time: "Time slot",
  note: "Anything we should know",
  notePh: "Optional — ages, school, or a question you want covered.",
  submit: "Confirm the 20 minute call",
  taken: "This slot is already booked. Please pick another.",
  weekend: "Please choose a weekday — Monday to Friday.",
  required: "Please fill in your name, email, phone, date and time.",
  doneTitle: "Your call is requested.",
  doneBody: "We have your details. A confirmation email draft has opened so Dr. Parag Mankeekar can receive the request. We will confirm the slot shortly.",
  another: "Book another slot",
  back: "Talk to us",
  with: "The call is with",
  duration: "20 minutes",
};

export const cta = {
  title: "We would love to tell you more",
  body:
    "We are inviting a small number of forward looking schools and families to join the first cohort, on dates aligned to your calendar. Twenty to thirty minutes is enough to walk you through the programme, the labs, the safeguards and the teacher's role, and to answer the questions only a parent thinks to ask.",
  quote: "I lived another life. I understood another society. Now I return ready to improve my own.",
};

export const footerNote =
  "RealLives Foundation is a Section 8 non profit registered in Pune, India. The RealLives simulation and the RealLives ChangeMaker Index are used by schools and universities across North America, Europe and Asia.";
