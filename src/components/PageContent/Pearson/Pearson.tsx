import { useState } from "react";
import TitleCard from "../../Card/TitleCard";
import Laki from "./Partials/Laki";
import Perempuan from "./Partials/Perempuan";

const TopSideButtons = () => {
  return (
    <>
      <div className="inline-block float-right">
        <button
          className="btn px-6 btn-sm normal-case btn-primary"
          onClick={() =>
            (
              document.getElementById("petunjuk")! as HTMLDialogElement
            ).showModal()
          }
        >
          Petunjuk Formula
        </button>
      </div>
      <dialog id="petunjuk" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Petunjuk Formula</h3>
          <p className="py-4 text-base font-normal">
            ✓ Dapat menggunakan satu s.d. empat tulang panjang (femur, tibia,
            humerus, radius). Jika menggunakan lebih dari satu tulang, masukkan
            panjang tulang dari individu dan lateralitas yang sama.
          </p>
          <p className="py-4 text-base font-normal">
            ✓ Harap ubah <span className="text-info">koma(,)</span> menjadi{" "}
            <span className="text-info">titik(.)</span> jika angka yang
            diberikan berupa desimal.
          </p>
          <p className="py-4 text-base font-normal">
            ✓ Masukkan panjang tulang yang dimiliki dalam{" "}
            <span className="text-info">centimeter (cm)</span>
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

const Pearson = () => {
  const [selectedTab, setSelectedTab] = useState("Laki Laki");

  function handleTab(tabName: string) {
    setSelectedTab(tabName);
  }

  return (
    <>
      <div role="tablist" className="tabs tabs-bordered mb-4">
        <a
          role="tab"
          className={`tab ${selectedTab === "Laki Laki" ? "tab-active" : ""}`}
          onClick={() => handleTab("Laki Laki")}
        >
          Laki - Laki
        </a>
        <a
          role="tab"
          className={`tab ${selectedTab === "Perempuan" ? "tab-active" : ""}`}
          onClick={() => handleTab("Perempuan")}
        >
          Perempuan
        </a>
      </div>

      <TitleCard
        title={`Formula Pearson | ${selectedTab}`}
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        {selectedTab === "Laki Laki" ? <Laki /> : <Perempuan />}
      </TitleCard>
    </>
  );
};

export default Pearson;
