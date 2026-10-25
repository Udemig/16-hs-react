const DocumentPage = async ({ params }) => {
  const { slug } = await params;

  return (
    <div>
      <h1 className="text-red-500">{slug.join(" / ")}</h1>
      <h1>Döküman Sayfası</h1>
    </div>
  );
};

export default DocumentPage;
