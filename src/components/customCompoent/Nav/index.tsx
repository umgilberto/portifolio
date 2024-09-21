import { SectionsEnum } from "@/constants/userData";
import { useEffect, useState } from "react";

interface NavProps {
  sections: string[];
}

export function Nav({ sections }: NavProps) {
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = "";
      const currSessions = Object.values(SectionsEnum);
      currSessions.forEach((curr: SectionsEnum) => {
        const element = document.getElementById(curr);
        if (element) {
          const { offsetTop, clientHeight } = element;
          if (
            scrollY >= offsetTop - 50 &&
            scrollY < offsetTop + clientHeight - 50
          ) {
            currentSection = `${curr}`;
          }
        }
      });

      setActiveSection(currentSection);
      console.log(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set the initial active item

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map((curr) => (
          <li key={curr}>
            <a
              className={`group flex items-center py-3 ${
                activeSection === curr ? "active" : ""
              }`}
              href={`#${curr}`}
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-primary transition-all 
                ${
                  activeSection === curr
                    ? "w-16 bg-primary-light"
                    : "group-hover:w-16 group-hover:bg-primary-light group-focus-visible:w-16 group-focus-visible:bg-primary-light"
                } 
                motion-reduce:transition-none`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest 
                ${
                  activeSection === curr
                    ? "text-primary"
                    : "text-primary-light group-hover:text-primary group-focus-visible:text-primary"
                }`}
              >
                {curr}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
