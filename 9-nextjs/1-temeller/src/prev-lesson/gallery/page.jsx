// next image
import Image from "next/image";

// local image
import localImage from "../../assets/nature.jpg";

// remote url
const remoteUrl =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

const GalleryPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1>Local Resim - Optimizasyon Kapalı</h1>

        <Image src={localImage} alt="dağ" unoptimized />
      </div>

      <div>
        <h1>Local Resim - Optimizasyon Açık</h1>

        <Image src={localImage} alt="dağ" priority quality={100} placeholder="blur" />
      </div>

      <div>
        <h1>Remote Resim</h1>

        <Image src={remoteUrl} width={600} height={400} alt="orman" />
      </div>
    </div>
  );
};

export default GalleryPage;
