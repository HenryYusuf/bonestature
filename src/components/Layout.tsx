import { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import PageContent from "./PageContent";

const TAB_ITEMS: string[] = [
  "ANTROPOLOGI RAGAWI",
  "DJAJA SURYA ATMADJA",
  "PEARSON",
  // "SJOVOLD",
  // "MAHAKKANUKRAUH",
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
        <PageContent selectedTab={selectedTab} onSelect={navHandler} />
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
