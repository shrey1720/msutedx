export interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  topic: string;
  talkDescription: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'Organizer' | 'Core Team' | 'Curator' | 'Content & Research' | 'Design' | 'Operations' | 'Marketing';
  bio: string;
  image: string;
}

export interface ProgramItem {
  id: string;
  time: string;
  title: string;
  description: string;
  speaker?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}

export const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Mrs. Chetna Joshi Tiwari',
    title: 'Mrs. India World 2023 and Certified Yoga Trainer & Wellness Advocate',
    bio: 'Chetna Joshi Tiwari is an accomplished beauty pageant winner, wellness professional, and an inspiring voice for modern womanhood. Crowned Mrs. India Inc 2023 (Mrs. India World), she exemplifies resilience, grace, and purpose-driven leadership. Beyond the crown, Chetna is a certified yoga trainer and international yoga instructor, deeply committed to promoting holistic health, mental well-being, and inner balance.',
    image: '/speakers/chetna.jpg',
    topic: 'The Future of Learning',
    talkDescription: 'Exploring how neuroscience is revolutionizing our understanding of how we learn and retain information.',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: '2',
    name: 'Mr. Upendra Tripathy',
    title: 'Former Director-General, International Solar Alliance Former Secretary, Ministry of New & Renewable Energy, Govt. of India',
    bio: 'Mr. Upendra Tripathy is the former and founding Director-General of the International Solar Alliance (ISA), under whose leadership the ISA was established as a vibrant, globally respected intergovernmental organization. He served as Director-General from 2017 to 2021, playing a pivotal role in shaping global cooperation on solar energy.',
    image: '/speakers/upendra.jpg',
    topic: 'Energy for All',
    talkDescription: 'How innovative business models can accelerate the transition to renewable energy in developing nations.',
    socials: { linkedin: '#' }
  },
  {
    id: '3',
    name: 'Prof. Anand Kumar Jaiswal',
    title: 'Professor of Marketing Indian Institute of Management Ahmedabad (IIMA)',
    bio: 'Prof. Anand Kumar Jaiswal is an academic and researcher focused on marketing, innovation, and social impact. His work covers Bottom of the Pyramid markets, services marketing, customer satisfaction and retention, healthcare innovation, business model innovation, and applications of artificial intelligence in marketing. His research is published in leading international journals .',
    image: '/speakers/anand.jpg',
    topic: 'Digital Heritage',
    talkDescription: 'Preserving cultural heritage in the digital age while maintaining authenticity and community ownership.',
    socials: { instagram: '#' }
  },
  {
    id: '4',
    name: 'Dr. Anurag Maheta',
    title: 'HR Consultant Executive Coach Organizational Psychologist',
    bio: 'Dr. Anurag Mehta is a visionary organizational psychologist and strategic HR consultant with over 25 years of experience in transforming workplace cultures and driving sustainable business excellence. As a TEDx Speaker and Executive Leadership Coach, he has empowered leadership teams across organizations with turnovers ranging up to 400 crores through a unique integration of Indian spiritual wisdom (minus religion) and contemporary business practices.',
    image: '/speakers/anurag.jpg',
    topic: 'Digital Heritage',
    talkDescription: 'Preserving cultural heritage in the digital age while maintaining authenticity and community ownership.',
    socials: { instagram: '#' }
  },
  {
    id: '5',
    name: 'Mr. Jayendra Bhalodiya',
    title: 'AI Researcher Academic Leader Assistant Professor Healthcare Technology',
    bio: 'Prof. Dr. Jayendra M. Bhalodiya is an Assistant Professor at Ahmedabad University, affiliated with the School of Engineering and Applied Science. He is an accomplished academic and researcher whose work lies at the intersection of artificial intelligence, computer vision, and healthcare technology, with a strong focus on data-driven and explainable AI solutions for medical applications.',
    image: '/speakers/jayendra.jpg',
    topic: 'Digital Heritage',
    talkDescription: 'Preserving cultural heritage in the digital age while maintaining authenticity and community ownership.',
    socials: { instagram: '#' }
  },
  {
    id: '6',
    name: 'Mrs. Mittal Patel',
    title: 'Founder, VSSM Social Activist Community Rights Advocate Nari Shakti Puraskar Awardee',
    bio: 'Dr. Maya Patel is a Professor at MSU Baroda, where she has spent two decades studying the delicate intersection of technology and traditional knowledge systems. Her research explores how modern tools can be used to preserve ancient wisdom. At Syntopia, she shares her vision of a balanced world where the past and the future coexist in perfect harmony.',
    image: '/speakers/mittal.jpg',
    topic: 'Digital Heritage',
    talkDescription: 'Preserving cultural heritage in the digital age while maintaining authenticity and community ownership.',
    socials: { instagram: '#' }
  },
  {
    id: '7',
    name: 'Dr. Nina Apra',
    title: 'Anesthesiologist Corporate Trainer Chief Medical Officer',
    bio: 'Dr. Nina Apra is a qualified Anesthesiologist and currently serves as the Chief Medical Officer at a regional hospital under South Eastern Coalfields Limited (Coal India Ltd.), based in Chhattisgarh, India. With a strong foundation in clinical excellence and leadership, she brings medicine, communication, and social awareness together to create impact at scale.',
    image: '/speakers/nina.jpg',
    topic: 'Digital Heritage',
    talkDescription: 'Preserving cultural heritage in the digital age while maintaining authenticity and community ownership.',
    socials: { instagram: '#' }
  },
  {
    id: '8',
    name: 'Viral Shukla',
    title: 'Assistant Professor Department of English & CLS Saurashtra University',
    bio: 'Viral Shukla is an Assistant Professor in the Department of English & CLS at Saurashtra University. He holds a PhD in Folklore, titled “Folktales of Britain and Saurashtra: A Comparative Study.” His academic interests lie in folklore, literature, and cultural studies.',
    image: '/speakers/viral.jpg',
    topic: 'Digital Heritage',
    talkDescription: 'Preserving cultural heritage in the digital age while maintaining authenticity and community ownership.',
    socials: { instagram: '#' }
  },
  {
    id: '9',
    name: 'Mrs. Khyati Kinkhabwala',
    title: 'Certified Graphologist (Handwriting Analyst) Journal Therapy Coach Career Counsellor Founder – Steps Educational Institute',
    bio: 'Khyati Kinkhabwala is a certified graphologist from Vadodara, Gujarat, and the founder of Steps Educational Institute. With extensive experience working with students and competitive exam aspirants, she uses handwriting analysis as a scientific tool to understand personality traits, strengths, and challenges. Through this insightdriven approach, she guides individuals toward informed career choices, effective study strategies, and sustained personal growth.',
    image: '/speakers/khyati.jpg',
    topic: 'Digital Heritage',
    talkDescription: 'Preserving cultural heritage in the digital age while maintaining authenticity and community ownership.',
    socials: { instagram: '#' }
  },
  {
    id: '10',
    name: 'DR. Shachi Patel',
    title: 'Psychotherapist Founder – The Mind Clinic Clinical Neuropsychologist',
    bio: 'Dr. Shachi Patel is a Britain-trained Clinical Neuropsychologist and Psychotherapist, specializing in anxiety disorders, OCD, trauma recovery, relationship conflicts, and rebuilding self-worth. Her work operates at the intersection of neuroscience, emotional healing, and identity transformation, enabling deep, sustainable change.',
    image: '/speakers/shachi.jpg',
    topic: 'Digital Heritage',
    talkDescription: 'Preserving cultural heritage in the digital age while maintaining authenticity and community ownership.',
    socials: { instagram: '#' }
  }
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Amit Patel',
    role: 'Organizer',
    bio: 'Leading the vision for TEDxMSUBaroda with a focus on community and innovation.',
    image: '/team/amit-patel.jpg'
  },
  {
    id: '2',
    name: 'Kavita Shah',
    role: 'Design',
    bio: 'Crafting the visual identity of Syntopia with a modern and minimal aesthetic.',
    image: '/team/kavita-shah.jpg'
  },
  {
    id: '3',
    name: 'Rahul Mehta',
    role: 'Core Team',
    bio: 'Ensuring technical excellence and digital reach for the event.',
    image: '/team/rahul-mehta.jpg'
  },
  {
    id: '4',
    name: 'Priya Joshi',
    role: 'Operations',
    bio: 'Managing the ground logistics to ensure a seamless experience for all attendees.',
    image: '/team/priya-joshi.jpg'
  },
  {
    id: '5',
    name: 'Vikram Singh',
    role: 'Marketing',
    bio: 'Spreading the word and building excitement for the Syntopia journey.',
    image: '/team/vikram-singh.jpg'
  },
  {
    id: '6',
    name: 'Maya Desai',
    role: 'Curator',
    bio: 'Selecting ideas worth spreading that align with our theme of Syntopia.',
    image: '/team/maya-desai.jpg'
  },
  {
    id: '7',
    name: 'Arjun Kumar',
    role: 'Content & Research',
    bio: 'Deep diving into topics to provide rich, well-researched content for the event.',
    image: '/team/arjun-kumar.jpg'
  }
];

export const theme = {
  title: 'Syntopia',
  tagline: 'Harmonizing Human Potential',
  description: 'Syntopia is the vision of a future where diverse ideas, cultures, and technologies converge to create a harmonious whole. It is a state of balanced innovation, where we don\'t just move forward, but move forward together, respecting our roots while reaching for the stars.',
  whyItMatters: 'In a fragmented world, Syntopia offers a path of unity and purposeful progress. It matters today because it challenges us to integrate sustainable practices, ethical technology, and human values into every layer of our development.',
  whatExpected: 'Attendees can expect a curated journey through mind-bending talks, immersive experiences, and deep discussions that challenge the status quo and inspire a new way of thinking about our shared future.',
  closingLine: 'Join us at Syntopia, where the future finds its balance.',
  philosophy: 'Syntopia explores the convergence of human potential and technological advancement. We believe that by synthesizing different perspectives, we can unlock solutions to our most pressing challenges and build a world that is both advanced and deeply human.'
};

export const program: ProgramItem[] = [
  {
    id: '1',
    time: '9:00 AM',
    title: 'Registration & Welcome',
    description: 'Welcome coffee and networking session'
  },
  {
    id: '2',
    time: '10:00 AM',
    title: 'Opening Ceremony',
    description: 'TEDx introduction and Syntopia theme presentation'
  },
  {
    id: '3',
    time: '10:30 AM',
    title: 'The Future of Learning',
    description: 'Dr. Priya Sharma explores neuroscience of education',
    speaker: 'Dr. Priya Sharma'
  },
  {
    id: '4',
    time: '11:15 AM',
    title: 'Energy for All',
    description: 'Rajesh Kumar on renewable energy innovation',
    speaker: 'Rajesh Kumar'
  },
  {
    id: '5',
    time: '12:00 PM',
    title: 'Lunch Break',
    description: 'Networking and refreshments'
  },
  {
    id: '6',
    time: '1:00 PM',
    title: 'Digital Heritage',
    description: 'Dr. Maya Patel on cultural preservation',
    speaker: 'Dr. Maya Patel'
  },
  {
    id: '7',
    time: '2:30 PM',
    title: 'Interactive Workshop',
    description: 'Synthesizing ideas for a balanced tomorrow'
  },
  {
    id: '8',
    time: '4:00 PM',
    title: 'Closing Ceremony',
    description: 'Reflections and community discussion'
  }
];

export const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'MSU Baroda',
    logo: '/sponsors/msu-baroda.jpg',
    tier: 'platinum'
  },
  {
    id: '2',
    name: 'TED',
    logo: '/sponsors/ted.jpg',
    tier: 'platinum'
  },
  {
    id: '3',
    name: 'Local Business Partner',
    logo: '/sponsors/local-partner.jpg',
    tier: 'gold'
  }
];
