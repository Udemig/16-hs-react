import { useState, type FC } from "react";
import { useAppSelector } from "../../redux";
import Filter from "../../components/home/Filter";
import List from "../../components/home/List";
import Total from "../../components/home/Total";

const Home: FC = () => {
  const { notes } = useAppSelector((store) => store);
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  // title ve etiketlere göre filtrele
  const filtredNotes = notes.filter((note) => {
    // başlık filtrelemesi
    const input = title.trim().toLocaleLowerCase("tr-TR");
    const titleFilter = note.title.toLocaleLowerCase("tr-TR").includes(input);

    // etiket filtrelemesi
    const tagsFilter = tags.every((t) => note.tags.includes(t));

    return titleFilter && tagsFilter;
  });

  return (
    <div>
      <Filter setTitle={setTitle} setTags={setTags} />

      <List notes={filtredNotes} />

      <Total resultCount={filtredNotes.length} totalCount={notes.length} />
    </div>
  );
};

export default Home;
