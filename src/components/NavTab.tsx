interface Props {
  items: string[];
  onSelect: (value: string) => void;
}

const NavTab = ({ items, onSelect }: Props) => {
  let buttonClassname =
    "px-4 py-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-800 hover:text-white";

  return (
    <div className="flex gap-4">
      {items.map((value, index) => (
        <button
          key={index}
          className={buttonClassname}
          onClick={() => onSelect(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default NavTab;
