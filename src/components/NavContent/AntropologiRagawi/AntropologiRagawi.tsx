import { useState } from "react";
import Card from "../../Card/Card";

function AntropologiRagawi() {
  const [variables, setVariables] = useState({
    y1: 0,
    y2: 0,
    y3: 0,
    y4: 0,
    y5: 0,
    y6: 0,
    y7: 0,
    y8: 0,
    y9: 0,
    y10: 0,
    y11: 0,
    y12: 0,
  });

  const [heightResults, setHeightResults] = useState<number[]>([]);

  function handleVariableChange(variableName: string, value: number) {
    setVariables((prevVariables) => ({
      ...prevVariables,
      [variableName]: value,
    }));
  }

  let result = undefined;

  function calculateHeight() {
    const heights = [
      897 + 1.74 * variables.y1,
      822 + 1.9 * variables.y2,
      879 + 2.12 * variables.y3,
      847 + 2.22 * variables.y4,
      867 + 2.19 * variables.y5,
      883 + 2.14 * variables.y6,
      847 + 2.6 * variables.y7,
      805 + 2.74 * variables.y8,
      842 + 3.45 * variables.y9,
      862 + 3.4 * variables.y10,
      819 + 3.15 * variables.y11,
      847 + 3.06 * variables.y12,
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
    <>
      <Card>
        <div className="card-body">
          <p className="font-semibold text-base">
            <span className="text-red-500">* </span>
            Sampel yang digunakan pada pembuatan formula adalah laki-laki etnis
            Jawa, tetapi formula ini dapat digunakan pada seluruh etnis dan
            jenis kelamin
          </p>
          <p className="font-semibold text-base">
            <span className="text-red-500">* </span>
            Masukkan panjang tulang yang dimiliki dalam{" "}
            <span className="text-info">milimeter (mm)</span>
          </p>
          <div className="divider"></div>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="text-base block mb-2">
                Panjang Tulang Femur Kanan
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={variables.y1}
                onChange={(e) =>
                  handleVariableChange("y1", Number(e.target.value))
                }
              />
            </div>
            <div>
              <label className="text-base block mb-2">
                Panjang Tulang Femur Kiri
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={variables.y2}
                onChange={(e) =>
                  handleVariableChange("y2", Number(e.target.value))
                }
              />
            </div>
            <div>
              <label className="text-base block mb-2">
                Panjang Tulang Tibia Kanan
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={variables.y3}
                onChange={(e) =>
                  handleVariableChange("y3", Number(e.target.value))
                }
              />
            </div>
            <div>
              <label className="text-base block mb-2">
                Panjang Tulang Tibia Kiri
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={variables.y4}
                onChange={(e) =>
                  handleVariableChange("y4", Number(e.target.value))
                }
              />
            </div>
            <div>
              <label className="text-base block mb-2">
                Panjang Tulang Fibula Kanan
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={variables.y5}
                onChange={(e) =>
                  handleVariableChange("y5", Number(e.target.value))
                }
              />
            </div>
            <div>
              <label className="text-base block mb-2">
                Panjang Tulang Fibula Kiri
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={variables.y6}
                onChange={(e) =>
                  handleVariableChange("y6", Number(e.target.value))
                }
              />
            </div>
            <div>
              <label className="text-base block mb-2">
                Panjang Tulang Humerus Kanan
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={variables.y7}
                onChange={(e) =>
                  handleVariableChange("y7", Number(e.target.value))
                }
              />
            </div>
            <div>
              <label className="text-base block mb-2">
                Panjang Tulang Humerus Kiri
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={variables.y8}
                onChange={(e) =>
                  handleVariableChange("y8", Number(e.target.value))
                }
              />
            </div>
            <div>
              <label className="text-base block mb-2">
                Panjang Tulang Radius Kanan
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={variables.y9}
                onChange={(e) =>
                  handleVariableChange("y9", Number(e.target.value))
                }
              />
            </div>
            <div>
              <label className="text-base block mb-2">
                Panjang Tulang Radius Kiri
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={variables.y10}
                onChange={(e) =>
                  handleVariableChange("y10", Number(e.target.value))
                }
              />
            </div>
            <div>
              <label className="text-base block mb-2">
                Panjang Tulang Ulna Kanan
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={variables.y11}
                onChange={(e) =>
                  handleVariableChange("y11", Number(e.target.value))
                }
              />
            </div>
            <div>
              <label className="text-base block mb-2">
                Panjang Tulang Ulna Kiri
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={variables.y12}
                onChange={(e) =>
                  handleVariableChange("y12", Number(e.target.value))
                }
              />
            </div>
          </div>
        </div>
        <div className="card-actions justify-center m-2">
          <button className="btn btn-primary" onClick={calculateHeight}>
            Hitung Tinggi
          </button>
        </div>
      </Card>
      {result.length === 0 ? (
        ""
      ) : (
        <Card>
          <p>
            Hasil Perkiraan Tinggi badan: {nilaiTerendah}
            {nilaiTertinggi === nilaiTerendah ? "" : ` - ${nilaiTertinggi} `} mm
          </p>
        </Card>
      )}
    </>
  );
}

export default AntropologiRagawi;
