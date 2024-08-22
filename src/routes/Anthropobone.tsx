import { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import PageContent from "../components/PageContent";

const TAB_ITEMS: string[] = [
  "ANTROPOLOGI RAGAWI",
  "DJAJA SURYA ATMADJA",
  "PEARSON",
  "STEVENSON",
];

const Layout = () => {
  const [selectedTab, setSelectedTab] = useState("");

  function navHandler(value: string) {
    setSelectedTab(value);
  }

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <PageContent selectedTab={selectedTab} />
        <LeftSidebar
          items={TAB_ITEMS}
          onSelect={navHandler}
          selectedTab={selectedTab}
        />
      </div>
    </>
  );
};

export default Layout;
