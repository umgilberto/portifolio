import GithubIcon from "@/assets/images/white_logo_github.svg";
import LinkedInIcon from "@/assets/images/white_logo_linkedIn.svg";

interface SelfUserdata {
  name: string;
  surname: string;
  completeName: string;
}

interface JobUserdata {
  position: string;
}

interface AboutUserdata {
  resume: string;
  content: string;
}

interface ContactUserdata {
  email: string;
  telephone: string;
}

interface ComplementUserdata {
  link: string;
  icon: string;
}

export enum SectionsEnum {
  About = "About",
  Experience = "Experience",
  Projects = "Projects",
  Contact = "Contact",
}

export interface ExperienceUserdata {
  title: string;
  date: string;
  content: string[];
  link: string;
  employerName: string;
}

export interface ProjectsUserdata {
  title: string;
  content: string[];
  link: string;
}

interface UserData {
  self: SelfUserdata;
  job: JobUserdata;
  about: AboutUserdata;
  contact: ContactUserdata;
  complement: ComplementUserdata[];
  sections: SectionsEnum[];
  main: any;
  experience: ExperienceUserdata[];
}

export const userData: UserData = {
  self: {
    name: "Gilberto",
    surname: "Antunes",
    completeName: "Gilberto Jr. F. Antunes",
  },
  job: {
    position: "Fullstack developer | Software Engineer",
  },
  about: {
    resume:
      "I am a software engineer with experience in web development. I am passionate about technology and I am always looking for new challenges.",
    content:
      "I am a software engineer with experience in web development. I am passionate about technology and I am always looking for new challenges.",
  },
  contact: {
    email: "gilbertojrdv2@gmail.com",
    telephone: "(19) 99113-2017",
  },
  complement: [
    {
      link: "https://github.com/umgilberto",
      icon: GithubIcon,
    },
    {
      link: "https://www.linkedin.com/in/gilberto-junior-654071242/",
      icon: LinkedInIcon,
    },
  ],
  sections: [
    SectionsEnum.About,
    SectionsEnum.Experience,
    SectionsEnum.Projects,
  ],
  main: {
    about: {
      title: "About",
      content: [
        `I have worked as a Software Engineer, gaining experience in developing efficient web solutions with a strong emphasis on clean, maintainable code. I actively participated in agile ceremonies, always focusing on delivering high-quality work.`,
        `I have a diverse background in projects and clients, ranging from maintaining legacy systems to specifying and creating new projects. `,
        `I am constantly seeking challenges that allow me to apply my technical knowledge and passion for developing high-quality software. `,
        `My goal is to enhance my skills to further consolidate my experience and advance my career as a software architect. `,
      ],
    },
  },
  experience: [
    {
      title: "Software Engineer - Fullstack",
      date: "2020 - 2024",
      link: "https://www.smartinnovation.com.br/",
      employerName: "Smart Innovation",
      content: [
        `With over 4 years of experience at the company, I have mastered React, Node, and TypeScript, creating high-impact solutions. I enhanced dynamic user interfaces with React, built robust backend systems with Node, and optimized efficiency through Serverless and NestJS. I am passionate about tackling challenges.`,
      ],
    },
    {
      title: "Trainee",
      date: "2018 - 2020",
      link: "https://www.fiec.com.br/",
      employerName: "FIEC",
      content: [
        `With 2 years at FIEC, I have grown significantly as a professional. I spent 1 year in technical support and computer maintenance at the CPD, followed by another year in software development. During this time, I acquired substantial expertise in both areas.`,
      ],
    },
  ],
};
