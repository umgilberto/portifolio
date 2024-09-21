import { Card } from "../Card";
import ConfigIcon from "@/assets/images/white_config.svg";
import "./style.css";
import { ProjectsUserdata } from "@/constants/userData";

interface ProjectsProps {
  title: string;
  projects: ProjectsUserdata[];
}

export function Projects({ title, projects }: ProjectsProps) {
  return (
    <Card title={title}>
      <div>
        <ul>
          <li className="mb-12 hover:bg-primary transition-all duration-300 ease-in-out p-1">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-600primary lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a className="inline-flex font-medium leading-tight text-onPrimary hover:text-accent focus-visible:text-accent">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span className="flex items-center gap-2">
                      In building...
                      <img src={ConfigIcon} className="w-20" style={{marginBottom: "-15px"}} alt="Building icon" />
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  This section is under construction. Please, come back later.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
}
