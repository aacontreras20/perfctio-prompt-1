export interface Person {
  id: string;
  name: string;
  photo: string;
  tags: string[];
  snippet: string;
  matchedContext: string;
  meetingDate: string;
}

export const mockPeople: Person[] = [
  {
    id: "1",
    name: "Sarah Chen",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    tags: ["AI music", "friendly", "climate tech"],
    snippet: "Discussed the intersection of generative AI and sustainable music production tools for emerging artists.",
    matchedContext: "meeting 2/10 about AI music",
    meetingDate: "2024-02-10"
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    tags: ["VC", "rock climbing", "fintech"],
    snippet: "Talked about early-stage fintech investments and his weekend climbing trips to Yosemite.",
    matchedContext: "meeting 1/15 about funding",
    meetingDate: "2024-01-15"
  },
  {
    id: "3",
    name: "Aisha Patel",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    tags: ["design", "accessibility", "educator"],
    snippet: "Deep dive into inclusive design practices and how to make AI tools more accessible to diverse communities.",
    matchedContext: "meeting 3/5 about UX accessibility",
    meetingDate: "2024-03-05"
  },
  {
    id: "4",
    name: "James Kim",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    tags: ["blockchain", "coffee enthusiast", "web3"],
    snippet: "Explored decentralized identity solutions over specialty coffee recommendations.",
    matchedContext: "meeting 2/20 about web3 identity",
    meetingDate: "2024-02-20"
  },
  {
    id: "5",
    name: "Emma Thompson",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    tags: ["health tech", "marathon runner", "data science"],
    snippet: "Discussed predictive models for personalized health recommendations and training for her next marathon.",
    matchedContext: "meeting 3/12 about health AI",
    meetingDate: "2024-03-12"
  },
  {
    id: "6",
    name: "David Okonkwo",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    tags: ["product", "gaming", "community building"],
    snippet: "Brainstormed community-driven product features and his passion for indie game development.",
    matchedContext: "meeting 1/25 about product roadmap",
    meetingDate: "2024-01-25"
  },
  {
    id: "7",
    name: "Sofia Martinez",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    tags: ["content creator", "sustainability", "travel"],
    snippet: "Talked about sustainable travel content creation and measuring environmental impact of digital media.",
    matchedContext: "meeting 2/28 about content strategy",
    meetingDate: "2024-02-28"
  },
  {
    id: "8",
    name: "Alex Wu",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    tags: ["engineering", "open source", "mentorship"],
    snippet: "Deep technical discussion on distributed systems and his commitment to mentoring junior developers.",
    matchedContext: "meeting 3/8 about system architecture",
    meetingDate: "2024-03-08"
  }
];
