import { useState } from "react";

const Perempuan = () => {
  const [y1, setY1] = useState("");
  const [y2, setY2] = useState("");
  const [y3, setY3] = useState("");
  const [y4, setY4] = useState("");
  const [result, setResult] = useState("");

  const hitungTinggi = () => {
    const y1Value = parseFloat(y1);
    const y2Value = parseFloat(y2);
    const y3Value = parseFloat(y3);
    const y4Value = parseFloat(y4);

    if (
      !isNaN(y1Value) &&
      !isNaN(y2Value) &&
      !isNaN(y3Value) &&
      !isNaN(y4Value)
    ) {
      const tinggi1 = 0.782 * y1Value;
      const tinggi2 = 1.12 * y2Value;
      const tinggi3 = 1.059 * y3Value;
      const tinggi4 = 0.711 * y4Value;

      //  Tinggi badan = 1,945*y1 + 72,844
      const resultTinggiFemur = 1.945 * y1Value + 72.844;

      //  Tinggi badan = 2,352*y2 + 74,774
      const resultTinggiTibia = 2.352 * y2Value + 74.774;

      //  Tinggi badan = 2,754*y3 + 71,475
      const resultTinggiHumerus = 2.754 * y3Value + 71.475;

      //  Tinggi badan = 3,343*y4 + 81,224
      const resultTinggiRadius = 3.343 * y4Value + 81.224;

      //  Tinggi badan = 0,782*y1 + 1,12*y2 + 1,059*y3 + 0,711*y4 + 67,469
      const resultTinggiTotal = tinggi1 + tinggi2 + tinggi3 - tinggi4 + 67.469;

      const resultMinTinggi = Math.min(
        resultTinggiFemur,
        resultTinggiTibia,
        resultTinggiHumerus,
        resultTinggiRadius,
        resultTinggiTotal
      );
      const resultMaxTinggi = Math.max(
        resultTinggiFemur,
        resultTinggiTibia,
        resultTinggiHumerus,
        resultTinggiRadius,
        resultTinggiTotal
      );

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (!isNaN(y1Value) && !isNaN(y2Value) && !isNaN(y3Value)) {
      //  Tinggi badan = 1,945*y1 + 72,844
      const resultTinggiFemur = 1.945 * y1Value + 72.844;

      //  Tinggi badan = 2,352*y2 + 74,774
      const resultTinggiTibia = 2.352 * y2Value + 74.774;

      //  Tinggi badan = 2,754*y3 + 71,475
      const resultTinggiHumerus = 2.754 * y3Value + 71.475;

      //  Tinggi badan = 1,117*y1 + 1,125*y2 + 69,561
      const resultTinggiTotalFemurFibia1 =
        1.117 * y1Value + 1.125 * y2Value + 69.561;

      //  Tinggi badan = 1,126*y1 + 1,126*y2 + 69,154
      const resultTinggiTotalFemurFibia2 =
        1.126 * y1Value + 1.126 * y2Value + 69.154;

      //   Tinggi badan = 1,339*y1 + 1,027*y3 + 67,435
      const resultTinggiTotalFemurHumerus =
        1.339 * y1Value + 1.027 * y3Value + 67.435;

      const resultMinTinggi = Math.min(
        resultTinggiFemur,
        resultTinggiTibia,
        resultTinggiHumerus,
        resultTinggiTotalFemurFibia1,
        resultTinggiTotalFemurFibia2,
        resultTinggiTotalFemurHumerus
      );
      const resultMaxTinggi = Math.max(
        resultTinggiFemur,
        resultTinggiTibia,
        resultTinggiHumerus,
        resultTinggiTotalFemurFibia1,
        resultTinggiTotalFemurFibia2,
        resultTinggiTotalFemurHumerus
      );

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    }
    //  else if (!isNaN(y1Value) && !isNaN(y2Value)) {
    //   const tinggi1 = 1.22 * y1Value;
    //   const tinggi2 = 1.08 * y2Value;

    //   //  Tinggi badan = 1,88*y1 + 81,306
    //   const resultTinggiFemur = 1.88 * y1Value + 81.306;

    //   //  Tinggi badan = 2,376*y2 + 78,664
    //   const resultTinggiTibia = 2.376 * y2Value + 78.664;

    //   //  Tinggi badan = 1,22*y1 + 1,08*y2 + 71,443
    //   const resultTinggiTotal = tinggi1 + tinggi2 + 71.443;

    //   const resultMinTinggi = Math.min(
    //     resultTinggiFemur,
    //     resultTinggiTibia,
    //     resultTinggiTotal
    //   );
    //   const resultMaxTinggi = Math.max(
    //     resultTinggiFemur,
    //     resultTinggiTibia,
    //     resultTinggiTotal
    //   );

    //   const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
    //   setResult(resultString);
    // }
    else if (!isNaN(y1Value) && !isNaN(y3Value)) {
      //  Tinggi badan = 1,945*y1 + 72,844
      const resultTinggiFemur = 1.945 * y1Value + 72.844;

      //  Tinggi badan = 2,754*y3 + 71,475
      const resultTinggiHumerus = 2.754 * y3Value + 71.475;

      //  Tinggi badan = 1,339*y1 + 1,027*y3 + 67,435
      const resultTinggiTotalFemurHumerus =
        1.339 * y1Value + 1.027 * y3Value + 67.435;

      const resultMinTinggi = Math.min(
        resultTinggiFemur,
        resultTinggiHumerus,
        resultTinggiTotalFemurHumerus
      );
      const resultMaxTinggi = Math.max(
        resultTinggiFemur,
        resultTinggiHumerus,
        resultTinggiTotalFemurHumerus
      );

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (y1Value) {
      //  Tinggi badan = 1,945*y1 + 72,844
      const resultTinggiFemur = 1.945 * y1Value + 72.844;
      const resultString = `TB = ${resultTinggiFemur} cm`;
      setResult(resultString);
    } else if (y2Value) {
      //  Tinggi badan = 2,352*y2 + 74,774
      const resultTinggiTibia = 2.352 * y2Value + 74.774;
      const resultString = `TB = ${resultTinggiTibia} cm`;
      setResult(resultString);
    } else if (y3Value) {
      //  Tinggi badan = 2,754*y3 + 71,475
      const resultTinggiHumerus = 2.754 * y3Value + 71.475;
      const resultString = `TB = ${resultTinggiHumerus} cm`;
      setResult(resultString);
    } else if (y4Value) {
      //  Tinggi badan = 3,343*y4 + 81,224
      const resultTinggiRadius = 3.343 * y4Value + 81.224;
      const resultString = `TB = ${resultTinggiRadius} cm`;
      setResult(resultString);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <div className="mb-2">
          <label
            htmlFor="inputTulangFemur"
            className="text-base block mb-2 max-sm:text-sm max-md:text-sm"
          >
            Panjang Tulang Femur
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={y1}
            onChange={(e) => setY1(e.target.value.replace(",", "."))}
            inputMode="numeric"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="inputTualngTibia"
            className="text-base block mb-2 max-sm:text-sm max-md:text-sm"
          >
            Panjang Tulang Tibia
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={y2}
            onChange={(e) => setY2(e.target.value.replace(",", "."))}
            inputMode="numeric"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="inputTualngHumerus"
            className="text-base block mb-2 max-sm:text-sm max-md:text-sm"
          >
            Panjang Tulang Humerus
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={y3}
            onChange={(e) => setY3(e.target.value.replace(",", "."))}
            inputMode="numeric"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="inputTualngRadius"
            className="text-base block mb-2 max-sm:text-sm max-md:text-sm"
          >
            Panjang Tulang Radius
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={y4}
            onChange={(e) => setY4(e.target.value.replace(",", "."))}
            inputMode="numeric"
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
