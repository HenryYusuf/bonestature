import { useState } from "react";

import Card from "../../Card/Card";
import Laki from "./Partials/Laki";
import Perempuan from "./Partials/Perempuan";

function Djaja() {
  const [selectedTab, setSelectedTab] = useState("laki");

  function handleTab(tabName: string) {
    setSelectedTab(tabName);
  }

  return (
    <>
      <div role="tablist" className="tabs tabs-bordered mb-4">
        <a
          role="tab"
          className={`tab ${selectedTab === "laki" ? "tab-active" : ""}`}
          onClick={() => handleTab("laki")}
        >
          Laki - Laki
        </a>
        <a
          role="tab"
          className={`tab ${selectedTab === "perempuan" ? "tab-active" : ""}`}
          onClick={() => handleTab("perempuan")}
        >
          Perempuan
        </a>
      </div>
      <Card>
        <div className="card-body">
          <p className="font-semibold text-base max-sm:text-sm">
            <span className="text-red-500">* </span>
            Dapat menggunakan tulang tibia saja, fibula saja, atau keduanya.
            Jika menggunakan keduanya, masukkan panjang tulang dari individu dan
            lateralitas yang sama
          </p>
          <p className="font-semibold text-base max-sm:text-sm">
            <span className="text-red-500">* </span>
            Harap ubah <span className="text-info">koma(,)</span> menjadi{" "}
            <span className="text-info">titik(.)</span> jika angka yang
            diberikan berupa desimal.
          </p>
          <p className="font-semibold text-base max-sm:text-sm">
            <span className="text-red-500">* </span>
            Masukkan dalam satuan{" "}
            <span className="text-info">centimeter (cm)</span>
          </p>
          <div className="divider"></div>
          {selectedTab === "laki" ? <Laki /> : <Perempuan />}
        </div>
      </Card>
    </>
  );
}

export default Djaja;
