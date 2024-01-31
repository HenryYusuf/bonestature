import HeaderNew from "./HeaderNew";
import AntropologiRagawi from "./PageContent/AntropologiRagawi/AntropologiRagawi";
import Djaja from "./PageContent/Djaja/Djaja";
import Pearson from "./PageContent/Pearson/Pearson";
import Stevenson from "./PageContent/Stevenson/Stevenson";

interface Props {
  selectedTab: string;
  onSelect: (value: string) => void;
}

const PageContent = ({ selectedTab, onSelect }: Props) => {
  return (
    <div className="drawer-content flex flex-col ">
      <HeaderNew selectedTab={selectedTab} />
      <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200">
        <div className="container mx-auto">
          {selectedTab === "" && (
            <div className="hero h-4/5 bg-base-200">
              <div className="hero-content">
                <div className="max-w-4xl flex flex-col gap-5">
                  <h3 className="text-3xl font-bold self-center mb-2">
                    BoneStature
                  </h3>
                  <p className="text-lg mb-2">
                    Selamat datang di BoneStature, sebuah alat bantu untuk
                    antropologi forensik, tempat Anda dapat menghitung perkiraan
                    tinggi badan seseorang berdasarkan panjang tulang
                    postmortem. Silakan memilih formula sesuai dengan kebutuhan
                    dan masukkan panjang tulang yang sesuai.
                  </p>
                  <a href="#" className="text-center">
                    <button
                      className="btn bg-base-100 btn-outline"
                      onClick={() => onSelect("ANTROPOLOGI RAGAWI")}
                    >
                      Mulai Sekarang
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
          {selectedTab === "ANTROPOLOGI RAGAWI" && <AntropologiRagawi />}
          {selectedTab === "DJAJA SURYA ATMADJA" && <Djaja />}
          {selectedTab === "PEARSON" && <Pearson />}
          {selectedTab === "STEVENSON" && <Stevenson />}
        </div>
        <div className="h-16"></div>
      </main>
    </div>
  );
};

export default PageContent;
