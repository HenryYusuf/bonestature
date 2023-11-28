interface Props {
  items: string[];
  onSelect: (value: string) => void;
}

const Sidebar = ({ items, onSelect }: Props) => {
  return (
    <aside className="bg-neutral w-1/5">
      <h3
        className="pt-4 pb-2 px-6 cursor-pointer"
        onClick={() => onSelect("")}
      >
        BoneStature
      </h3>
      <div className="divider m-0"></div>
      <ul className="menu mt-2 w-full rounded-box">
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
