export interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  topic: string;
  talkDescription: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
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
    bio: 'Leading researcher in cognitive neuroscience at IIT Bombay, specializing in memory formation and learning processes.',
    image: '/speakers/priya-sharma.jpg',
    topic: 'The Future of Learning',
    talkDescription: 'Exploring how neuroscience is revolutionizing our understanding of how we learn and retain information.'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    title: 'Sustainable Energy Entrepreneur',
    bio: 'Founder of GreenVolt Solutions, pioneering affordable solar solutions for rural communities across India.',
    image: '/speakers/rajesh-kumar.jpg',
    topic: 'Energy for All',
    talkDescription: 'How innovative business models can accelerate the transition to renewable energy in developing nations.'
  },
  {
    id: '3',
    name: 'Dr. Maya Patel',
    title: 'Cultural Anthropologist',
    bio: 'Professor at MSU Baroda, studying the intersection of technology and traditional knowledge systems.',
    image: '/speakers/maya-patel.jpg',
    topic: 'Digital Heritage',
    talkDescription: 'Preserving cultural heritage in the digital age while maintaining authenticity and community ownership.'
  },
  {
    id: '4',
    name: 'Arun Desai',
    title: 'Urban Planner',
    bio: 'Director of Smart Cities Initiative at Ahmedabad Municipal Corporation, transforming urban spaces for future generations.',
    image: '/speakers/arun-desai.jpg',
    topic: 'Cities of Tomorrow',
    talkDescription: 'Reimagining urban development through sustainable design and community-driven planning.'
  },
  {
    id: '5',
    name: 'Dr. Vikram Singh',
    title: 'Climate Scientist',
    bio: 'Lead researcher at Indian Institute of Tropical Meteorology, studying monsoon patterns and climate change impacts.',
    image: '/speakers/vikram-singh.jpg',
    topic: 'Climate Resilience',
    talkDescription: 'Building adaptive strategies for communities facing increasing climate variability and extreme weather events.'
  },
  {
    id: '6',
    name: 'Sneha Rao',
    title: 'Social Entrepreneur',
    bio: 'Founder of EduBridge, connecting underprivileged students with quality education through technology.',
    image: '/speakers/sneha-rao.jpg',
    topic: 'Education Equity',
    talkDescription: 'Leveraging technology to bridge the education gap and create opportunities for all learners.'
  }
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Amit Patel',
    role: 'Event Director',
    bio: 'Final year MBA student passionate about organizing impactful events that bring communities together.',
    image: '/team/amit-patel.jpg'
  },
  {
    id: '2',
    name: 'Kavita Shah',
    role: 'Creative Director',
    bio: 'Design student with a vision for creating authentic, meaningful visual experiences.',
    image: '/team/kavita-shah.jpg'
  },
  {
    id: '3',
    name: 'Rahul Mehta',
    role: 'Technical Lead',
    bio: 'Computer Science student specializing in web development and digital experiences.',
    image: '/team/rahul-mehta.jpg'
  },
  {
    id: '4',
    name: 'Priya Joshi',
    role: 'Speaker Coordinator',
    bio: 'Communications student with experience in event management and speaker relations.',
    image: '/team/priya-joshi.jpg'
  },
  {
    id: '5',
    name: 'Vikram Singh',
    role: 'Marketing Lead',
    bio: 'Marketing student focused on authentic storytelling and community engagement.',
    image: '/team/vikram-singh.jpg'
  },
  {
    id: '6',
    name: 'Maya Desai',
    role: 'Content Curator',
    bio: 'Literature student passionate about crafting narratives that inspire and educate.',
    image: '/team/maya-desai.jpg'
  },
  {
    id: '7',
    name: 'Arjun Kumar',
    role: 'Operations Manager',
    bio: 'Business Administration student ensuring smooth execution of all event logistics.',
    image: '/team/arjun-kumar.jpg'
  },
  {
    id: '8',
    name: 'Neha Sharma',
    role: 'Volunteer Coordinator',
    bio: 'Psychology student dedicated to building strong, motivated volunteer teams.',
    image: '/team/neha-sharma.jpg'
  },
  {
    id: '9',
    name: 'Rohan Gupta',
    role: 'Media Lead',
    bio: 'Film and media student capturing the essence of TEDx events through compelling visuals.',
    image: '/team/rohan-gupta.jpg'
  },
  {
    id: '10',
    name: 'Ananya Patel',
    role: 'Sponsorship Coordinator',
    bio: 'Economics student building partnerships that support TEDx mission and community impact.',
    image: '/team/ananya-patel.jpg'
  }
];

export const theme = {
  title: 'Echoes of Tomorrow',
  description: 'In an era of rapid technological advancement and unprecedented global challenges, TEDx MSU Baroda explores how ideas from diverse fields converge to shape our collective future. From neuroscience to sustainable energy, cultural preservation to urban planning, our speakers examine the echoes of innovation that will define tomorrow.',
  philosophy: 'TEDx is an independently organized TED event where live TED-like talks and videos are shared with the community. At TEDx MSU Baroda, we believe in the power of ideas to transform perspectives and inspire action. Our carefully curated program brings together thought leaders, innovators, and visionaries to explore the intersections of technology, culture, and human potential.'
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
    description: 'TEDx introduction and theme presentation'
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
    time: '1:45 PM',
    title: 'Cities of Tomorrow',
    description: 'Arun Desai reimagines urban development',
    speaker: 'Arun Desai'
  },
  {
    id: '8',
    time: '2:30 PM',
    title: 'Climate Resilience',
    description: 'Dr. Vikram Singh on adaptive strategies',
    speaker: 'Dr. Vikram Singh'
  },
  {
    id: '9',
    time: '3:15 PM',
    title: 'Education Equity',
    description: 'Sneha Rao on technology for education',
    speaker: 'Sneha Rao'
  },
  {
    id: '10',
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
  },
  {
    id: '4',
    name: 'Community Sponsor',
    logo: '/sponsors/community.jpg',
    tier: 'silver'
  }
];