import { useState } from "react";

const Laki = () => {
  const [y1, setY1] = useState("");
  const [y2, setY2] = useState("");
  const [result, setResult] = useState("");

  const hitungTinggi = () => {
    const y1Value = parseFloat(y1);
    const y2Value = parseFloat(y2);

    if (!isNaN(y1Value) && !isNaN(y2Value)) {
      // Kalkulasi untuk dua variabel
      const tinggi1 = 82.7996 + 0.811 * y1Value + 1.4191 * y2Value;
      const tinggi2 = 86.8921 + 2.1195 * y1Value;
      const tinggi3 = 86.0628 + 2.1427 * y2Value;

      const resultMin = Math.min(
        tinggi1 - 3.7294,
        tinggi2 - 3.9499,
        tinggi3 - 3.7954
      );
      const resultMax = Math.max(
        tinggi1 + 3.7294,
        tinggi2 + 3.9499,
        tinggi3 + 3.7954
      );
      const intersectionMin = Math.max(
        tinggi1 - 3.7294,
        tinggi2 - 3.9499,
        tinggi3 - 3.7954
      );
      const intersectionMax = Math.min(
        tinggi1 + 3.7294,
        tinggi2 + 3.9499,
        tinggi3 + 3.7954
      );

      const resultString = `Perkiraan tinggi badan: ${resultMin.toFixed(
        2
      )} - ${resultMax.toFixed(2)} cm (Range Terendah - Tertinggi) atau
        ${intersectionMin.toFixed(2)} - ${intersectionMax.toFixed(
        2
      )} cm (Range Nilai Perpotongan)`;

      setResult(resultString);
    } else if (y1) {
      // Kalkulasi untuk satu variabel (y1)
      const tinggi = 86.8921 + 2.1195 * y1Value;
      const resultMinTibia = Math.min(tinggi - 3.9499);
      const resultMaxTibia = Math.max(tinggi + 3.9499);
      const resultString = `Perkiraan Tinggi badan: ${resultMinTibia.toFixed(
        2
      )} - ${resultMaxTibia.toFixed(2)} cm`;
      setResult(resultString);
    } else if (y2) {
      // Kalkulasi untuk satu variabel (y2)
      const tinggi = 86.0628 + 2.1427 * y2Value;
      const resultMinFibula = Math.min(tinggi - 3.7954);
      const resultMaxFibula = Math.max(tinggi + 3.7954);
      const resultString = `Perkiraan Tinggi badan: ${resultMinFibula.toFixed(
        2
      )} - ${resultMaxFibula.toFixed(2)} cm`;
      setResult(resultString);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <label htmlFor="inputTulangTibia" className="text-base block mb-2">
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
        <div>
          <label htmlFor="inputTualngFibula" className="text-base block mb-2">
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
      <div className="card-actions justify-start mt-4">
        <button className="btn btn-primary" onClick={hitungTinggi}>
          Hitung Tinggi
        </button>
      </div>
      {result && <div className="mt-4">{result}</div>}
    </>
  );
};

export default Laki;
