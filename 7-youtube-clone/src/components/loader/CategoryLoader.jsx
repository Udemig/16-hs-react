const CategoryLoader = () => {
  // eleman sayısını belirli dizi oluşturma
  const array = new Array(20).fill("anything");

  return (
    <div className="page">
      <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {array.map((_, key) => (
          <div key={key} className="animate-pulse">
            {/* thumbnail */}
            <div className="w-full bg-gray aspect-video rounded-xl mb-3" />

            {/* video bilgileri */}
            <div className="flex gap-3">
              {/* kanal foto */}
              <div className="size-14 rounded-full bg-gray" />

              <div className="flex-1 space-y-2">
                {/* başlık */}
                <div className="h-4 bg-gray rounded w-full" />
                <div className="h-4 bg-gray rounded w-3/4" />

                {/* kanal ismi */}
                <div className="h-3 bg-gray rounded w-1/3" />

                {/* görüntülenme tarih */}
                <div className="flex gap-2">
                  <div className="h-3 bg-gray rounded w-20" />
                  <div className="h-3 bg-gray rounded w-20" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryLoader;
