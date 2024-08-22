import { useEffect } from "react";
import { themeChange } from "theme-change";

import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";

interface Props {
  selectedTab: string;
}

const Header = ({ selectedTab }: Props) => {
  useEffect(() => {
    themeChange(false);
  });

  return (
    <>
      <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md justify-between">
        <div className="">
          <label
            htmlFor="left-sidebar-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <Bars3Icon className="h-5 inline-block w-5" />
          </label>
        </div>
        <div>
          <h1 className="text-2xl font-semibold ml-2">{selectedTab}</h1>
        </div>
        <div className="mr-5">
          <select
            className="select select-bordered select-sm w-full max-w-xs"
            data-choose-theme
          >
            <option disabled value="">
              Pick a theme
            </option>
            <option value="light">Default</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
