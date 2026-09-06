import Accordion from "./components/Accordion";
import ColorButton from "./components/ColorButton";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="p-10">
      <header>
        <h1 className="text-3xl font-bold text-center">Unit Test</h1>
      </header>

      <main className="mt-10">
        <h1 className="text-2xl font-semibold text-purple-600 text-center">Merhaba Dünya</h1>

        <ColorButton />

        <Counter />

        <Accordion
          title="Unit Test Nedir?"
          content="Birim testi (Unit Test), yazılım geliştirme sürecinde bir uygulamanın test edilebilir en
        küçük parçalarının (fonksiyon, metot veya sınıf) beklenen mantığa uygun çalışıp
        çalışmadığını kontrol eden otomatik bir test yöntemidir."
        />

        <Accordion
          title="Typescript Nedir?"
          content="TypeScript, Microsoft tarafından geliştirilen, JavaScript dilinin tüm özelliklerini içeren ve üzerine statik tip (veri türü) desteği ekleyen açık kaynaklı bir programlama dilidir."
        />
      </main>
    </div>
  );
};

export default App;
