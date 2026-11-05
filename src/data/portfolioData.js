/**
 * Portfolio Data for Aishwarya Kumari
 * Simplified and focused
 * Social handles: @improaish everywhere
 */

export const personalData = {
  name: "Aishwarya Kumari",
  username: "improaish",
  headline: "Content Strategist & Applied AI Enthusiast",
  specializations: [
    "Applied AI",
    "EdTech",
    "Web Development",
    "Content Strategy"
  ],
  introduction:
    "Exploring the intersection of Applied AI and EdTech, with an interest in digital learning solutions, web development, emerging technologies, and content strategy.",
  heroBio:
    "BTech graduate focused on EdTech, Applied AI, and emerging technologies. Gaining experience in web development, application development, and content strategy.",
  location: "India",
  email: "improaish@gmail.com",
  profileImage: "/aishwarya_image.jpg",
  availabilityBadge: "Open to Entry-Level Roles",
  socials: {
    linkedin: "https://www.linkedin.com/in/improaish",
    github: "https://github.com/improaish",
    x: "https://x.com/improaish",
    instagram: "https://instagram.com/improaish",
    email: "mailto:improaish@gmail.com",
    portfolio: "https://aishwaryakumari.netlify.app/"
  }
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "I have an academic background in Computer Science and Engineering (Artificial Intelligence) and Electronics Engineering, with a strong focus on EdTech and emerging technologies.",
    "My core interests include EdTech, Applied AI, Machine Learning, Web Development, Application Development, and modern technology-driven solutions.",
    "Through practical internships, I have gained hands-on exposure to software development, Applied AI assistance, and embedded systems.",
    "Beyond development, I focus on content strategy, structured information design, and creating intuitive digital learning experiences."
  ],
  highlights: [
    {
      label: "Education",
      value: "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
      detail: "Motihari College of Engineering ('27)"
    },
    {
      label: "Primary Focus",
      value: "EdTech, Applied AI & Content Strategy",
      detail: "Smart digital learning platforms"
    }
  ]
};

/**
 * Areas of Interest (AI, IoT, and Cybersecurity removed per request; Educational Technology updated to EdTech)
 */
export const interestsData = [
  {
    id: "edtech",
    title: "EdTech",
    description: "Technology-enabled learning, digital education platforms, and intelligent learning solutions.",
    icon: "GraduationCap"
  },
  {
    id: "ai-apps",
    title: "Applied AI",
    description: "Applied AI-powered tools, intelligent assistants, and practical real-world implementation.",
    icon: "Sparkles"
  },
  {
    id: "ml",
    title: "Machine Learning",
    description: "Foundational ML concepts, models, pattern recognition, and data-driven solutions.",
    icon: "Cpu"
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Modern frontend technologies, responsive web design, and structured web interfaces.",
    icon: "Globe"
  },
  {
    id: "app-dev",
    title: "Application Development",
    description: "Software architecture, modular application design, and modern development workflows.",
    icon: "Layers"
  },
  {
    id: "emerging-tech",
    title: "Emerging Technologies",
    description: "Exploring next-generation technologies and their practical real-world applications.",
    icon: "Compass"
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    description: "Planning clear, useful content experiences for digital products and learning.",
    icon: "Target"
  }
];

export const experienceData = [
  {
    id: "nielit",
    organization: "National Institute of Electronics & Information Technology (NIELIT)",
    role: "Internet of Things Intern",
    duration: "November 2026 \u2013 Present",
    location: "Muzaffarpur, Bihar, India",
    status: "Current"
  },
  {
    id: "minus-robotics",
    organization: "Minus Robotics and Coding",
    role: "Software Development and AI Assistance Intern",
    duration: "July 2026 \u2013 September 2026",
    location: "Kishanganj, Bihar, India",
    status: "Completed"
  },
  {
    id: "eisystems",
    organization: "EISystems Technologies",
    role: "Data Science Intern",
    duration: "March 2026 \u2013 May 2026",
    location: "Ghaziabad, Uttar Pradesh, India",
    status: "Completed"
  },
  {
    id: "cdac",
    organization: "Centre for Development of Advanced Computing (C-DAC)",
    role: "Ethical Hacking and Penetration Testing Intern",
    duration: "April 2025 \u2013 June 2025",
    location: "Noida, Uttar Pradesh, India",
    status: "Completed"
  },
  {
    id: "sofcon",
    organization: "Sofcon India Pvt. Ltd.",
    role: "Embedded System Intern",
    duration: "January 2023 \u2013 February 2023",
    location: "Lucknow, Uttar Pradesh, India",
    status: "Completed"
  },
  {
    id: "hypex",
    organization: "HYPEX Technology",
    role: "Core Python Intern",
    duration: "April 2022 \u2013 May 2022",
    location: "Lucknow, Uttar Pradesh, India",
    status: "Completed"
  }
];

export const projectsData = [
  {
    id: "arduino-digital-thermohygrometer",
    title: "Arduino Digital Thermohygrometer",
    status: "Final Year Project",
    category: "Embedded Systems / IoT",
    description:
      "Designed and developed a digital thermohygrometer using an Arduino board and DHT sensor to monitor real-time temperature and humidity. This diploma final-year project combined embedded electronics, sensor calibration, display output, and practical environmental monitoring for everyday use.",
    technologies: [
      "Arduino",
      "DHT Sensor",
      "Temperature Monitoring",
      "Humidity Sensing",
      "Embedded Systems",
      "Electronics"
    ],
    githubUrl: "",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Arduino electronics project with a DHT sensor and microcontroller circuit"
  },
  {
    id: "digital-learning-content-hub",
    title: "Digital Learning Content Hub",
    status: "Coming Soon",
    category: "EdTech & Content Strategy",
    description:
      "A structured educational repository demonstrating clear content strategy, taxonomic hierarchy, and accessible digital learning pathways.",
    technologies: [
      "Content Strategy",
      "EdTech",
      "Information Design",
      "Web Development",
      "UI/UX"
    ],
    githubUrl: "https://github.com/improaish"
  }
];

export const contentStrategyData = {
  title: "Content Strategy",
  description:
    "Planning and shaping digital content for clarity, discoverability, and engaging user experiences.",
  cards: [
    {
      id: "content-strategy",
      title: "Content Strategy",
      description: "Planning and structuring digital content to meet user and organizational goals.",
      icon: "Target"
    },
    {
      id: "seo-fundamentals",
      title: "SEO & Discoverability",
      description: "Applying semantic structure, keyword intent, and search standards.",
      icon: "SearchCheck"
    },
    {
      id: "ed-content",
      title: "EdTech Content Development",
      description: "Breaking complex technical topics into clear, structured learning modules.",
      icon: "BookOpenCheck"
    }
  ]
};

export const writingSamplesData = [
  {
    id: "video-script",
    title: "Mobile Phone Addiction",
    category: "Scriptwriting",
    description:
      "A Hindi video script about the causes and effects of mobile phone addiction, with practical ways to build healthier habits.",
    detail:
      "Covers phone use and mental well-being, sleep, and steps to reduce unwanted screen time.",
    content: [
      {
        heading: "Opening",
        paragraphs: [
          "Subah aankh khulte hi phone check karna, khana khate waqt scrolling, aur raat ko sone se pehle ek aur video dekhna—kya yeh routine aapko familiar lagta hai?",
          "Phone hamari padhai, kaam aur apno se jude rehne mein madad karta hai. Lekin jab hum bina soche har khaali pal mein screen kholte hain, tab apni aadaton par dobara nazar daalne ka waqt aa sakta hai."
        ]
      },
      {
        heading: "Why is it so easy to keep scrolling?",
        paragraphs: [
          "Short videos, messages aur notifications hamesha kuch naya dikhate rehte hain. Har swipe par agla interesting post mil sakta hai, isliye hum aksar tay kiye hue samay se zyada der tak phone chalate rehte hain.",
          "Yeh sirf willpower ki baat nahi—apps ko is tarah banaya jaata hai ki unhe use karna aasaan aur engaging lage. Apne triggers pehchanna pehla step hai: boredom, stress, ya har notification ko turant dekhne ki aadat."
        ]
      },
      {
        heading: "When screen time gets in the way",
        paragraphs: [
          "Zaroorat se zyada screen time neend, padhai, kaam aur saamne baithe logon ke saath waqt ko affect kar sakta hai. Raat ko der tak scrolling karne se bedtime tal sakta hai, aur baar-baar phone check karne se focus toot sakta hai.",
          "Har vyakti ka experience alag hota hai. Agar phone use aapki daily life ya well-being ko lagataar mushkil bana raha hai, kisi trusted person ya qualified professional se baat karna madadgar ho sakta hai."
        ]
      },
      {
        heading: "Small steps to build a healthier habit",
        paragraphs: [
          "Pehle kuch din apna screen-time report dekhiye aur ek aisa app chuniyega jisme aapka waqt sabse zyada jaata hai. Uske liye ek realistic daily limit set karein, non-essential notifications band karein, aur padhai ya kaam ke waqt phone ko nazar se door rakhein.",
          "Sone se pehle phone ko bed se door charge karna aur scrolling ke badle koi chhoti offline activity chunna bhi routine badalne mein madad kar sakta hai. Ek hi din mein sab kuch badalne ki zaroorat nahi—chhote, consistent steps se shuruaat karein."
        ]
      },
      {
        heading: "Closing",
        paragraphs: [
          "Technology ek useful tool hai—bas zaroori hai ki hum use apne kaam ke liye chalayein, na ki har khaali pal ko woh control kare. Aaj ek chhota step chuniye: ek notification off karein, ya agle break mein phone ke bina thodi der bitaayein.",
          "Aapke liye kaunsi ek phone habit badalna sabse aasaan hoga? Apna jawab comments mein share karein. Video dekhne ke liye dhanyavaad!"
        ]
      }
    ]
  },
  {
    id: "chatgpt-is-changing",
    title: "ChatGPT AI is Changing Photos",
    category: "Blog Feature",
    description:
      "An article on how ChatGPT's AI photo-editing capabilities can transform images, from changing backgrounds to applying creative styles.",
    detail:
      "Explores practical image-editing uses and how AI can make creative tools more accessible.",
    content: [
      {
        heading: "A new way to edit",
        paragraphs: [
          "Photo editing once meant learning a complicated set of tools before making even a small change. AI-assisted editing is making that process more conversational: describe the result you want, review a suggestion, and refine it with follow-up instructions.",
          "In ChatGPT, image capabilities can help people explore edits using everyday language. The exact options depend on the product and tools available, but the broader shift is clear: more people can experiment without first mastering a traditional editing workflow."
        ]
      },
      {
        heading: "From a prompt to an image",
        paragraphs: [
          "A user might ask to remove a distracting background, adjust the lighting, or create a softer illustration style. Rather than manually locating every control, they can explain the intended change and assess the result.",
          "The conversation can continue: preserve the subject, make the colors less saturated, or keep the original composition. This iterative approach makes it easier to communicate intent, especially when someone knows what they want but not the name of the editing tool."
        ]
      },
      {
        heading: "Where it can help",
        paragraphs: [
          "Small businesses may use AI-assisted edits to prepare draft product visuals. Creators can explore concepts for a campaign, while students can make illustrative assets for a presentation. For personal projects, it can simply make playful experimentation more approachable.",
          "These tools can also speed up repetitive first steps, leaving people more time to decide whether an image is accurate, useful, and appropriate for its audience."
        ]
      },
      {
        heading: "Human judgment still matters",
        paragraphs: [
          "An AI-generated edit is not automatically a reliable or suitable one. Details may change unexpectedly, and a polished image can still mislead if it is presented as an untouched photograph. Review important outputs closely, especially when accuracy or trust matters.",
          "Be mindful of consent and privacy when uploading images of other people, and check the tool's current data and usage settings before sharing sensitive material. For professional work, confirm that the result meets the relevant brand, accessibility, and disclosure requirements."
        ]
      },
      {
        heading: "Creativity, with a new interface",
        paragraphs: [
          "Conversational editing lowers the barrier to trying an idea, but it does not replace creative direction. People still choose the story an image should tell, what details to preserve, and whether the final result communicates honestly.",
          "As these tools evolve, the strongest workflow will pair AI's speed with human context and care. The result is not just faster editing—it is a different, more accessible way to move from an idea to a visual draft."
        ]
      }
    ]
  }
];

export const educationData = [
  {
    id: "btech",
    institution: "Motihari College of Engineering",
    degree: "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
    year: "2027",
    status: "Pursuing"
  },
  {
    id: "polytechnic",
    institution: "Government Polytechnic Motihari",
    degree: "Polytechnic Diploma in Electronics Engineering",
    year: "2024",
    status: "Completed"
  },
  {
    id: "matriculation",
    institution: "Chandrasheel School",
    degree: "Matriculation (Secondary Education)",
    year: "2020",
    status: "Completed"
  }
];

export const activitiesData = [
  {
    id: "kaalchakra-novel",
    title: "Kaalchakra - Samay ka Chakravyuh",
    eventName: "Novel published on Pratilipi",
    organizer: "Writer & Creator",
    year: "2025",
    description:
      "A Hindi novel I wrote as a creative pursuit, weaving romance, mystery, and family drama into a story about love, duty, and the twists of fate.",
    image: "/assets/activities/kaalchakra-cover.jpg",
    imageAlt: "Cover of Kaalchakra - Samay ka Chakravyuh",
    url: "https://english.pratilipi.com/series/kaalchakra-samay-ka-chakravyuh-by-aishwarya-kumari-nvllr4ywsfk8"
  },
  {
    id: "devfest-2025",
    title: "DevFest 2025",
    eventName: "DevFest 2025",
    organizer: "Google Developers Group (GDG)",
    year: "2025",
    description: "Attended DevFest 2025 covering AI-related sessions on how AI is evolving and its real-world applications.",
  },
  {
    id: "devfest-2026",
    title: "DevFest 2026",
    eventName: "DevFest 2026",
    organizer: "Google Developers Group (GDG)",
    year: "2026",
    description: "Joined the Google Developer Groups community for DevFest 2026.",
  },
  {
    id: "gdg-workshops-2026",
    title: "GDG Workshops",
    eventName: "Google Developer Groups workshops",
    organizer: "Google Developers Group (GDG)",
    year: "2026",
    description: "Participated in various hands-on workshops organized by Google Developers Group.",
  },
  {
    id: "salesforce-meetup-2026",
    title: "Salesforce Meetup",
    eventName: "Salesforce community meetup",
    organizer: "Trailblazer Community",
    year: "2026",
    description: "Attended Salesforce community meetup organized by the Trailblazer Community.",
  },
  {
    id: "nss-volunteering",
    title: "NSS Volunteering",
    eventName: "National Service Scheme community volunteering",
    organizer: "National Service Scheme (NSS)",
    year: "",
    description: "Volunteered with NSS in community service and student engagement activities."
  }
];

export const activityPhotosData = [
  {
    id: "gdg-devfest-speaking-engagement",
    title: "DevFest 2026",
    image: "/assets/activities/gdg-devfest-speaking-engagement.jpeg",
    imageAlt: "Aishwarya speaking at a Google Developer Groups event",
    size: "panoramic"
  },
  {
    id: "nss-volunteering",
    title: "NSS volunteering",
    image: "/assets/activities/nss-clean-india-mission.jpeg",
    imageAlt: "Participating in an NSS community volunteering activity",
    size: "square"
  },
  {
    id: "nss-volunteering-street-play",
    title: "NSS volunteering",
    image: "/assets/activities/nss-nukkad-natak.jpeg",
    imageAlt: "Students taking part in an NSS street play",
    size: "square"
  },
  {
    id: "topper-award-photo",
    title: "Academic award",
    image: "/assets/activities/topper-award-ceremony.jpeg",
    imageAlt: "Receiving an academic award at a ceremony",
    size: "square"
  },
  {
    id: "nielit-visit-photo",
    title: "NIELIT visit",
    image: "/assets/activities/nielit-muzaffarpur-visit.jpeg",
    imageAlt: "At the NIELIT Muzaffarpur centre",
    size: "portrait"
  },
  {
    id: "certificate-presentation-photo",
    title: "Certificate receiving",
    image: "/assets/activities/certificate-presentation.jpeg",
    imageAlt: "Receiving a certificate at an event",
    size: "square"
  }
];

export const certificationsData = [
  {
    id: "machine-learning-minus-robotics",
    category: "AI & Machine Learning",
    name: "Machine Learning",
    issuer: "Minus Robotics and Coding",
    image: "",
    verificationUrl: ""
  },
  {
    id: "ai-in-management-nptel",
    category: "AI & Machine Learning",
    name: "AI in Management",
    issuer: "NPTEL",
    image: "",
    verificationUrl: ""
  },
  {
    id: "cloud-computing-nptel",
    category: "Cloud & Computing",
    name: "Cloud Computing",
    issuer: "NPTEL",
    image: "",
    verificationUrl: ""
  },
  {
    id: "content-strategy-seo-zaptriq",
    category: "Content & Digital Strategy",
    name: "Content Strategy & SEO",
    issuer: "Zaptriq AI Academy",
    image: "",
    verificationUrl: ""
  },
  {
    id: "cyber-jib-forage",
    category: "Cybersecurity",
    name: "Cyber Job Simulation",
    issuer: "Forage",
    image: "",
    verificationUrl: ""
  },
  {
    id: "it-essentials",
    category: "IT & Networking",
    name: "IT Essentials",
    issuer: "Cisco Networking Academy",
    image: "",
    verificationUrl: ""
  },
  {
    id: "intro-to-cybersecurity",
    category: "Cybersecurity",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    image: "",
    verificationUrl: ""
  },
  {
    id: "c-essentials-1",
    category: "Programming",
    name: "C Essentials 1",
    issuer: "Cisco Networking Academy",
    image: "",
    verificationUrl: ""
  },
  {
    id: "cpp-essentials-1",
    category: "Programming",
    name: "C++ Essentials 1",
    issuer: "Cisco Networking Academy",
    image: "",
    verificationUrl: ""
  },
  {
    id: "c-essentials-2",
    category: "Programming",
    name: "C Essentials 2",
    issuer: "Cisco Networking Academy",
    image: "",
    verificationUrl: ""
  },
  {
    id: "cpp-essentials-2",
    category: "Programming",
    name: "C++ Essentials 2",
    issuer: "Cisco Networking Academy",
    image: "",
    verificationUrl: ""
  },
  {
    id: "intro-data-science",
    category: "Data Science",
    name: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    image: "",
    verificationUrl: ""
  },
  {
    id: "arduino-training",
    category: "Embedded Systems",
    name: "Arduino Training",
    issuer: "Spoken Tutorial Project at IIT Bombay",
    image: "",
    verificationUrl: ""
  },
  {
    id: "latex-training",
    category: "Technical Writing",
    name: "LaTeX Training",
    issuer: "Spoken Tutorial Project at IIT Bombay",
    image: "",
    verificationUrl: ""
  }
];

export const languagesData = [
  { language: "English", proficiency: "Full Professional" },
  { language: "Hindi", proficiency: "Professional Working" }
];

export const contactData = {
  title: "Let's Connect",
  description:
    "Open to opportunities, collaborations, and discussions in EdTech, Applied AI, and Web Development.",
  email: "improaish@gmail.com",
  username: "improaish",
  location: "India"
};
