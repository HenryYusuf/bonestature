import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";

interface Props {
  selectedTab: string;
}

const HeaderNew = ({ selectedTab }: Props) => {
  return (
    <>
      <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">
        <div className="flex-1">
          <label
            htmlFor="left-sidebar-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <Bars3Icon className="h-5 inline-block w-5" />
          </label>
          <h1 className="text-2xl font-semibold ml-2">{selectedTab}</h1>
        </div>
      </div>
    </>
  );
};

export default HeaderNew;
