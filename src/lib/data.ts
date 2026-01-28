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
    name: 'Dr. Priya Sharma',
    title: 'Neuroscience Researcher',
    bio: 'Dr. Priya Sharma is a leading researcher in cognitive neuroscience at IIT Bombay. With over 15 years of experience, she specializes in memory formation and learning processes. Her work has been published in numerous international journals and she is a frequent speaker at global science conferences. At Syntopia, she will delve into how our brains navigate the intersection of tradition and futuristic technology.',
    image: '/speakers/priya-sharma.jpg',
    topic: 'The Future of Learning',
    talkDescription: 'Exploring how neuroscience is revolutionizing our understanding of how we learn and retain information.',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    title: 'Sustainable Energy Entrepreneur',
    bio: 'Rajesh Kumar is the founder of GreenVolt Solutions, a pioneer in bringing affordable solar energy to rural India. An engineer by training and an entrepreneur by heart, Rajesh has transformed thousands of lives by providing clean energy. His talk at Syntopia focuses on how sustainable practices are not just a choice but a necessity for our collective future survival.',
    image: '/speakers/rajesh-kumar.jpg',
    topic: 'Energy for All',
    talkDescription: 'How innovative business models can accelerate the transition to renewable energy in developing nations.',
    socials: { linkedin: '#' }
  },
  {
    id: '3',
    name: 'Dr. Maya Patel',
    title: 'Cultural Anthropologist',
    bio: 'Dr. Maya Patel is a Professor at MSU Baroda, where she has spent two decades studying the delicate intersection of technology and traditional knowledge systems. Her research explores how modern tools can be used to preserve ancient wisdom. At Syntopia, she shares her vision of a balanced world where the past and the future coexist in perfect harmony.',
    image: '/speakers/maya-patel.jpg',
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
