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

      //  Tinggi badan = 0,913*y1 + 0,6*y2 + 1,225*y3 + 0,187*y4 + 67,469
      const resultTinggiTotal = tinggi1 + tinggi2 + tinggi3 - tinggi4 + 67.469;

      //  Tinggi badan = 1,117*y1 + 1,125*y2 + 69,561
      const resultTinggiTotalFemurFibia1 =
        1.117 * y1Value + 1.125 * y2Value + 69.561;

      //  Tinggi badan = 1,126*y1 + 1,126*y2 + 69,154
      const resultTinggiTotalFemurFibia2 =
        1.126 * y1Value + 1.126 * y2Value + 69.154;

      //   Tinggi badan = 1,339*y1 + 1,027*y3 + 67,435
      const resultTinggiTotalFemurHumerus =
        1.339 * y1Value + 1.027 * y3Value + 67.435;

      // 	Tinggi badan = 2,582*y3 + 0,281*y4 + 70,542
      const resultTinggiHumerusRadius1 =
        2.582 * y3Value + 0.281 * y4Value + 70.542;

      // 	Tinggi badan = 1,628*y3 + 1,628*y4 + 66,885
      const resultTinggiHumerusRadius2 =
        1.628 * y3Value + 1.628 * y4Value + 66.885;

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
        1.126 * y1Value + 1.126 * y2Value + 71.272;

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
    } else if (!isNaN(y1Value) && !isNaN(y2Value) && !isNaN(y4Value)) {
      //  Tinggi badan = 1,945*y1 + 72,844
      const resultTinggiFemur = 1.945 * y1Value + 72.844;

      //  Tinggi badan = 2,352*y2 + 74,774
      const resultTinggiTibia = 2.352 * y2Value + 74.774;

      //  Tinggi badan = 3,343*y4 + 81,224
      const resultTinggiRadius = 3.343 * y4Value + 81.224;

      //  Tinggi badan = 1,117*y1 + 1,125*y2 + 69,561
      const resultTinggiTotalFemurFibia1 =
        1.117 * y1Value + 1.125 * y2Value + 69.561;

      //  Tinggi badan = 1,126*y1 + 1,126*y2 + 69,154
      const resultTinggiTotalFemurFibia2 =
        1.126 * y1Value + 1.126 * y2Value + 71.272;

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
      //  Tinggi badan = 1,945*y1 + 72,844
      const resultTinggiFemur = 1.945 * y1Value + 72.844;

      //  Tinggi badan = 2,754*y3 + 71,475
      const resultTinggiHumerus = 2.754 * y3Value + 71.475;

      //  Tinggi badan = 3,343*y4 + 81,224
      const resultTinggiRadius = 3.343 * y4Value + 81.224;

      //   Tinggi badan = 1,339*y1 + 1,027*y3 + 67,435
      const resultTinggiTotalFemurHumerus =
        1.339 * y1Value + 1.027 * y3Value + 67.435;

      // 	Tinggi badan = 2,582*y3 + 0,281*y4 + 70,542
      const resultTinggiHumerusRadius1 =
        2.582 * y3Value + 0.281 * y4Value + 70.542;

      // 	Tinggi badan = 1,628*y3 + 1,628*y4 + 66,885
      const resultTinggiHumerusRadius2 =
        1.628 * y3Value + 1.628 * y4Value + 66.885;

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
      //  Tinggi badan = 2,352*y2 + 74,774
      const resultTinggiTibia = 2.352 * y2Value + 74.774;

      //  Tinggi badan = 2,754*y3 + 71,475
      const resultTinggiHumerus = 2.754 * y3Value + 71.475;

      //  Tinggi badan = 3,343*y4 + 81,224
      const resultTinggiRadius = 3.343 * y4Value + 81.224;

      // 	Tinggi badan = 2,582*y3 + 0,281*y4 + 70,542
      const resultTinggiHumerusRadius1 =
        2.582 * y3Value + 0.281 * y4Value + 70.542;

      // 	Tinggi badan = 1,628*y3 + 1,628*y4 + 66,885
      const resultTinggiHumerusRadius2 =
        1.628 * y3Value + 1.628 * y4Value + 66.885;

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
      const tinggi1 = 1.117 * y1Value;
      const tinggi2 = 1.125 * y2Value;

      //  Tinggi badan = 1,945*y1 + 72,844
      const resultTinggiFemur = 1.945 * y1Value + 72.844;

      //  Tinggi badan = 2,352*y2 + 74,774
      const resultTinggiTibia = 2.352 * y2Value + 74.774;

      //  Tinggi badan = 1,117*y1 + 1,125*y2 + 69,561
      const resultTinggiTotal = tinggi1 + tinggi2 + 69.561;

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
    } else if (!isNaN(y1Value) && !isNaN(y4Value)) {
      //  Tinggi badan = 1,945*y1 + 72,844
      const resultTinggiFemur = 1.945 * y1Value + 72.844;

      //  Tinggi badan = 3,343*y4 + 81,224
      const resultTinggiRadius = 3.343 * y4Value + 81.224;

      const resultMinTinggi = Math.min(resultTinggiFemur, resultTinggiRadius);
      const resultMaxTinggi = Math.max(resultTinggiFemur, resultTinggiRadius);

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (!isNaN(y2Value) && !isNaN(y3Value)) {
      //  Tinggi badan = 2,352*y2 + 74,774
      const resultTinggiTibia = 2.352 * y2Value + 74.774;

      //  Tinggi badan = 2,754*y3 + 71,475
      const resultTinggiHumerus = 2.754 * y3Value + 71.475;

      const resultMinTinggi = Math.min(resultTinggiTibia, resultTinggiHumerus);
      const resultMaxTinggi = Math.max(resultTinggiTibia, resultTinggiHumerus);

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (!isNaN(y2Value) && !isNaN(y4Value)) {
      //  Tinggi badan = 2,352*y2 + 74,774
      const resultTinggiTibia = 2.352 * y2Value + 74.774;

      //  Tinggi badan = 3,343*y4 + 81,224
      const resultTinggiRadius = 3.343 * y4Value + 81.224;

      const resultMinTinggi = Math.min(resultTinggiTibia, resultTinggiRadius);
      const resultMaxTinggi = Math.max(resultTinggiTibia, resultTinggiRadius);

      const resultString = `TB = ${resultMinTinggi} - ${resultMaxTinggi} cm`;
      setResult(resultString);
    } else if (!isNaN(y3Value) && !isNaN(y4Value)) {
      //  Tinggi badan = 2,754*y3 + 71,475
      const resultTinggiHumerus = 2.754 * y3Value + 71.475;

      //  Tinggi badan = 3,343*y4 + 81,224
      const resultTinggiRadius = 3.343 * y4Value + 81.224;

      // 	Tinggi badan = 2,582*y3 + 0,281*y4 + 70,542
      const resultTinggiHumerusRadius1 =
        2.582 * y3Value + 0.281 * y4Value + 70.542;

      //  Tinggi badan = 1,628*y3 + 1,628*y4 + 66,885
      const resultTinggiHumerusRadius2 =
        1.628 * y3Value + 1.628 * y4Value + 66.885;

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
      <div className="flex flex-col gap-5">
        <div className="mt-16">
          <button
            className="btn btn-primary float-right"
            onClick={hitungTinggi}
          >
            Hitung Tinggi
          </button>
        </div>
        {result && (
          <div className="self-center bg-success/20 border border-success w-fit p-2 rounded-lg">
            {result}
          </div>
        )}
      </div>
    </>
  );
};

export default Perempuan;
