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

enum Sections {
  About = "About",
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

interface UserData {
  self: SelfUserdata;
  job: JobUserdata;
  about: AboutUserdata;
  contact: ContactUserdata;
  complement: ComplementUserdata[];
  sections: Sections[];
  main: any;
  experience: ExperienceUserdata[];
}



export const userData: UserData = {
  self: {
    name: "Gilberto",
    surname: "Antunes",
    completeName: "Gilberto J. Ferreira Antunes",
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
  sections: Object.values(Sections),
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
  experience:[
    {
      title: "Software Engineer - Fullstack",
      date: "jun de 2020 - jul de 2024",
      link: "https://www.smartinnovation.com.br/",
      employerName: "Smart Innovation",
      content: [
        `Com mais de 4 anos na empresa com domino em React, Node e TypeScript, criei soluções de alto impacto, aprimorando interfaces de usuário dinâmicas com React, construindo sistemas backend robustos com Node e otimizando a eficiência por meio de Serverless e Nest. Sou apaixonado por desafios`
      ]
    },
    {
      title: "Trainee",
      date: "jun de 2018 - jul de 2020",
      link: "https://www.fiec.com.br/",
      employerName: "FIEC",
      content: [
        `With 2 years at FIEC, I have grown significantly as a professional. I spent 1 year in technical support and computer maintenance at the CPD, followed by another year in software development. During this time, I acquired substantial expertise in both areas.`
      ]
    },
  ]
};
