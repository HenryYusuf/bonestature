import { useState } from "react";
import Card from "../../Card/Card";

function Stevenson() {
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

    if (!isNaN(y1Value) && !isNaN(y2Value) && !isNaN(y3Value)) {
      // Femur min and max
      const resultMinFemur = 2.4378 * y1Value + 61.7207 - 2.1756;
      const resultMaxFemur = 2.4378 * y1Value + 61.7207 + 2.1756;

      // Humerus min and max
      const resultMinHumerus = 2.8131 * y2Value + 81.5115 - 2.8903;
      const resultMaxHumerus = 2.8131 * y2Value + 81.5115 + 2.8903;

      // Tibia min and max
      const resultMinTibia = 3.0263 * y3Value + 59.2256 - 1.8916;
      const resultMaxTibia = 3.0263 * y3Value + 59.2256 + 1.8916;

      // Femur and Tibia 1 min and max
      const resultMinFemurTibia1 =
        1.4294 * y1Value + 1.4294 * y3Value + 54.2522 - 1.92;
      const resultMaxFemurTibia1 =
        1.4294 * y1Value + 1.4294 * y3Value + 54.2522 + 1.92;

      // Femur and Tibia 2 min and max
      const resultMinFemurTibia2 =
        0.6024 * y1Value + 2.4014 * y3Value + 55.3865 - 1.86;
      const resultMaxFemurTibia2 =
        0.6024 * y1Value + 2.4014 * y3Value + 55.3865 + 1.86;

      // Femur and humerus min and max
      const resultMinFemurHumerus =
        2.3397 * y1Value + 0.2012 * y2Value + 59.7828 - 2.17;
      const resultMaxFemurHumerus =
        2.3397 * y1Value + 0.2012 * y2Value + 59.7828 + 2.17;

      const resultHeightMin = Math.min(
        resultMinFemur,
        resultMaxFemur,
        resultMinHumerus,
        resultMaxHumerus,
        resultMinTibia,
        resultMaxTibia,
        resultMinFemurTibia1,
        resultMaxFemurTibia1,
        resultMinFemurTibia2,
        resultMaxFemurTibia2,
        resultMinFemurHumerus,
        resultMaxFemurHumerus
      );

      const resultHeightMax = Math.max(
        resultMinFemur,
        resultMaxFemur,
        resultMinHumerus,
        resultMaxHumerus,
        resultMinTibia,
        resultMaxTibia,
        resultMinFemurTibia1,
        resultMaxFemurTibia1,
        resultMinFemurTibia2,
        resultMaxFemurTibia2,
        resultMinFemurHumerus,
        resultMaxFemurHumerus
      );

      const resultIntersectionMin = Math.max(
        resultMinFemur,
        resultMinHumerus,
        resultMinTibia,
        resultMinFemurTibia1,
        resultMinFemurTibia2,
        resultMinFemurHumerus
      );

      const resultIntersectionMax = Math.min(
        resultMaxFemur,
        resultMaxHumerus,
        resultMaxTibia,
        resultMaxFemurTibia1,
        resultMaxFemurTibia2,
        resultMaxFemurHumerus
      );

      // console.log(resultHeightMin, " - ", resultHeightMax);
      // console.log(resultIntersectionMin, " - ", resultIntersectionMax);

      const resultString = `Range terendah-tertinggi TB: ${resultHeightMin} - ${resultHeightMax} cm dan range nilai perpotongan TB: ${resultIntersectionMin} - ${resultIntersectionMax} cm`;
      setResult(resultString);
    } else if (!isNaN(y1Value)) {
      const resultMinFemur = 2.4378 * y1Value + 61.7207 - 2.1756;
      const resultMaxFemur = 2.4378 * y1Value + 61.7207 + 2.1756;

      const resultString = `Perkiraan Tinggi badan: ${resultMinFemur} - ${resultMaxFemur} cm`;
      setResult(resultString);
    } else if (!isNaN(y2Value)) {
      const resultMinHumerus = 2.8131 * y2Value + 81.5115 - 2.8903;
      const resultMaxHumerus = 2.8131 * y2Value + 81.5115 + 2.8903;

      const resultString = `Perkiraan Tinggi badan: ${resultMinHumerus} - ${resultMaxHumerus} cm`;
      setResult(resultString);
    } else if (!isNaN(y3Value)) {
      const resultMinTibia = 3.0263 * y3Value + 59.2256 - 1.8916;
      const resultMaxTibia = 3.0263 * y3Value + 59.2256 + 1.8916;

      const resultString = `Perkiraan Tinggi badan: ${resultMinTibia} - ${resultMaxTibia} cm`;
      setResult(resultString);
    } else if (!isNaN(y4Value)) {
      const resultMinRadius = 3.7384 * y4Value + 80.0276 - 2.6791;
      const resultMaxRadius = 3.7384 * y4Value + 80.0276 + 2.6791;

      const resultString = `Perkiraan Tinggi badan: ${resultMinRadius} - ${resultMaxRadius} cm`;
      setResult(resultString);
    }
  };

  return (
    <>
      <Card>
        <div className="card-body">
          <p className="font-semibold text-base max-sm:text-sm">
            <span className="text-red-500">* </span>
            Sampel yang digunakan pada pembuatan formula adalah laki-laki etnis
            Jawa, tetapi formula ini dapat digunakan pada seluruh etnis dan
            jenis kelamin
          </p>
          <p className="font-semibold text-base max-sm:text-sm">
            <span className="text-red-500">* </span>
            Harap ubah <span className="text-info">koma(,)</span> menjadi{" "}
            <span className="text-info">titik(.)</span> jika angka yang
            diberikan berupa desimal.
          </p>
          <p className="font-semibold text-base max-sm:text-sm">
            <span className="text-red-500">* </span>
            Masukkan panjang tulang yang dimiliki dalam{" "}
            <span className="text-info">centimeter (cm)</span>
          </p>
          <div className="divider"></div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-base block mb-2 max-sm:text-sm max-md:text-sm">
                Panjang Tulang Femur
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={y1}
                onChange={(e) => setY1(e.target.value.replace(",", "."))}
                inputMode="numeric"
              />
            </div>
            <div>
              <label className="text-base block mb-2 max-sm:text-sm max-md:text-sm">
                Panjang Tulang Humerus
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                value={y2}
                onChange={(e) => setY2(e.target.value.replace(",", "."))}
                inputMode="numeric"
              />
            </div>
            <div>
              <label className="text-base block mb-2 max-sm:text-sm max-md:text-sm">
                Panjang Tulang Tibia
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={y3}
                onChange={(e) => setY3(e.target.value.replace(",", "."))}
                inputMode="numeric"
              />
            </div>
            <div>
              <label className="text-base block mb-2 max-sm:text-sm max-md:text-sm">
                Panjang Tulang Radius
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={y4}
                onChange={(e) => setY4(e.target.value.replace(",", "."))}
                inputMode="numeric"
              />
            </div>
          </div>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary" onClick={hitungTinggi}>
              Hitung Tinggi
            </button>
          </div>
          {result && <div className="mt-4">{result}</div>}
        </div>
      </Card>
    </>
  );
}

export default Stevenson;
