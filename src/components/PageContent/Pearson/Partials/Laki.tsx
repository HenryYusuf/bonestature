import React, { useState } from "react";

const Laki = () => {
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
      const tinggi1 = 0.913 * y1Value;
      const tinggi2 = 0.6 * y2Value;
      const tinggi3 = 1.225 * y3Value;
      const tinggi4 = 0.187 * y4Value;

      //  Tinggi badan = 1,88*y1 + 81,306
      const resultTinggiFemur = 1.88 * y1Value + 81.306;

      //  Tinggi badan = 2,376*y2 + 78,664
      const resultTinggiTibia = 2.376 * y2Value + 78.664;

      //  Tinggi badan = 2,894*y3 + 70,641
      const resultTinggiHumerus = 2.894 * y3Value + 70.641;

      //  Tinggi badan = 3,271*y4 + 85,925
      const resultTinggiRadius = 3.271 * y4Value + 85.925;

      //  Tinggi badan = 0,913*y1 + 0,6*y2 + 1,225*y3 + 0,187*y4 + 67,049
      const resultTinggiTotal = tinggi1 + tinggi2 + tinggi3 - tinggi4 + 67.049;

      //  Tinggi badan = 1,22*y1 + 1,08*y2 + 71,443
      const resultTinggiTotalFemurFibia1 =
        1.22 * y1Value + 1.08 * y2Value + 71.443;

      //  Tinggi badan = 1,159*y1 + 1,159*y2 + 71,272
      const resultTinggiTotalFemurFibia2 =
        1.159 * y1Value + 1.159 * y2Value + 71.272;

      //   Tinggi badan = 1,03*y1 + 1,557*y3 + 68,397
      const resultTinggiTotalFemurHumerus =
        1.03 * y1Value + 1.557 * y3Value + 68.397;

      // 	Tinggi badan = 2,769*y3 + 0,195*y4 + 69,788
      const resultTinggiHumerusRadius1 =
        2.769 * y3Value + 0.195 * y4Value + 69.788;

      // 	Tinggi badan = 1,73*y3 + 1,73*y4 + 66,885
      const resultTinggiHumerusRadius2 =
        1.73 * y3Value + 1.73 * y4Value + 66.885;

      const resultMinTinggi = Math.min(
        resultTinggiFemur,
        resultTinggiTibia,
        resultTinggiHumerus,
        resultTinggiRadius,
        resultTinggiTotal,
        resultTinggiTotalFemurFibia1,
        resultTinggiTotalFemurFibia2,
        resultTinggiTotalFemurHumerus,
        resultTinggiHumerusRadius1,
        resultTinggiHumerusRadius2
      );
      const resultMaxTinggi = Math.max(
        resultTinggiFemur,
        resultTinggiTibia,
        resultTinggiHumerus,
        resultTinggiRadius,
        resultTinggiTotal,
        resultTinggiTotalFemurFibia1,
        resultTinggiTotalFemurFibia2,
        resultTinggiTotalFemurHumerus,
        resultTinggiHumerusRadius1,
        resultTinggiHumerusRadius2
      );

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (!isNaN(y1Value) && !isNaN(y2Value) && !isNaN(y3Value)) {
      //  Tinggi badan = 1,88*y1 + 81,306
      const resultTinggiFemur = 1.88 * y1Value + 81.306;

      //  Tinggi badan = 2,376*y2 + 78,664
      const resultTinggiTibia = 2.376 * y2Value + 78.664;

      //  Tinggi badan = 2,894*y3 + 70,641
      const resultTinggiHumerus = 2.894 * y3Value + 70.641;

      //  Tinggi badan = 1,22*y1 + 1,08*y2 + 71,443
      const resultTinggiTotalFemurFibia1 =
        1.22 * y1Value + 1.08 * y2Value + 71.443;

      //  Tinggi badan = 1,159*y1 + 1,159*y2 + 71,272
      const resultTinggiTotalFemurFibia2 =
        1.159 * y1Value + 1.159 * y2Value + 71.272;

      //   Tinggi badan = 1,03*y1 + 1,557*y3 + 68,397
      const resultTinggiTotalFemurHumerus =
        1.03 * y1Value + 1.557 * y3Value + 68.397;

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
    } else if (!isNaN(y1Value) && !isNaN(y2Value) && !isNaN(y4Value)) {
      //  Tinggi badan = 1,88*y1 + 81,306
      const resultTinggiFemur = 1.88 * y1Value + 81.306;

      //  Tinggi badan = 2,376*y2 + 78,664
      const resultTinggiTibia = 2.376 * y2Value + 78.664;

      //  Tinggi badan = 3,271*y4 + 85,925
      const resultTinggiRadius = 3.271 * y4Value + 85.925;

      //  Tinggi badan = 1,22*y1 + 1,08*y2 + 71,443
      const resultTinggiTotalFemurFibia1 =
        1.22 * y1Value + 1.08 * y2Value + 71.443;

      //  Tinggi badan = 1,159*y1 + 1,159*y2 + 71,272
      const resultTinggiTotalFemurFibia2 =
        1.159 * y1Value + 1.159 * y2Value + 71.272;

      const resultMinTinggi = Math.min(
        resultTinggiFemur,
        resultTinggiTibia,
        resultTinggiRadius,
        resultTinggiTotalFemurFibia1,
        resultTinggiTotalFemurFibia2
      );
      const resultMaxTinggi = Math.max(
        resultTinggiFemur,
        resultTinggiTibia,
        resultTinggiRadius,
        resultTinggiTotalFemurFibia1,
        resultTinggiTotalFemurFibia2
      );

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (!isNaN(y1Value) && !isNaN(y3Value) && !isNaN(y4Value)) {
      //  Tinggi badan = 1,88*y1 + 81,306
      const resultTinggiFemur = 1.88 * y1Value + 81.306;

      //  Tinggi badan = 2,894*y3 + 70,641
      const resultTinggiHumerus = 2.894 * y3Value + 70.641;

      //  Tinggi badan = 3,271*y4 + 85,925
      const resultTinggiRadius = 3.271 * y4Value + 85.925;

      //   Tinggi badan = 1,03*y1 + 1,557*y3 + 68,397
      const resultTinggiTotalFemurHumerus =
        1.03 * y1Value + 1.557 * y3Value + 68.397;

      // 	Tinggi badan = 2,769*y3 + 0,195*y4 + 69,788
      const resultTinggiHumerusRadius1 =
        2.769 * y3Value + 0.195 * y4Value + 69.788;

      // 	Tinggi badan = 1,73*y3 + 1,73*y4 + 66,885
      const resultTinggiHumerusRadius2 =
        1.73 * y3Value + 1.73 * y4Value + 66.885;

      const resultMinTinggi = Math.min(
        resultTinggiFemur,
        resultTinggiHumerus,
        resultTinggiRadius,
        resultTinggiTotalFemurHumerus,
        resultTinggiHumerusRadius1,
        resultTinggiHumerusRadius2
      );
      const resultMaxTinggi = Math.max(
        resultTinggiFemur,
        resultTinggiHumerus,
        resultTinggiRadius,
        resultTinggiTotalFemurHumerus,
        resultTinggiHumerusRadius1,
        resultTinggiHumerusRadius2
      );

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (!isNaN(y2Value) && !isNaN(y3Value) && !isNaN(y4Value)) {
      //  Tinggi badan = 2,376*y2 + 78,664
      const resultTinggiTibia = 2.376 * y2Value + 78.664;

      //  Tinggi badan = 2,894*y3 + 70,641
      const resultTinggiHumerus = 2.894 * y3Value + 70.641;

      //  Tinggi badan = 3,271*y4 + 85,925
      const resultTinggiRadius = 3.271 * y4Value + 85.925;

      // 	Tinggi badan = 2,769*y3 + 0,195*y4 + 69,788
      const resultTinggiHumerusRadius1 =
        2.769 * y3Value + 0.195 * y4Value + 69.788;

      // 	Tinggi badan = 1,73*y3 + 1,73*y4 + 66,885
      const resultTinggiHumerusRadius2 =
        1.73 * y3Value + 1.73 * y4Value + 66.885;

      const resultMinTinggi = Math.min(
        resultTinggiTibia,
        resultTinggiHumerus,
        resultTinggiRadius,
        resultTinggiHumerusRadius1,
        resultTinggiHumerusRadius2
      );
      const resultMaxTinggi = Math.max(
        resultTinggiTibia,
        resultTinggiHumerus,
        resultTinggiRadius,
        resultTinggiHumerusRadius1,
        resultTinggiHumerusRadius2
      );

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (!isNaN(y1Value) && !isNaN(y2Value)) {
      const tinggi1 = 1.22 * y1Value;
      const tinggi2 = 1.08 * y2Value;

      //  Tinggi badan = 1,88*y1 + 81,306
      const resultTinggiFemur = 1.88 * y1Value + 81.306;

      //  Tinggi badan = 2,376*y2 + 78,664
      const resultTinggiTibia = 2.376 * y2Value + 78.664;

      //  Tinggi badan = 1,22*y1 + 1,08*y2 + 71,443
      const resultTinggiTotal = tinggi1 + tinggi2 + 71.443;

      const resultMinTinggi = Math.min(
        resultTinggiFemur,
        resultTinggiTibia,
        resultTinggiTotal
      );
      const resultMaxTinggi = Math.max(
        resultTinggiFemur,
        resultTinggiTibia,
        resultTinggiTotal
      );

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (!isNaN(y1Value) && !isNaN(y3Value)) {
      //  Tinggi badan = 1,88*y1 + 81,306
      const resultTinggiFemur = 1.88 * y1Value + 81.306;

      //  Tinggi badan = 2,894*y3 + 70,641
      const resultTinggiHumerus = 2.894 * y3Value + 70.641;

      //  Tinggi badan = 1,03*y1 + 1,557*y3 + 68,397
      const resultTinggiTotalFemurHumerus =
        1.03 * y1Value + 1.557 * y3Value + 68.397;

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
    } else if (!isNaN(y1Value) && !isNaN(y4Value)) {
      //  Tinggi badan = 1,88*y1 + 81,306
      const resultTinggiFemur = 1.88 * y1Value + 81.306;

      //  Tinggi badan = 3,271*y4 + 85,925
      const resultTinggiRadius = 3.271 * y4Value + 85.925;

      const resultMinTinggi = Math.min(resultTinggiFemur, resultTinggiRadius);
      const resultMaxTinggi = Math.max(resultTinggiFemur, resultTinggiRadius);

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (!isNaN(y2Value) && !isNaN(y3Value)) {
      //  Tinggi badan = 2,376*y2 + 78,664
      const resultTinggiTibia = 2.376 * y2Value + 78.664;

      //  Tinggi badan = 2,894*y3 + 70,641
      const resultTinggiHumerus = 2.894 * y3Value + 70.641;

      const resultMinTinggi = Math.min(resultTinggiTibia, resultTinggiHumerus);
      const resultMaxTinggi = Math.max(resultTinggiTibia, resultTinggiHumerus);

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (!isNaN(y2Value) && !isNaN(y4Value)) {
      //  Tinggi badan = 2,376*y2 + 78,664
      const resultTinggiTibia = 2.376 * y2Value + 78.664;

      //  Tinggi badan = 3,271*y4 + 85,925
      const resultTinggiRadius = 3.271 * y4Value + 85.925;

      const resultMinTinggi = Math.min(resultTinggiTibia, resultTinggiRadius);
      const resultMaxTinggi = Math.max(resultTinggiTibia, resultTinggiRadius);

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (!isNaN(y3Value) && !isNaN(y4Value)) {
      //  Tinggi badan = 2,894*y3 + 70,641
      const resultTinggiHumerus = 2.894 * y3Value + 70.641;

      //  Tinggi badan = 3,271*y4 + 85,925
      const resultTinggiRadius = 3.271 * y4Value + 85.925;

      // 	Tinggi badan = 2,769*y3 + 0,195*y4 + 69,788
      const resultTinggiHumerusRadius1 =
        2.769 * y3Value + 0.195 * y4Value + 69.788;

      //  Tinggi badan = 1,73*y3 + 1,73*y4 + 66,885
      const resultTinggiHumerusRadius2 =
        1.73 * y3Value + 1.73 * y4Value + 66.885;

      const resultMinTinggi = Math.min(
        resultTinggiHumerus,
        resultTinggiRadius,
        resultTinggiHumerusRadius1,
        resultTinggiHumerusRadius2
      );

      const resultMaxTinggi = Math.max(
        resultTinggiHumerus,
        resultTinggiRadius,
        resultTinggiHumerusRadius1,
        resultTinggiHumerusRadius2
      );

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (y1Value) {
      //  Tinggi badan = 1,88*y1 + 81,306
      const resultTinggiFemur = 1.88 * y1Value + 81.306;
      const resultString = `TB = ${resultTinggiFemur} cm`;
      setResult(resultString);
    } else if (y2Value) {
      //  Tinggi badan = 2,376*y2 + 78,664
      const resultTinggiTibia = 2.376 * y2Value + 78.664;
      const resultString = `TB = ${resultTinggiTibia} cm`;
      setResult(resultString);
    } else if (y3Value) {
      //  Tinggi badan = 2,894*y3 + 70,641
      const resultTinggiHumerus = 2.894 * y3Value + 70.641;
      const resultString = `TB = ${resultTinggiHumerus} cm`;
      setResult(resultString);
    } else if (y4Value) {
      //  Tinggi badan = 3,271*y4 + 85,925
      const resultTinggiRadius = 3.271 * y4Value + 85.925;
      const resultString = `TB = ${resultTinggiRadius} cm`;
      setResult(resultString);
    }
  };

  return (
    <>
      <div className="grid grid-cols1 md:grid-cols-2 gap-6">
        <div className="form-control w-full">
          <label className="label">
            <span className={"label-text text-base-content"}>
              Panjang Tulang Femur
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
              Panjang Tulang Tibia
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

        <div className="form-control w-full">
          <label className="label">
            <span className={"label-text text-base-content"}>
              Panjang Tulang Humerus
            </span>
          </label>
          <input
            type="text"
            value={y3}
            placeholder="Tulis Disini"
            onChange={(e) => setY3(e.target.value.replace(",", "."))}
            inputMode="numeric"
            className="input  input-bordered w-full "
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className={"label-text text-base-content"}>
              Panjang Tulang Radius
            </span>
          </label>
          <input
            type="text"
            value={y4}
            placeholder="Tulis Disini"
            onChange={(e) => setY4(e.target.value.replace(",", "."))}
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

export default Laki;
