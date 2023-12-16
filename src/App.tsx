import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NavItems from "./components/NavContent/NavItems";
import Welcome from "./pages/Welcome";

const TAB_ITEMS: string[] = [
  "ANTROPOLOGI RAGAWI",
  "DJAJA SURYA ATMADJA",
  "PEARSON",
  // "SJOVOLD",
  // "MAHAKKANUKRAUH",
  "STEVENSON",
];

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  const [visibleSidebar, setVisibleSidebar] = useState(true);

  function navHandler(value: string) {
    setSelectedTab(value);
  }

  function handleSidebar() {
    setVisibleSidebar(!visibleSidebar);
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar
        items={TAB_ITEMS}
        onSelect={navHandler}
        onCollapsed={handleSidebar}
        visibleSidebar={visibleSidebar}
      />
      <section
        id="content"
        className={`w-full flex flex-col ${
          visibleSidebar ? "ml-[20%]" : "ml-0 max-sm:ml-0"
        }`}
      >
        <Header onCollapsed={handleSidebar} />
        <main className="flex-1 p-4">
          {selectedTab === "" ? (
            <Welcome />
          ) : (
            <NavItems selectedTab={selectedTab} />
          )}
        </main>
      </section>
    </div>
  );
}

export default App;
