const List = ({ title, array }) => {
  return (
    <div className="mb-5">
      <h1 className="text-lg md:text-xl font-semibold mb-2">{title}</h1>

      <div className="flex flex-wrap gap-5">
        {array.map((item, key) => (
          <div key={key} className="border py-1 px-2 rounded-md">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
