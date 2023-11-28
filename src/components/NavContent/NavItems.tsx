import AntropologiRagawi from "./AntropologiRagawi/AntropologiRagawi";
import Djaja from "./Djaja/Djaja";
import Mahakkanukrauh from "./Mahakkanukrauh/Mahakkanukrauh";
import Pearson from "./Pearson/Pearson";
import Sjovold from "./Sjovold/Sjovold";
import Stevenson from "./Stevenson/Stevenson";

interface Props {
  selectedTab: string;
}

function NavItems({ selectedTab }: Props) {
  let tabComponent = undefined;
  if (selectedTab === "ANTROPOLOGI RAGAWI") {
    tabComponent = <AntropologiRagawi />;
  } else if (selectedTab === "DJAJA SURYA ATMADJA") {
    tabComponent = <Djaja />;
  } else if (selectedTab === "PEARSON") {
    tabComponent = <Pearson />;
  } else if (selectedTab === "SJOVOLD") {
    tabComponent = <Sjovold />;
  } else if (selectedTab === "MAHAKKANUKRAUH") {
    tabComponent = <Mahakkanukrauh />;
  } else if (selectedTab === "STEVENSON") {
    tabComponent = <Stevenson />;
  }

  return <div>{tabComponent}</div>;
}

export default NavItems;
