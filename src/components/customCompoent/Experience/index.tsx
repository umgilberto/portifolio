import { ExperienceUserdata } from "@/constants/userData";
import { Card } from "../Card";
import LinkIcon from "@/assets/images/white_link.svg";
import "./style.css";

interface ExperienceProps {
  title: string;
  experiences: ExperienceUserdata[];
}

export function Experience({ title, experiences }: ExperienceProps) {
  return (
    <Card title={title}>
      <div>
        <ol>
          {experiences.map((experience, index) => (
            <li className="mb-12 hover:bg-primary transition-all duration-300 ease-in-out rounded-lg p-1 " key={index}>
              <div className="group relative pb-1">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover lg:group-hover:shadow-lg"></div>
                <div className="z-10">
                  <div className="mb-2 mt-1 text-xs font-semibold text-onPrimary uppercase tracking-wide text-secondary">
                    {experience.date}
                  </div>
                  <h3 className="font-medium leading-snug text-onPrimary">
                    <div>
                      <a
                        target="_blank"
                        href={experience.link}
                        className="inline-flex font-medium leading-tight text-onPrimary hover:text-accent focus-visible:text-accent"
                      >
                        <span className="flex items-center gap-2">
                          {experience.title}&nbsp;&nbsp;
                          {experience.employerName}
                          <img src={LinkIcon} alt="Link icon" />
                        </span>
                      </a>
                    </div>
                  </h3>
                  {experience.content.map((item, contentIndex) => (
                    <p
                      className="mt-2 text-sm leading-normal text-onSurface"
                      key={contentIndex}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Card>
  );
}
