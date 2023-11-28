import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NavItems from "./components/NavContent/NavItems";
import Welcome from "./pages/Welcome";

const TAB_ITEMS: string[] = [
  "ANTROPOLOGI RAGAWI",
  "DJAJA SURYA ATMADJA",
  // "PEARSON",
  // "SJOVOLD",
  // "MAHAKKANUKRAUH",
  // "STEVENSON",
];

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  function navHandler(value: string) {
    setSelectedTab(value);
  }
  return (
    <div className="flex min-h-screen">
      <Sidebar items={TAB_ITEMS} onSelect={navHandler} />
      <section id="content" className="w-full flex flex-col">
        <Header />
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
