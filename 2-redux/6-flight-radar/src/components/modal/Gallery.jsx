import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Gallery = ({ images }) => {
  const arr = images?.large || images?.medium || images?.thumbnails || null;

  return (
    <div className="rounded-2xl overflow-hidden">
      {!arr ? (
        <div className="h-43.5 bg-zinc-200/10 grid place-items-center rounded-2xl text-zinc-400">
          <span>Fotoğraf içeriği bulunmuyor</span>
        </div>
      ) : (
        <Splide>
          {arr?.map((item, key) => (
            <SplideSlide key={key}>
              <img src={item.src} alt={item.copyright} className="hover:scale-105 transition" />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
};

export default Gallery;
