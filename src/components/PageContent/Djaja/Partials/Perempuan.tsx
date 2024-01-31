import React, { useState } from "react";

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

      // const resultMin = tinggi1 - 4.6463;
      // const resultMax = tinggi1 + 4.6463;

      const resultMaxTibia = Math.max(tinggi2 + 5.0552);
      const resultMinFibula = Math.min(tinggi3 - 4.6384);

      const resultString = `Perkiraan tinggi badan: ${resultMinFibula.toFixed(
        5
      )} - ${resultMaxTibia.toFixed(5)} cm (Range Terendah - Tertinggi) atau
        ${intersectionMin.toFixed(5)} - ${intersectionMax.toFixed(
        5
      )} cm (Range Nilai Perpotongan)`;

      setResult(resultString);
    } else if (y1) {
      // Kalkulasi untuk satu variabel (y1)
      const tinggi = 91.6705 + 1.7849 * y1Value;
      const resultMinTibia = Math.min(tinggi - 5.0552);
      const resultMaxTibia = Math.max(tinggi + 5.0552);
      const resultString = `Perkiraan Tinggi badan: ${resultMinTibia.toFixed(
        5
      )} - ${resultMaxTibia.toFixed(5)} cm`;
      setResult(resultString);
    } else if (y2) {
      // Kalkulasi untuk satu variabel (y2)
      const tinggi = 77.1995 + 2.2283 * y2Value;
      const resultMinFibula = Math.min(tinggi - 4.6384);
      const resultMaxFibula = Math.max(tinggi + 4.6384);
      const resultString = `Perkiraan Tinggi badan: ${resultMinFibula.toFixed(
        5
      )} - ${resultMaxFibula.toFixed(5)} cm`;
      setResult(resultString);
    }
  };
  return (
    <>
      <div className="grid grid-cols1 md:grid-cols-2 gap-6">
        <div className="form-control w-full">
          <label className="label">
            <span className={"label-text text-base-content"}>
              Panjang Tulang Tibia
            </span>
          </label>
          <input
            type="text"
            value={y1}
            placeholder="Tulis Disini"
            onChange={(e) => setY1(e.target.value.replace(",", "."))}
            inputMode="numeric"
            className="input  input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className={"label-text text-base-content"}>
              Panjang Tulang Fibula
            </span>
          </label>
          <input
            type="text"
            value={y2}
            placeholder="Tulis Disini"
            onChange={(e) => setY2(e.target.value.replace(",", "."))}
            inputMode="numeric"
            className="input  input-bordered w-full "
          />
        </div>
      </div>
      <div className="mt-16">
        <button className="btn btn-primary float-right" onClick={hitungTinggi}>
          Hitung Tinggi
        </button>
      </div>
      {result && <div className="mt-4">{result}</div>}
    </>
  );
};

export default Perempuan;
