import { DocumentTextIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface Props {
  items: string[];
  onSelect: (value: string) => void;
  selectedTab: string;
}

const LeftSidebar = ({ items, onSelect, selectedTab }: Props) => {
  const close = () => {
    document.getElementById("left-sidebar-drawer")!.click();
  };

  return (
    <div className="drawer-side z-30">
      <label
        htmlFor="left-sidebar-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu pt-2 w-80 bg-base-100 min-h-full text-base-content">
        <button
          className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={() => close()}
        >
          <XMarkIcon className="h-5 inline-block w-5" />
        </button>
        <li className="mt-2 mb-5 font-semibold text-xl">
          <Link to={"/"}>AnthropoBone</Link>
        </li>

        {/* Menu */}
        {items.map((value, index) => (
          <li className="" key={index}>
            <a
              onClick={() => onSelect(value)}
              className={`${
                selectedTab === value
                  ? "font-semibold bg-base-200"
                  : "font-normal"
              }`}
            >
              <DocumentTextIcon className="h-6 w-6 inline" /> {value}
              {selectedTab === value ? (
                <span
                  className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                  aria-hidden="true"
                ></span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
