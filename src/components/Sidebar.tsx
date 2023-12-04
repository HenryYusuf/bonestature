interface Props {
  items: string[];
  onSelect: (value: string) => void;
  onCollapsed: () => void;
  visibleSidebar: boolean;
}

const Sidebar = ({ items, onSelect, onCollapsed, visibleSidebar }: Props) => {
  return (
    <aside
      className={`bg-neutral fixed z-50 h-screen ${
        visibleSidebar
          ? "w-1/5 max-sm:w-full ease-in duration-100"
          : "w-0 max-sm:w-0 ease-out duration-100"
      }`}
    >
      <div className={`flex pt-4 pb-2 px-6 justify-between items-center`}>
        <h3
          className={`cursor-pointer ${
            visibleSidebar ? "" : "hidden max-sm:hidden"
          }`}
          onClick={() => onSelect("")}
        >
          BoneStature
        </h3>
        <button
          className={`sm:hidden ${
            visibleSidebar ? "" : "hidden max-sm:hidden"
          }`}
          onClick={onCollapsed}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="divider m-0"></div>
      <ul
        className={`menu mt-2 w-full rounded-box ${
          visibleSidebar ? "" : "hidden max-sm:hidden"
        }`}
      >
        <li className="space-y-4">
          {items.map((value, index) => (
            <a key={index} className="py-4" onClick={() => onSelect(value)}>
              {value}
            </a>
          ))}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
