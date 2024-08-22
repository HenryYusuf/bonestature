import { useState } from "react";

import TitleCard from "../components/Card/TitleCard";
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
            ✓ Sampel yang digunakan pada pembuatan formula adalah laki-laki
            etnis Jawa, tetapi formula ini dapat digunakan pada seluruh etnis
            dan jenis kelamin
          </p>
          <p className="py-4 text-base font-normal">
            ✓ Harap ubah <span className="text-info">koma(,)</span> menjadi{" "}
            <span className="text-info">titik(.)</span> jika angka yang
            diberikan berupa desimal.
          </p>
          <p className="py-4 text-base font-normal">
            ✓ Masukkan panjang tulang yang dimiliki dalam{" "}
            <span className="text-info">milimeter (mm)</span>
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

const AntropologiRagawi = () => {
  const [variables, setVariables] = useState({
    y1: "",
    y2: "",
    y3: "",
    y4: "",
    y5: "",
    y6: "",
    y7: "",
    y8: "",
    y9: "",
    y10: "",
    y11: "",
    y12: "",
  });

  const [heightResults, setHeightResults] = useState<number[]>([]);

  function handleVariableChange(variableName: string, value: string) {
    setVariables((prevVariables) => ({
      ...prevVariables,
      [variableName]: value,
    }));
  }

  let result = undefined;

  function calculateHeight() {
    const heights = [
      897 + 1.74 * Number(variables.y1),
      822 + 1.9 * Number(variables.y2),
      879 + 2.12 * Number(variables.y3),
      847 + 2.22 * Number(variables.y4),
      867 + 2.19 * Number(variables.y5),
      883 + 2.14 * Number(variables.y6),
      847 + 2.6 * Number(variables.y7),
      805 + 2.74 * Number(variables.y8),
      842 + 3.45 * Number(variables.y9),
      862 + 3.4 * Number(variables.y10),
      819 + 3.15 * Number(variables.y11),
      847 + 3.06 * Number(variables.y12),
    ];

    setHeightResults(heights);
  }

  result = heightResults.map((height, index) => (
    <span key={index}>
      {[897, 822, 879, 847, 867, 883, 805, 842, 862, 819].includes(height)
        ? ""
        : height}
    </span>
  ));

  // Hilangkan nilai kosong atau tidak valid
  const filteredArray = result.filter(Boolean);
  // parse array numerik
  const parseArray = filteredArray.map((element) =>
    parseFloat(element.props.children)
  );

  const arrayWithInfinity = parseArray.map((value) =>
    isNaN(value) ? Infinity : value
  );

  // Urutkan array
  const sortedArray = arrayWithInfinity.sort((a, b) => a - b);

  // Hapus nilai Infinity dari hasil sorting
  const resultArray = sortedArray.filter((value) => !isNaN(value));

  const arrayWithoutInfinity = resultArray.filter((value) => isFinite(value));

  // Mendapatkan nilai terendah setelah menghilangkan Infinity
  const nilaiTerendah = Math.min(...arrayWithoutInfinity);

  // Mendapatkan nilai tertinggi setelah menghilangkan Infinity
  const nilaiTertinggi = Math.max(...arrayWithoutInfinity);

  return (
    <div className="bg-white w-full h-full" data-theme="light">
      <div className="w-11/12 mx-auto py-10">
        <TitleCard
          title="Formula Antropologi Ragawi"
          topMargin="mt-2"
          TopSideButtons={<TopSideButtons />}
          CloseButton={<CloseButton />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className={"label-text text-base-content"}>
                  Panjang Tulang Femur Kanan
                </span>
              </label>
              <input
                type="text"
                value={variables.y1}
                placeholder="Tulis Disini"
                onChange={(e) =>
                  handleVariableChange("y1", e.target.value.replace(",", "."))
                }
                inputMode="numeric"
                className="input  input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className={"label-text text-base-content"}>
                  Panjang Tulang Femur Kiri
                </span>
              </label>
              <input
                type="text"
                value={variables.y2}
                placeholder="Tulis Disini"
                onChange={(e) =>
                  handleVariableChange("y2", e.target.value.replace(",", "."))
                }
                inputMode="numeric"
                className="input  input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className={"label-text text-base-content"}>
                  Panjang Tulang Tibia Kanan
                </span>
              </label>
              <input
                type="text"
                value={variables.y3}
                placeholder="Tulis Disini"
                onChange={(e) =>
                  handleVariableChange("y3", e.target.value.replace(",", "."))
                }
                inputMode="numeric"
                className="input  input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className={"label-text text-base-content"}>
                  Panjang Tulang Tibia Kiri
                </span>
              </label>
              <input
                type="text"
                value={variables.y4}
                placeholder="Tulis Disini"
                onChange={(e) =>
                  handleVariableChange("y4", e.target.value.replace(",", "."))
                }
                inputMode="numeric"
                className="input  input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className={"label-text text-base-content"}>
                  Panjang Tulang Fibula Kanan
                </span>
              </label>
              <input
                type="text"
                value={variables.y5}
                placeholder="Tulis Disini"
                onChange={(e) =>
                  handleVariableChange("y5", e.target.value.replace(",", "."))
                }
                inputMode="numeric"
                className="input  input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className={"label-text text-base-content"}>
                  Panjang Tulang Fibula Kiri
                </span>
              </label>
              <input
                type="text"
                value={variables.y6}
                placeholder="Tulis Disini"
                onChange={(e) =>
                  handleVariableChange("y6", e.target.value.replace(",", "."))
                }
                inputMode="numeric"
                className="input  input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className={"label-text text-base-content"}>
                  Panjang Tulang Humerus Kanan
                </span>
              </label>
              <input
                type="text"
                value={variables.y7}
                placeholder="Tulis Disini"
                onChange={(e) =>
                  handleVariableChange("y7", e.target.value.replace(",", "."))
                }
                inputMode="numeric"
                className="input  input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className={"label-text text-base-content"}>
                  Panjang Tulang Humerus Kiri
                </span>
              </label>
              <input
                type="text"
                value={variables.y8}
                placeholder="Tulis Disini"
                onChange={(e) =>
                  handleVariableChange("y8", e.target.value.replace(",", "."))
                }
                inputMode="numeric"
                className="input  input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className={"label-text text-base-content"}>
                  Panjang Tulang Radius Kanan
                </span>
              </label>
              <input
                type="text"
                value={variables.y9}
                placeholder="Tulis Disini"
                onChange={(e) =>
                  handleVariableChange("y9", e.target.value.replace(",", "."))
                }
                inputMode="numeric"
                className="input  input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className={"label-text text-base-content"}>
                  Panjang Tulang Radius Kiri
                </span>
              </label>
              <input
                type="text"
                value={variables.y10}
                placeholder="Tulis Disini"
                onChange={(e) =>
                  handleVariableChange("y10", e.target.value.replace(",", "."))
                }
                inputMode="numeric"
                className="input  input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className={"label-text text-base-content"}>
                  Panjang Tulang Ulna Kanan
                </span>
              </label>
              <input
                type="text"
                value={variables.y11}
                placeholder="Tulis Disini"
                onChange={(e) =>
                  handleVariableChange("y11", e.target.value.replace(",", "."))
                }
                inputMode="numeric"
                className="input  input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className={"label-text text-base-content"}>
                  Panjang Tulang Ulna Kiri
                </span>
              </label>
              <input
                type="text"
                value={variables.y12}
                placeholder="Tulis Disini"
                onChange={(e) =>
                  handleVariableChange("y12", e.target.value.replace(",", "."))
                }
                inputMode="numeric"
                className="input  input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="mt-16">
              <button
                className="btn btn-primary float-right"
                onClick={calculateHeight}
              >
                Hitung Tinggi
              </button>
            </div>
            {!isFinite(nilaiTerendah) && !isFinite(nilaiTertinggi) ? (
              <p></p>
            ) : (
              <p className="self-center bg-success/20 border border-success w-fit p-2 rounded-lg">
                Hasil Perkiraan Tinggi badan: {nilaiTerendah}
                {nilaiTertinggi === nilaiTerendah
                  ? ""
                  : ` - ${nilaiTertinggi} `}{" "}
                mm atau {(nilaiTerendah * 0.1).toFixed(2)}{" "}
                {nilaiTertinggi === nilaiTerendah
                  ? ""
                  : ` - ${(nilaiTertinggi * 0.1).toFixed(2)} `}{" "}
                cm
              </p>
            )}
          </div>
        </TitleCard>
      </div>
    </div>
  );
};

export default AntropologiRagawi;
