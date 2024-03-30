import { useState } from "react";
import TitleCard from "../../Card/TitleCard";

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
            dan jenis kelamin.
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

const Stevenson = () => {
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
      // Femur min and max
      const resultMinFemur = 2.4378 * y1Value + 61.7207 - 2.1756;
      const resultMaxFemur = 2.4378 * y1Value + 61.7207 + 2.1756;

      // Humerus min and max
      const resultMinHumerus = 2.8131 * y2Value + 81.5115 - 2.8903;
      const resultMaxHumerus = 2.8131 * y2Value + 81.5115 + 2.8903;

      // Tibia min and max
      const resultMinTibia = 3.0263 * y3Value + 59.2256 - 1.8916;
      const resultMaxTibia = 3.0263 * y3Value + 59.2256 + 1.8916;

      // Radius min and max
      const resultMinRadius = 3.7384 * y4Value + 80.0276 - 2.6791;
      const resultMaxRadius = 3.7384 * y4Value + 80.0276 + 2.6791;

      //  Tinggi badan = (1,4294*y1 + 1,4294*y3 + 54,2522) ± 1,92
      const resultMinFemurTibia1 =
        1.4294 * y1Value + 1.4294 * y3Value + 54.2522 - 1.92;
      const resultMaxFemurTibia1 =
        1.4294 * y1Value + 1.4294 * y3Value + 54.2522 + 1.92;

      // 	Tinggi badan = (0,6024*y1 + 2,4014*y3 + 55,3865) ± 1,86
      const resultMinFemurTibia2 =
        0.6024 * y1Value + 2.4014 * y3Value + 55.3865 - 1.86;
      const resultMaxFemurTibia2 =
        0.6024 * y1Value + 2.4014 * y3Value + 55.3865 + 1.86;

      //	Tinggi badan = (1,9222*y2 + 1,9222*y4 + 63,4865) ± 2,65
      const resultMinHumerusRadius1 =
        1.9222 * y2Value + 1.9222 * y4Value + 63.4865 - 2.65;
      const resultMaxHumerusRadius1 =
        1.9222 * y2Value + 1.9222 * y4Value + 63.4865 + 2.65;

      //	Tinggi badan = (1,3052*y2 + 2,6889*y4 + 64,4272) ± 2,57
      const resultMinHumerusRadius2 =
        1.3052 * y2Value + 2.6889 * y4Value + 64.4272 - 2.57;
      const resultMaxHumerusRadius2 =
        1.3052 * y2Value + 2.6889 * y4Value + 64.4272 + 2.57;

      //	Tinggi badan = (2,3397*y1 + 0,2012*y2 + 59,7828) ± 2,17
      const resultMinFemurHumerus =
        2.3397 * y1Value + 0.2012 * y2Value + 59.7828 - 2.17;
      const resultMaxFemurHumerus =
        2.3397 * y1Value + 0.2012 * y2Value + 59.7828 + 2.17;

      //	Tinggi badan = (2,8594*y3 + 0,3398*y4 + 57,1954) ± 1,88
      const resultMinTibiaRadius =
        2.8594 * y3Value + 0.3398 * y4Value + 57.1954 - 1.88;
      const resultMaxTibiaRadius =
        2.8594 * y3Value + 0.3398 * y4Value + 57.1954 + 1.88;

      //	Tinggi badan = (0,664*y1 + 0,1008*y2 + 2,2065*y3 + 0,4464*y4 + 52,2596) ± 1,82
      const resultMinTotalHeight =
        0.664 * y1Value +
        0.1008 * y2Value +
        2.2065 * y3Value +
        0.4464 * y4Value +
        52.2596 -
        1.82;
      const resultMaxTotalHeight =
        0.664 * y1Value +
        0.1008 * y2Value +
        2.2065 * y3Value +
        0.4464 * y4Value +
        52.2596 +
        1.82;

      const resultHeightMin = Math.min(
        resultMinFemur,
        resultMaxFemur,
        resultMinHumerus,
        resultMaxHumerus,
        resultMinTibia,
        resultMaxTibia,
        resultMinRadius,
        resultMaxRadius,
        resultMinFemurTibia1,
        resultMaxFemurTibia1,
        resultMinFemurTibia2,
        resultMaxFemurTibia2,
        resultMinHumerusRadius1,
        resultMaxHumerusRadius1,
        resultMinHumerusRadius2,
        resultMaxHumerusRadius2,
        resultMinFemurHumerus,
        resultMaxFemurHumerus,
        resultMinTibiaRadius,
        resultMaxTibiaRadius,
        resultMinTotalHeight,
        resultMaxTotalHeight
      );

      const resultHeightMax = Math.max(
        resultMinFemur,
        resultMaxFemur,
        resultMinHumerus,
        resultMaxHumerus,
        resultMinTibia,
        resultMaxTibia,
        resultMinRadius,
        resultMaxRadius,
        resultMinFemurTibia1,
        resultMaxFemurTibia1,
        resultMinFemurTibia2,
        resultMaxFemurTibia2,
        resultMinHumerusRadius1,
        resultMaxHumerusRadius1,
        resultMinHumerusRadius2,
        resultMaxHumerusRadius2,
        resultMinFemurHumerus,
        resultMaxFemurHumerus,
        resultMinTibiaRadius,
        resultMaxTibiaRadius,
        resultMinTotalHeight,
        resultMaxTotalHeight
      );

      const resultIntersectionMin = Math.max(
        resultMinFemur,
        resultMinHumerus,
        resultMinTibia,
        resultMinRadius,
        resultMinFemurTibia1,
        resultMinFemurTibia2,
        resultMinHumerusRadius1,
        resultMinHumerusRadius2,
        resultMinFemurHumerus,
        resultMinTibiaRadius,
        resultMinTotalHeight
      );

      const resultIntersectionMax = Math.min(
        resultMaxFemur,
        resultMaxHumerus,
        resultMaxTibia,
        resultMaxRadius,
        resultMaxFemurTibia1,
        resultMaxFemurTibia2,
        resultMaxHumerusRadius1,
        resultMaxHumerusRadius2,
        resultMaxFemurHumerus,
        resultMaxTibiaRadius,
        resultMaxTotalHeight
      );

      const resultString = `Range terendah-tertinggi TB: ${resultHeightMin} - ${resultHeightMax} cm dan range nilai perpotongan TB: ${resultIntersectionMin} - ${resultIntersectionMax} cm`;
      setResult(resultString);
    } else if (!isNaN(y1Value) && !isNaN(y2Value) && !isNaN(y3Value)) {
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

      const resultString = `Range terendah-tertinggi TB: ${resultHeightMin} - ${resultHeightMax} cm dan range nilai perpotongan TB: ${resultIntersectionMin} - ${resultIntersectionMax} cm`;
      setResult(resultString);
    } else if (!isNaN(y1Value) && !isNaN(y2Value) && !isNaN(y4Value)) {
      // Femur min and max
      const resultMinFemur = 2.4378 * y1Value + 61.7207 - 2.1756;
      const resultMaxFemur = 2.4378 * y1Value + 61.7207 + 2.1756;

      // Humerus min and max
      const resultMinHumerus = 2.8131 * y2Value + 81.5115 - 2.8903;
      const resultMaxHumerus = 2.8131 * y2Value + 81.5115 + 2.8903;

      // Radius min and max
      const resultMinRadius = 3.7384 * y4Value + 80.0276 - 2.6791;
      const resultMaxRadius = 3.7384 * y4Value + 80.0276 + 2.6791;

      //	Tinggi badan = (1,9222*y2 + 1,9222*y4 + 63,4865) ± 2,65
      const resultMinHumerusRadius1 =
        1.9222 * y2Value + 1.9222 * y4Value + 63.4865 - 2.65;
      const resultMaxHumerusRadius1 =
        1.9222 * y2Value + 1.9222 * y4Value + 63.4865 + 2.65;

      //	Tinggi badan = (1,3052*y2 + 2,6889*y4 + 64,4272) ± 2,57
      const resultMinHumerusRadius2 =
        1.3052 * y2Value + 2.6889 * y4Value + 64.4272 - 2.57;
      const resultMaxHumerusRadius2 =
        1.3052 * y2Value + 2.6889 * y4Value + 64.4272 + 2.57;

      //	Tinggi badan = (2,3397*y1 + 0,2012*y2 + 59,7828) ± 2,17
      const resultMinFemurHumerus =
        2.3397 * y1Value + 0.2012 * y2Value + 59.7828 - 2.17;
      const resultMaxFemurHumerus =
        2.3397 * y1Value + 0.2012 * y2Value + 59.7828 + 2.17;

      const resultHeightMin = Math.min(
        resultMinFemur,
        resultMaxFemur,
        resultMinHumerus,
        resultMaxHumerus,
        resultMinRadius,
        resultMaxRadius,
        resultMinHumerusRadius1,
        resultMaxHumerusRadius1,
        resultMinHumerusRadius2,
        resultMaxHumerusRadius2,
        resultMinFemurHumerus,
        resultMaxFemurHumerus
      );

      const resultHeightMax = Math.max(
        resultMinFemur,
        resultMaxFemur,
        resultMinHumerus,
        resultMaxHumerus,
        resultMinRadius,
        resultMaxRadius,
        resultMinHumerusRadius1,
        resultMaxHumerusRadius1,
        resultMinHumerusRadius2,
        resultMaxHumerusRadius2,
        resultMinFemurHumerus,
        resultMaxFemurHumerus
      );

      const resultIntersectionMin = Math.max(
        resultMinFemur,
        resultMinHumerus,
        resultMinRadius,
        resultMinHumerusRadius1,
        resultMinHumerusRadius2,
        resultMinFemurHumerus
      );

      const resultIntersectionMax = Math.min(
        resultMaxFemur,
        resultMaxHumerus,
        resultMaxRadius,
        resultMaxHumerusRadius1,
        resultMaxHumerusRadius2,
        resultMaxFemurHumerus
      );

      const resultString = `Range terendah-tertinggi TB: ${resultHeightMin} - ${resultHeightMax} cm dan range nilai perpotongan TB: ${resultIntersectionMin} - ${resultIntersectionMax} cm`;
      setResult(resultString);
    } else if (!isNaN(y1Value) && !isNaN(y3Value) && !isNaN(y4Value)) {
      // Femur min and max
      const resultMinFemur = 2.4378 * y1Value + 61.7207 - 2.1756;
      const resultMaxFemur = 2.4378 * y1Value + 61.7207 + 2.1756;

      // Tibia min and max
      const resultMinTibia = 3.0263 * y3Value + 59.2256 - 1.8916;
      const resultMaxTibia = 3.0263 * y3Value + 59.2256 + 1.8916;

      // Radius min and max
      const resultMinRadius = 3.7384 * y4Value + 80.0276 - 2.6791;
      const resultMaxRadius = 3.7384 * y4Value + 80.0276 + 2.6791;

      //  Tinggi badan = (1,4294*y1 + 1,4294*y3 + 54,2522) ± 1,92
      const resultMinFemurTibia1 =
        1.4294 * y1Value + 1.4294 * y3Value + 54.2522 - 1.92;
      const resultMaxFemurTibia1 =
        1.4294 * y1Value + 1.4294 * y3Value + 54.2522 + 1.92;

      // 	Tinggi badan = (0,6024*y1 + 2,4014*y3 + 55,3865) ± 1,86
      const resultMinFemurTibia2 =
        0.6024 * y1Value + 2.4014 * y3Value + 55.3865 - 1.86;
      const resultMaxFemurTibia2 =
        0.6024 * y1Value + 2.4014 * y3Value + 55.3865 + 1.86;

      //	Tinggi badan = (2,8594*y3 + 0,3398*y4 + 57,1954) ± 1,88
      const resultMinTibiaRadius =
        2.8594 * y3Value + 0.3398 * y4Value + 57.1954 - 1.88;
      const resultMaxTibiaRadius =
        2.8594 * y3Value + 0.3398 * y4Value + 57.1954 + 1.88;

      const resultHeightMin = Math.min(
        resultMinFemur,
        resultMaxFemur,
        resultMinTibia,
        resultMaxTibia,
        resultMinRadius,
        resultMaxRadius,
        resultMinFemurTibia1,
        resultMaxFemurTibia1,
        resultMinFemurTibia2,
        resultMaxFemurTibia2,
        resultMinTibiaRadius,
        resultMaxTibiaRadius
      );

      const resultHeightMax = Math.max(
        resultMinFemur,
        resultMaxFemur,
        resultMinTibia,
        resultMaxTibia,
        resultMinRadius,
        resultMaxRadius,
        resultMinFemurTibia1,
        resultMaxFemurTibia1,
        resultMinFemurTibia2,
        resultMaxFemurTibia2,
        resultMinTibiaRadius,
        resultMaxTibiaRadius
      );

      const resultIntersectionMin = Math.max(
        resultMinFemur,
        resultMinTibia,
        resultMinRadius,
        resultMinFemurTibia1,
        resultMinFemurTibia2,
        resultMinTibiaRadius
      );

      const resultIntersectionMax = Math.min(
        resultMaxFemur,
        resultMaxTibia,
        resultMaxRadius,
        resultMaxFemurTibia1,
        resultMaxFemurTibia2,
        resultMaxTibiaRadius
      );

      const resultString = `Range terendah-tertinggi TB: ${resultHeightMin} - ${resultHeightMax} cm dan range nilai perpotongan TB: ${resultIntersectionMin} - ${resultIntersectionMax} cm`;
      setResult(resultString);
    } else if (!isNaN(y2Value) && !isNaN(y3Value) && !isNaN(y4Value)) {
      // Humerus min and max
      const resultMinHumerus = 2.8131 * y2Value + 81.5115 - 2.8903;
      const resultMaxHumerus = 2.8131 * y2Value + 81.5115 + 2.8903;

      // Tibia min and max
      const resultMinTibia = 3.0263 * y3Value + 59.2256 - 1.8916;
      const resultMaxTibia = 3.0263 * y3Value + 59.2256 + 1.8916;

      // Radius min and max
      const resultMinRadius = 3.7384 * y4Value + 80.0276 - 2.6791;
      const resultMaxRadius = 3.7384 * y4Value + 80.0276 + 2.6791;

      //	Tinggi badan = (1,9222*y2 + 1,9222*y4 + 63,4865) ± 2,65
      const resultMinHumerusRadius1 =
        1.9222 * y2Value + 1.9222 * y4Value + 63.4865 - 2.65;
      const resultMaxHumerusRadius1 =
        1.9222 * y2Value + 1.9222 * y4Value + 63.4865 + 2.65;

      //	Tinggi badan = (1,3052*y2 + 2,6889*y4 + 64,4272) ± 2,57
      const resultMinHumerusRadius2 =
        1.3052 * y2Value + 2.6889 * y4Value + 64.4272 - 2.57;
      const resultMaxHumerusRadius2 =
        1.3052 * y2Value + 2.6889 * y4Value + 64.4272 + 2.57;

      //	Tinggi badan = (2,8594*y3 + 0,3398*y4 + 57,1954) ± 1,88
      const resultMinTibiaRadius =
        2.8594 * y3Value + 0.3398 * y4Value + 57.1954 - 1.88;
      const resultMaxTibiaRadius =
        2.8594 * y3Value + 0.3398 * y4Value + 57.1954 + 1.88;

      const resultHeightMin = Math.min(
        resultMinHumerus,
        resultMaxHumerus,
        resultMinTibia,
        resultMaxTibia,
        resultMinRadius,
        resultMaxRadius,
        resultMinHumerusRadius1,
        resultMaxHumerusRadius1,
        resultMinHumerusRadius2,
        resultMaxHumerusRadius2,
        resultMinTibiaRadius,
        resultMaxTibiaRadius
      );

      const resultHeightMax = Math.max(
        resultMinHumerus,
        resultMaxHumerus,
        resultMinTibia,
        resultMaxTibia,
        resultMinRadius,
        resultMaxRadius,
        resultMinHumerusRadius1,
        resultMaxHumerusRadius1,
        resultMinHumerusRadius2,
        resultMaxHumerusRadius2,
        resultMinTibiaRadius,
        resultMaxTibiaRadius
      );

      const resultIntersectionMin = Math.max(
        resultMinHumerus,
        resultMinTibia,
        resultMinRadius,
        resultMinHumerusRadius1,
        resultMinHumerusRadius2,
        resultMinTibiaRadius
      );

      const resultIntersectionMax = Math.min(
        resultMaxHumerus,
        resultMaxTibia,
        resultMaxRadius,
        resultMaxHumerusRadius1,
        resultMaxHumerusRadius2,
        resultMaxTibiaRadius
      );

      const resultString = `Range terendah-tertinggi TB: ${resultHeightMin} - ${resultHeightMax} cm dan range nilai perpotongan TB: ${resultIntersectionMin} - ${resultIntersectionMax} cm`;
      setResult(resultString);
    } else if (!isNaN(y1Value) && !isNaN(y2Value)) {
      // Femur min and max
      const resultMinFemur = 2.4378 * y1Value + 61.7207 - 2.1756;
      const resultMaxFemur = 2.4378 * y1Value + 61.7207 + 2.1756;

      // Humerus min and max
      const resultMinHumerus = 2.8131 * y2Value + 81.5115 - 2.8903;
      const resultMaxHumerus = 2.8131 * y2Value + 81.5115 + 2.8903;

      //	Tinggi badan = (2,3397*y1 + 0,2012*y2 + 59,7828) ± 2,17
      const resultMinFemurHumerus =
        2.3397 * y1Value + 0.2012 * y2Value + 59.7828 - 2.17;
      const resultMaxFemurHumerus =
        2.3397 * y1Value + 0.2012 * y2Value + 59.7828 + 2.17;

      const resultHeightMin = Math.min(
        resultMinFemur,
        resultMaxFemur,
        resultMinHumerus,
        resultMaxHumerus,
        resultMinFemurHumerus,
        resultMaxFemurHumerus
      );

      const resultHeightMax = Math.max(
        resultMinFemur,
        resultMaxFemur,
        resultMinHumerus,
        resultMaxHumerus,
        resultMinFemurHumerus,
        resultMaxFemurHumerus
      );

      const resultIntersectionMin = Math.max(
        resultMinFemur,
        resultMinHumerus,
        resultMinFemurHumerus
      );

      const resultIntersectionMax = Math.min(
        resultMaxFemur,
        resultMaxHumerus,
        resultMaxFemurHumerus
      );

      const resultString = `Range terendah-tertinggi TB: ${resultHeightMin} - ${resultHeightMax} cm dan range nilai perpotongan TB: ${resultIntersectionMin} - ${resultIntersectionMax} cm`;
      setResult(resultString);
    } else if (!isNaN(y1Value) && !isNaN(y3Value)) {
      // Femur min and max
      const resultMinFemur = 2.4378 * y1Value + 61.7207 - 2.1756;
      const resultMaxFemur = 2.4378 * y1Value + 61.7207 + 2.1756;

      // Tibia min and max
      const resultMinTibia = 3.0263 * y3Value + 59.2256 - 1.8916;
      const resultMaxTibia = 3.0263 * y3Value + 59.2256 + 1.8916;

      //  Tinggi badan = (1,4294*y1 + 1,4294*y3 + 54,2522) ± 1,92
      const resultMinFemurTibia1 =
        1.4294 * y1Value + 1.4294 * y3Value + 54.2522 - 1.92;
      const resultMaxFemurTibia1 =
        1.4294 * y1Value + 1.4294 * y3Value + 54.2522 + 1.92;

      // 	Tinggi badan = (0,6024*y1 + 2,4014*y3 + 55,3865) ± 1,86
      const resultMinFemurTibia2 =
        0.6024 * y1Value + 2.4014 * y3Value + 55.3865 - 1.86;
      const resultMaxFemurTibia2 =
        0.6024 * y1Value + 2.4014 * y3Value + 55.3865 + 1.86;

      const resultHeightMin = Math.min(
        resultMinFemur,
        resultMaxFemur,
        resultMinTibia,
        resultMaxTibia,
        resultMinFemurTibia1,
        resultMaxFemurTibia1,
        resultMinFemurTibia2,
        resultMaxFemurTibia2
      );

      const resultHeightMax = Math.max(
        resultMinFemur,
        resultMaxFemur,
        resultMinTibia,
        resultMaxTibia,
        resultMinFemurTibia1,
        resultMaxFemurTibia1,
        resultMinFemurTibia2,
        resultMaxFemurTibia2
      );

      const resultIntersectionMin = Math.max(
        resultMinFemur,
        resultMinTibia,
        resultMinFemurTibia1,
        resultMinFemurTibia2
      );

      const resultIntersectionMax = Math.min(
        resultMaxFemur,
        resultMaxTibia,
        resultMaxFemurTibia1,
        resultMaxFemurTibia2
      );

      const resultString = `Range terendah-tertinggi TB: ${resultHeightMin} - ${resultHeightMax} cm dan range nilai perpotongan TB: ${resultIntersectionMin} - ${resultIntersectionMax} cm`;
      setResult(resultString);
    } else if (!isNaN(y1Value) && !isNaN(y4Value)) {
      // Femur min and max
      const resultMinFemur = 2.4378 * y1Value + 61.7207 - 2.1756;
      const resultMaxFemur = 2.4378 * y1Value + 61.7207 + 2.1756;

      // Radius min and max
      const resultMinRadius = 3.7384 * y4Value + 80.0276 - 2.6791;
      const resultMaxRadius = 3.7384 * y4Value + 80.0276 + 2.6791;

      const resultHeightMin = Math.min(
        resultMinFemur,
        resultMaxFemur,
        resultMinRadius,
        resultMaxRadius
      );

      const resultHeightMax = Math.max(
        resultMinFemur,
        resultMaxFemur,
        resultMinRadius,
        resultMaxRadius
      );

      const resultIntersectionMin = Math.max(resultMinFemur, resultMinRadius);

      const resultIntersectionMax = Math.min(resultMaxFemur, resultMaxRadius);

      const resultString = `Range terendah-tertinggi TB: ${resultHeightMin} - ${resultHeightMax} cm dan range nilai perpotongan TB: ${resultIntersectionMin} - ${resultIntersectionMax} cm`;
      setResult(resultString);
    } else if (!isNaN(y2Value) && !isNaN(y3Value)) {
      // Humerus min and max
      const resultMinHumerus = 2.8131 * y2Value + 81.5115 - 2.8903;
      const resultMaxHumerus = 2.8131 * y2Value + 81.5115 + 2.8903;

      // Tibia min and max
      const resultMinTibia = 3.0263 * y3Value + 59.2256 - 1.8916;
      const resultMaxTibia = 3.0263 * y3Value + 59.2256 + 1.8916;

      const resultHeightMin = Math.min(
        resultMinHumerus,
        resultMaxHumerus,
        resultMinTibia,
        resultMaxTibia
      );

      const resultHeightMax = Math.max(
        resultMinHumerus,
        resultMaxHumerus,
        resultMinTibia,
        resultMaxTibia
      );

      const resultIntersectionMin = Math.max(resultMinHumerus, resultMinTibia);

      const resultIntersectionMax = Math.min(resultMaxHumerus, resultMaxTibia);

      const resultString = `Range terendah-tertinggi TB: ${resultHeightMin} - ${resultHeightMax} cm dan range nilai perpotongan TB: ${resultIntersectionMin} - ${resultIntersectionMax} cm`;
      setResult(resultString);
    } else if (!isNaN(y2Value) && !isNaN(y4Value)) {
      // Humerus min and max
      const resultMinHumerus = 2.8131 * y2Value + 81.5115 - 2.8903;
      const resultMaxHumerus = 2.8131 * y2Value + 81.5115 + 2.8903;

      // Radius min and max
      const resultMinRadius = 3.7384 * y4Value + 80.0276 - 2.6791;
      const resultMaxRadius = 3.7384 * y4Value + 80.0276 + 2.6791;

      //	Tinggi badan = (1,9222*y2 + 1,9222*y4 + 63,4865) ± 2,65
      const resultMinHumerusRadius1 =
        1.9222 * y2Value + 1.9222 * y4Value + 63.4865 - 2.65;
      const resultMaxHumerusRadius1 =
        1.9222 * y2Value + 1.9222 * y4Value + 63.4865 + 2.65;

      //	Tinggi badan = (1,3052*y2 + 2,6889*y4 + 64,4272) ± 2,57
      const resultMinHumerusRadius2 =
        1.3052 * y2Value + 2.6889 * y4Value + 64.4272 - 2.57;
      const resultMaxHumerusRadius2 =
        1.3052 * y2Value + 2.6889 * y4Value + 64.4272 + 2.57;

      const resultHeightMin = Math.min(
        resultMinHumerus,
        resultMaxHumerus,
        resultMinRadius,
        resultMaxRadius,
        resultMinHumerusRadius1,
        resultMaxHumerusRadius1,
        resultMinHumerusRadius2,
        resultMaxHumerusRadius2
      );

      const resultHeightMax = Math.max(
        resultMinHumerus,
        resultMaxHumerus,
        resultMinRadius,
        resultMaxRadius,
        resultMinHumerusRadius1,
        resultMaxHumerusRadius1,
        resultMinHumerusRadius2,
        resultMaxHumerusRadius2
      );

      const resultIntersectionMin = Math.max(
        resultMinHumerus,
        resultMinRadius,
        resultMinHumerusRadius1,
        resultMinHumerusRadius2
      );

      const resultIntersectionMax = Math.min(
        resultMaxHumerus,
        resultMaxRadius,
        resultMaxHumerusRadius1,
        resultMaxHumerusRadius2
      );

      const resultString = `Range terendah-tertinggi TB: ${resultHeightMin} - ${resultHeightMax} cm dan range nilai perpotongan TB: ${resultIntersectionMin} - ${resultIntersectionMax} cm`;
      setResult(resultString);
    } else if (!isNaN(y3Value) && !isNaN(y4Value)) {
      // Tibia min and max
      const resultMinTibia = 3.0263 * y3Value + 59.2256 - 1.8916;
      const resultMaxTibia = 3.0263 * y3Value + 59.2256 + 1.8916;

      // Radius min and max
      const resultMinRadius = 3.7384 * y4Value + 80.0276 - 2.6791;
      const resultMaxRadius = 3.7384 * y4Value + 80.0276 + 2.6791;

      //	Tinggi badan = (2,8594*y3 + 0,3398*y4 + 57,1954) ± 1,88
      const resultMinTibiaRadius =
        2.8594 * y3Value + 0.3398 * y4Value + 57.1954 - 1.88;
      const resultMaxTibiaRadius =
        2.8594 * y3Value + 0.3398 * y4Value + 57.1954 + 1.88;

      const resultHeightMin = Math.min(
        resultMinTibia,
        resultMaxTibia,
        resultMinRadius,
        resultMaxRadius,
        resultMinTibiaRadius,
        resultMaxTibiaRadius
      );

      const resultHeightMax = Math.max(
        resultMinTibia,
        resultMaxTibia,
        resultMinRadius,
        resultMaxRadius,
        resultMinTibiaRadius,
        resultMaxTibiaRadius
      );

      const resultIntersectionMin = Math.max(
        resultMinTibia,
        resultMinRadius,
        resultMinTibiaRadius
      );

      const resultIntersectionMax = Math.min(
        resultMaxTibia,
        resultMaxRadius,
        resultMaxTibiaRadius
      );

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
      <TitleCard
        title="Formula Stevenson"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                Panjang Tulang Humerus
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
                Panjang Tulang Tibia
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
      </TitleCard>
    </>
  );
};

export default Stevenson;
