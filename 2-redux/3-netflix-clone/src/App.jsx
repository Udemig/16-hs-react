import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Header from "./components/header";
import WatchList from "./pages/watch-list";
import Footer from "./components/footer/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWatchList } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatchList());
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen padding">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/watch-list" element={<WatchList />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
