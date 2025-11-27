import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import type { ReactNode } from "react";

type Hackathon = {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: {
    title: string;
    href: string;
    icon: ReactNode;
  }[];
};

// Define the WorkExperience type explicitly so TypeScript knows the shape of the array items
// even when the array is empty.
type WorkExperience = {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
};

export const DATA = {
  name: "Aman Kumar",
  initials: "AK",
  url: "https://my-portfolio-iota-taupe-96.vercel.app/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description: "Full Stack & Cloud-Native Developer",
  summary: "Hi, I’m Aman Kumar. I build scalable cloud-native applications with Java, React, and Spring Boot. I focus on clean architecture, performant frontends, and reliable DevOps automation. I am passionate about bridging innovation between software, cloud infrastructure, and AI-driven development.",
  avatarUrl: "/me.png", // Ensure you have this image in your public folder or update the path

  skills: [
    "Java",
    "JavaScript",
    "TypeScript",
    "Go",
    "Python",
    "React",
    "Next.js",
    "React Native",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "Spring Boot",
    "GraphQL",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Prometheus",
    "Grafana",
    "Terraform",
    // "Serverless Framework",
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "Android Studio",
    "Linux",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  contact: {
    email: "resoamankumar@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/EternalKnight002",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aman-kumar-537a73296/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Eternalknigh",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:resoamankumar@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // Cast the empty array to the specific type to avoid 'never' errors in page.tsx
  work: [] as WorkExperience[], 

  education: [
    {
      school: "Pranveer Singh Institute of Technology, Kanpur",
      href: "https://psit.ac.in",
      degree: "Bachelor of Technology (B.Tech), Computer Science",
      logoUrl: "/psit.png",
      start: "2023",
      end: "2027",
    },
  ],

  projects: [
    {
      title: "Student Productivity Hub",
      href: "https://student-productivity-app-landing-pa.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "All-in-one productivity platform for students with task management, note-taking, Pomodoro timer, and academic calendar integration.",
      technologies: ["ReactNative", "TypeScript", "Zustand", "Expo", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://student-productivity-app-landing-pa.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/EternalKnight002/student-productivity-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/Student_productivity.png",
      video: "",
    },
    {
      title: "RepoMind - GitHub Repository Analyzer",
      href: "https://github.com/EternalKnight002/repo-mind",
      dates: "2024",
      active: true,
      description:
        "AI-powered tool to analyze GitHub repositories, generate documentation insights, and visualize code complexity with intelligent summaries.",
      technologies: ["Python", "OpenAI API", "TypeScript", "React", "GitHub API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/EternalKnight002/repo-mind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/api-gateway.png",
      video: "",
    },
    {
      title: "Extension Marketplace",
      href: "https://extension-marketplace-pink.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Curated showcase of Chrome and VS Code extensions I've built. Browse, explore, and discover productivity tools for developers.",
      technologies: ["Next.js", "React", "ManifestV3", "TypeScript", "Chrome API"],
      links: [
        {
          type: "Website",
          href: "https://extension-marketplace-pink.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/EternalKnight002/extension-marketplace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/extension.png",
      video: "",
    },
    {
      title: "SkillMatchAI - Intelligent Job Matcher",
      href: "https://github.com/EternalKnight002/SkillMatchAI",
      dates: "2024",
      active: true,
      description:
        "AI-driven platform that matches candidates with job opportunities based on skills, experience, and learning paths with personalized recommendations.",
      technologies: ["Python", "Machine Learning", "FastAPI", "React", "Kaggle"],
      links: [
        {
          type: "Source",
          href: "https://github.com/EternalKnight002/SkillMatchAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/skill-match-ai.png",
      video: "",
    },
    {
      title: "MusicSync - Collaborative Playlist Manager",
      href: "https://music-sync-web.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Real-time music synchronization platform for creating and sharing playlists across Spotify, YouTube Music, and Apple Music with friends.",
      technologies: ["Next.js", "WebSocket", "Electron", "NTP", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://music-sync-web.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/EternalKnight002/music-sync",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/music-sync.png",
      video: "",
    },
    {
      title: "TerminalHistory",
      href: "https://github.com/EternalKnight002/terminalHistory",
      dates: "2024",
      active: true,
      description:
        "Advanced terminal history manager with smart search, AI-powered command suggestions, and session replay capabilities.",
      technologies: ["TypeScript", "Bash", "VS Code Extension API", "Zsh", "Node.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/EternalKnight002/terminalHistory",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/terminal-history.png",
      video: "",
    },
  ],
  hackathons: [] as Hackathon[],
} as const;