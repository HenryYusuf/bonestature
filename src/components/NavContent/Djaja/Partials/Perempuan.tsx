import { useState } from "react";

const Perempuan = () => {
  const [y1, setY1] = useState("");
  const [y2, setY2] = useState("");
  const [result, setResult] = useState("");

  const hitungTinggi = () => {
    const y1Value = parseFloat(y1);
    const y2Value = parseFloat(y2);

    if (!isNaN(y1Value) && !isNaN(y2Value)) {
      // Kalkulasi untuk dua variabel
      const tinggi1 = 76.484 + 0.2428 * y1Value + 2.0034 * y2Value;
      const tinggi2 = 91.6705 + 1.7849 * y1Value;
      const tinggi3 = 77.1995 + 2.2283 * y2Value;

      // const resultMin = Math.min(
      //   tinggi1 - 4.6463,
      //   tinggi2 - 5.0552,
      //   tinggi3 - 4.6384
      // );
      // const resultMax = Math.max(
      //   tinggi1 + 4.6463,
      //   tinggi2 + 5.0552,
      //   tinggi3 + 4.6384
      // );
      const intersectionMin = Math.max(
        tinggi1 - 4.6463,
        tinggi2 - 5.0552,
        tinggi3 - 4.6384
      );
      const intersectionMax = Math.min(
        tinggi1 + 4.6463,
        tinggi2 + 5.0552,
        tinggi3 + 4.6384
      );

      const resultMin = tinggi1 - 4.6463;
      const resultMax = tinggi1 + 4.6463;

      // const resultString = `Perkiraan tinggi badan: ${resultMin} - ${resultMax} cm (Range Terendah - Tertinggi)`;

      const resultString = `Perkiraan tinggi badan: ${resultMin.toFixed(
        5
      )} - ${resultMax.toFixed(5)} cm (Range Terendah - Tertinggi) atau
        ${intersectionMin.toFixed(5)} - ${intersectionMax.toFixed(
        5
      )} cm (Range Nilai Perpotongan)`;

      setResult(resultString);
    } else if (y1) {
      // Kalkulasi untuk satu variabel (y1)
      const tinggi = 86.8921 + 2.1195 * y1Value;
      const resultMinTibia = Math.min(tinggi - 5.0552);
      const resultMaxTibia = Math.max(tinggi + 5.0552);
      const resultString = `Perkiraan Tinggi badan: ${resultMinTibia} - ${resultMaxTibia} cm`;
      setResult(resultString);
    } else if (y2) {
      // Kalkulasi untuk satu variabel (y2)
      const tinggi = 86.0628 + 2.1427 * y2Value;
      const resultMinFibula = Math.min(tinggi - 4.6384);
      const resultMaxFibula = Math.max(tinggi + 4.6384);
      const resultString = `Perkiraan Tinggi badan: ${resultMinFibula} - ${resultMaxFibula} cm`;
      setResult(resultString);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
        <div className="mb-2">
          <label
            htmlFor="inputTulangTibia"
            className="text-base block mb-2 max-sm:text-sm"
          >
            Panjang Tulang Tibia
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={y1}
            onChange={(e) => setY1(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="inputTualngFibula"
            className="text-base block mb-2 max-sm:text-sm"
          >
            Panjang Tulang Fibula
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={y2}
            onChange={(e) => setY2(e.target.value)}
          />
        </div>
      </div>
      <div className="card-actions justify-start mt-2">
        <button className="btn btn-primary" onClick={hitungTinggi}>
          Hitung Tinggi
        </button>
      </div>
      {result && <div className="mt-4">{result}</div>}
    </>
  );
};

export default Perempuan;
