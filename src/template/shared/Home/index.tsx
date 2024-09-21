import { AboutMe } from "@/components/customCompoent/AboutMe";
import { Experience } from "@/components/customCompoent/Experience";
import { Nav } from "@/components/customCompoent/Nav";
import { Projects } from "@/components/customCompoent/Projects";
import { SectionsEnum, userData } from "@/constants/userData";

const Home = () => {

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-onPrimary sm:text-5xl">
              <a href="/">{userData.self.completeName}</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-onPrimary sm:text-xl">
              {userData.job.position}
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-onSurface">
              {userData.about.resume}
            </p>
            <Nav sections={userData.sections} />
          </div>
          <ul className="ml-1 mt-8 flex items-center">
            {userData.complement.map((item) => (
              <li className="mr-5 text-xs shrink-0" key={item.link}>
                <a
                  className="block hover:text-primary"
                  href={item.link}
                  target="_blank"
                >
                  <img className="h-6 w-6" src={item.icon} alt="icon" />
                </a>
              </li>
            ))}
          </ul>
        </header>
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <AboutMe
            title={SectionsEnum.About}
            content={userData.main.about.content}
          />
          <Experience
            title={SectionsEnum.Experience}
            experiences={userData.experience}
          />
          <Projects title={SectionsEnum.Projects} projects={[]}/>
        </main>
      </div>
    </div>
  );
};

export { Home };
