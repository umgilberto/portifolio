interface NavProps {
  sections: string[]
}

export function Nav(props: NavProps) {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {props.sections.map((section) => (
          <li>
            <a className="group flex items-center py-3 active" href={`#${section}`}>
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"></span>
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
