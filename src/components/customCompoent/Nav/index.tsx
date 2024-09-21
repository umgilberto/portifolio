interface NavProps {
  sections: string[];
}

export function Nav(props: NavProps) {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {props.sections.map((section) => (
          <li key={section}>
            <a
              className="group flex items-center py-3 active"
              href={`#${section}`}
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-primary transition-all group-hover:w-16 group-hover:bg-primary-light group-focus-visible:w-16 group-focus-visible:bg-primary-light motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-primary-light group-hover:text-primary group-focus-visible:text-primary">
                {section}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
