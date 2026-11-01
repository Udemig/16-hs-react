import Spinner from "../loader/Spinner";
import Error from "../error";

// yükleniyor, hata ve içerik durumlarını tek yerden yönetir
const AsyncContent = ({ isLoading, error, fallback = <Spinner />, children }) => {
  if (isLoading) return fallback;

  if (error) return <Error message={error} />;

  return children;
};

export default AsyncContent;
