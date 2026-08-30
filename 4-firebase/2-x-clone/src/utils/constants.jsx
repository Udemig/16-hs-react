import { AiOutlineBell, AiOutlineCheckCircle, AiOutlineMail } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiViewList } from "react-icons/ci";
import { PiDotsThreeCircle } from "react-icons/pi";

export const navSections = [
  {
    title: "Anasayfa",
    icon: <BiHomeCircle />,
  },
  {
    title: "Bildirimler",
    icon: <AiOutlineBell />,
  },
  {
    title: "Mesajlar",
    icon: <AiOutlineMail />,
  },
  {
    title: "Listeler",
    icon: <CiViewList />,
  },
  {
    title: "Yer İşaretleri",
    icon: <BsBookmark />,
  },
  {
    title: "Onaylanmış",
    icon: <AiOutlineCheckCircle />,
  },
  {
    title: "Profil",
    icon: <CgProfile />,
  },
  {
    title: "Daha Fazla",
    icon: <PiDotsThreeCircle />,
  },
];

export const trends = [
  { category: "Gündem · Türkiye", title: "#Galatasaray", posts: "125 B gönderi" },
  { category: "Teknoloji · Trend", title: "React 19", posts: "48,2 B gönderi" },
  { category: "Spor · Trend", title: "Fenerbahçe", posts: "92,1 B gönderi" },
  { category: "Gündem · Trend", title: "JavaScript", posts: "21,4 B gönderi" },
  { category: "Eğlence · Trend", title: "Netflix", posts: "15,7 B gönderi" },
];

export const suggestions = [
  { name: "Elon Musk", username: "@elonmusk", avatar: "https://i.pravatar.cc/100?img=12" },
  { name: "React", username: "@reactjs", avatar: "https://i.pravatar.cc/100?img=33" },
  { name: "Vercel", username: "@vercel", avatar: "https://i.pravatar.cc/100?img=15" },
];

export const footerLinks = [
  "Hizmet Şartları",
  "Gizlilik Politikası",
  "Çerez Politikası",
  "Erişilebilirlik",
  "Reklam bilgileri",
  "© 2026 X Corp.",
];
