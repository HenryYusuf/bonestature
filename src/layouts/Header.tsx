import { FaStethoscope } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="sticky top-0 navbar bg-base-100 dark:bg-gray-800 border-b z-10"
      data-theme="light"
    >
      <div className="navbar-start">
        <a className="flex justify-start gap-2 px-4 text-xl">
          <div className="self-center">
            <FaStethoscope className="w-6 h-6" />
          </div>
          AnthropoBone
        </a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="btn btn-sm bg-red-600 text-white hover:bg-red-800">
                Pilihan Rumus
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link to={"/antropologi-ragawi"}>Antropologi Ragawi</Link>
                </li>
                <li>
                  <Link to={"/djaja-surya-atmadja"}>Djaja Surya Atmadja</Link>
                </li>
                <li>
                  <Link to={"/pearson"}>Pearson</Link>
                </li>
                <li>
                  <Link to={"/stevenson"}>Stevenson</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </header>
  );
}
