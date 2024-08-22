import { Link } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import { FaChevronRight } from "react-icons/fa6";
import { FaRuler } from "react-icons/fa";
import { FaArrowsAltV } from "react-icons/fa";
import { RiBuilding2Line } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";

import DoctorIcon from "./assets/chat-doctor-v2.webp";

function App() {
  return (
    <>
      <Header />
      <main data-theme="light">
        <div className="bg-[url('/src/assets/home-banner-v3.svg')] bg-cover">
          <div className="py-5 w-10/12 mx-auto lg:py-10">
            <div className="w-1/2">
              <div className="flex flex-col">
                <h3 className="text-2xl lg:text-4xl leading-normal font-semibold">
                  AnthropoBone
                </h3>
                <p className="text-xs lg:text-sm text-gray-500">
                  Alat Bantu Antropologi Forensik
                </p>
              </div>
            </div>
            <div className="flex flex-wrap lg:w-10/12 lg:flex lg:flex-row gap-4 pt-5">
              <Link to={"/antropologi-ragawi"}>
                <div className="bg-white w-36 h-28 lg:w-40 lg:h-32 border rounded-md drop-shadow hover:border-gray-400 hover:drop-shadow-md cursor-pointer">
                  <div className="h-full flex flex-col gap-2 items-center justify-center">
                    <img src={DoctorIcon} alt="Icon" className="w-16 h-16" />
                    <p className="text-sm font-semibold">Formula Antropologi</p>
                  </div>
                </div>
              </Link>
              <Link to={"/djaja-surya-atmadja"}>
                <div className="bg-white w-36 h-28 lg:w-40 lg:h-32 border rounded-md drop-shadow hover:border-gray-400 hover:drop-shadow-md cursor-pointer">
                  <div className="h-full flex flex-col gap-2 items-center justify-center">
                    <img src={DoctorIcon} alt="Icon" className="w-16 h-16" />
                    <p className="text-sm font-semibold">Formula Djaja</p>
                  </div>
                </div>
              </Link>
              <Link to={"/pearson"}>
                <div className="bg-white w-36 h-28 lg:w-40 lg:h-32 border rounded-md drop-shadow hover:border-gray-400 hover:drop-shadow-md cursor-pointer">
                  <div className="h-full flex flex-col gap-2 items-center justify-center">
                    <img src={DoctorIcon} alt="Icon" className="w-16 h-16" />
                    <p className="text-sm font-semibold">Formula Pearson</p>
                  </div>
                </div>
              </Link>
              <Link to={"/stevenson"}>
                <div className="bg-white w-36 h-28 lg:w-40 lg:h-32 border rounded-md drop-shadow hover:border-gray-400 hover:drop-shadow-md cursor-pointer">
                  <div className="h-full flex flex-col gap-2 items-center justify-center">
                    <img src={DoctorIcon} alt="Icon" className="w-16 h-16" />
                    <p className="text-sm font-semibold">Formula Stevenson</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-10/12 pt-5">
              <div
                className="bg-white flex flex-row gap-2 items-center w-[305px] lg:w-[335px] h-24 border rounded-md drop-shadow hover:border-gray-400 hover:drop-shadow-md px-3 cursor-pointer"
                onClick={() =>
                  (
                    document.getElementById("details")! as HTMLDialogElement
                  ).showModal()
                }
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-8 h-8 text-blue-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
                </svg>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold">Mulai Sekarang</p>
                  <p className="text-xs text-gray-500">
                    Dapatkan pengukuran tinggi dengan rumus kami yang tersedia.
                  </p>
                </div>
                <FaChevronRight className="w-5 h-5" />
              </div>
              <dialog
                id="details"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Petunjuk Formula</h3>
                  <p className="py-4 text-base font-normal">
                    ✓ Sampel yang digunakan pada pembuatan formula adalah
                    laki-laki etnis Jawa, tetapi formula ini dapat digunakan
                    pada seluruh etnis dan jenis kelamin
                  </p>
                  <p className="py-4 text-base font-normal">
                    ✓ Harap ubah <span className="text-info">koma(,)</span>{" "}
                    menjadi <span className="text-info">titik(.)</span> jika
                    angka yang diberikan berupa desimal.
                  </p>
                  <p className="py-4 text-base font-normal">
                    ✓ Masukkan panjang tulang yang dimiliki dalam{" "}
                    <span className="text-info">milimeter (mm)</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2 justify-items-center lg:flex lg:flex-row">
                    <div>
                      <Link
                        to={"/antropologi-ragawi"}
                        className="grow btn btn-neutral w-28"
                      >
                        Antropologi
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={"/djaja-surya-atmadja"}
                        className="btn btn-neutral w-28"
                      >
                        Djaja
                      </Link>
                    </div>
                    <div>
                      <Link to={"/pearson"} className="btn btn-neutral w-28">
                        Pearson
                      </Link>
                    </div>
                    <div>
                      <Link to={"/stevenson"} className="btn btn-neutral w-28">
                        Stevenson
                      </Link>
                    </div>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-10/12 mx-auto px-4 md:px-6">
            <h3 className="text-4xl font-bold text-center">Rumus Kami</h3>
            <div className="divider mb-5"></div>
            <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <div className="flex flex-col items-start gap-4">
                <FaRuler className="h-10 w-10 text-black" />
                <h3 className="text-xl font-bold">Antropologi Ragawi</h3>
                <p className="text-gray-500">
                  Antropologi ragawi adalah cabang antropologi yang mempelajari
                  variasi biologis manusia.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <FaArrowsAltV className="h-10 w-10 text-black" />
                <h3 className="text-xl font-bold">Djaja Surya Atmadja</h3>
                <p className="text-gray-500">
                  Djaja Surya Atmadja menemukan rumus untuk populasi dewasa muda
                  di Indonesia.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <RiBuilding2Line className="h-10 w-10 text-black" />
                <h3 className="text-xl font-bold">Pearson</h3>
                <p className="text-gray-500">
                  Pengukuran pada tulang-tulang panjang yang kering seperti
                  tulang femur, humerus, tibia dan radius.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <FaChartLine className="w-10 h-10 text-black" />
                <h3 className="text-xl font-bold">Stevenson</h3>
                <p className="text-gray-500">
                  Rumus Stevenson merupakan salah satu rumus penentuan tinggi
                  badan dengan menggunakan SE.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
