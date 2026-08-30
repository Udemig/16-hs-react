import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db, auth } from "../../firebase";
import Message from "./Message";
import Arrow from "./Arrow";

const Messages = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const bottomRef = useRef();
  const prevMessagesLength = useRef(0);
  const audioRef = useRef(new Audio("/notification.mp3"));

  // veritabanındaki mesajları al
  useEffect(() => {
    // kollektisyonun referansını al
    const collectionRef = collection(db, "messages");

    // sorgu ayarlarını yap
    const q = query(collectionRef, where("room", "==", room), orderBy("createdAt", "asc"));

    // messages kolleksiyonuna abone ol
    const unsub = onSnapshot(q, (snapshot) => {
      // geçici dizi
      const temp = [];

      // her belgenin verisine eriş
      snapshot.docs.forEach((doc) => temp.push(doc.data()));

      // mesajları state'e aktar
      setMessages(temp);
    });

    // bileşen ekrandan ayrılınca aboneliği durdur
    return () => unsub();
  }, []);

  // her yeni mesaj gelince çalışır
  useEffect(() => {
    if (messages.length < 1) return;

    // gönderilen son mesaja eriş
    const lastMessage = messages.at(-1);

    if (lastMessage.author.id === auth.currentUser.uid) {
      // son mesajı aktif kullanıcı atyısa en aşağı kaydır
      scrollToBottom();
    } else if (isAtBottom) {
      // başkası attyısa ve sayfanın alt kısmındaysa en aşağı kaydır
      scrollToBottom();
    }

    // kullanıcı yukardayken yeni mesaj geldiyse
    if (messages.length > prevMessagesLength.current && !isAtBottom) {
      // son mesajı başka bir kullanıcı attıysa okunmamış mesaj sayısını 1 arttır
      if (lastMessage.author.id !== auth.currentUser.uid) {
        setUnreadCount((prev) => prev + 1);
      }
    }

    // toplam mesaj sayısını tuttuğumuz referansı güncelle
    prevMessagesLength.current = messages.length;

    // bildirimi oynat
    playSound();
  }, [messages]);

  // sayfadaki son mesakja kaydır
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView();
    setUnreadCount(0);
  };

  // scrolllbar kaydırılınc çalışır
  const handleScroll = (e) => {
    // clientHeight: container'ın kullanıcı ekranındaki yüksekliiği
    // scrollTop: kullanıcı yukarıdan aşağıya kaç px kaydırdı
    // scrollHeight: tüm scrollanbilir alanın yüksekliği
    const { clientHeight, scrollTop, scrollHeight } = e.target;

    // kullanıcı sayfanın en alat kısımlarında mı
    setIsAtBottom(clientHeight + scrollTop >= scrollHeight - 250);
  };

  // bildirim sesi oynat
  const playSound = async () => {
    await audioRef.current.play();
  };

  return (
    <div
      onScroll={handleScroll}
      className="flex-1 p-3 flex flex-col w-full overflow-y-auto overflow-x-hidden relative gap-3"
    >
      {messages.length < 1 ? (
        <div className="h-full grid place-items-center text-zinc-400">
          <p>Sohbete ilk mesajı gönderin</p>
        </div>
      ) : (
        messages.map((item, key) => <Message item={item} key={key} />)
      )}

      <div ref={bottomRef} />

      <Arrow isAtBottom={isAtBottom} scrollToBottom={scrollToBottom} unreadCount={unreadCount} />
    </div>
  );
};

export default Messages;
