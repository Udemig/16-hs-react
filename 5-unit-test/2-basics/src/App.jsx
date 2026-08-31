import ColorButton from "./components/ColorButton";

const App = () => {
  return( 
  <div className="p-10">
    <header>
      <h1 className="text-3xl font-bold text-center">Unit Test</h1>
    </header>  

    <main className="mt-10">
      <h1 className="text-2xl font-semibold text-purple-600 text-center">Merhaba Dünya</h1>

      <ColorButton />
    </main>
  </div>
  );
};

export default App;
