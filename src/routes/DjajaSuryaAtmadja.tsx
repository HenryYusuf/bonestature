import { useState } from "react";
import TitleCard from "../components/Card/TitleCard";
import Laki from "../components/PageContent/Djaja/Partials/Laki";
import Perempuan from "../components/PageContent/Djaja/Partials/Perempuan";
import { Link } from "react-router-dom";

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
            ✓ Dapat menggunakan tulang tibia saja, fibula saja, atau keduanya.
            Jika menggunakan keduanya, masukkan panjang tulang dari individu dan
            lateralitas yang sama
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

const CloseButton = () => {
  return (
    <Link to={"/"}>
      <button className="btn btn-square btn-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </Link>
  );
};

const Djaja = () => {
  const [selectedTab, setSelectedTab] = useState("Laki Laki");

  function handleTab(tabName: string) {
    setSelectedTab(tabName);
  }

  return (
    <div className="bg-white w-full h-[100dvh]" data-theme="light">
      <div className="w-11/12 mx-auto py-10">
        <TitleCard
          title={`Formula Djaja Surya Atmadja | ${selectedTab}`}
          topMargin="mt-2"
          TopSideButtons={<TopSideButtons />}
          CloseButton={<CloseButton />}
        >
          <div role="tablist" className="tabs tabs-bordered mb-10">
            <a
              role="tab"
              className={`tab ${
                selectedTab === "Laki Laki" ? "tab-active" : ""
              }`}
              onClick={() => handleTab("Laki Laki")}
            >
              Laki - Laki
            </a>
            <a
              role="tab"
              className={`tab ${
                selectedTab === "Perempuan" ? "tab-active" : ""
              }`}
              onClick={() => handleTab("Perempuan")}
            >
              Perempuan
            </a>
          </div>
          {selectedTab === "Laki Laki" ? <Laki /> : <Perempuan />}
        </TitleCard>
      </div>
    </div>
  );
};

export default Djaja;
