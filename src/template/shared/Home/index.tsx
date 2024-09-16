import { Nav } from "@/components/customCompoent/Nav";
import { userData } from "@/constants/userData";

const Home = () => {
  return (
    <div className="flex justify-center min-h-screen max-w-screen px-6 font-sans md:px-12 md:py-24 lg:py-0">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">{userData.self.completeName}</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            {userData.job.position}
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            {userData.about.resume}
          </p>
          <Nav sections={userData.sections} />
        </div>
      </header>
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        {userData.sections.map((section) =>
          userData.main[section] ? (
            <section
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label={userData.main[section].arialabel}
              id={section}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  {section}
                </h2>
              </div>
              <div>
                <p className="mb-4">{userData.main[section].content}</p>
              </div>
            </section>
          ) : null
        )}
      </main>
    </div>
  );
};

export { Home };
