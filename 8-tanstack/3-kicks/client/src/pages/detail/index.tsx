import { useParams } from "react-router-dom";
import { useGetOneProduct } from "../../service/product";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Images from "./Images";
import Head from "./Head";
import Size from "./Sizes";
import Color from "./Color";
import Foot from "./Foot";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data, refetch } = useGetOneProduct(id!);

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} refetch={refetch} />;

  if (!data) return null;

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <Images images={data.picture} />

      <div className="flex flex-col gap-8 md:sticky md:top-8 h-fit">
        <Head product={data} />
        <Color colors={data.color} />
        <Size sizes={data.size} />
        <Foot description={data.description} />
      </div>
    </div>
  );
};

export default Detail;
