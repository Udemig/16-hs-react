/*
 ! Challange
 * Herkes içerisinde en az 1 tane
 * string
 * number
 * boolean
 * array / object / tuple
 * string literal / union type
 
 * tiplerine sahip bir nesne tipine tanımlayın ve oluşturduğunuz tipi bir değişken üzerinde kullanın
 * tip herhangi bir nesne hakkında olabilir: araba, bilgisayar, film, kitap, takim....
*/

type Laptop = {
  id: number;
  name: string;
  model: string;
  fiyat: number;
  ekranKarti: boolean;
  ekipmanlar: string[];
};

const Laptop: Laptop = {
  id: 1,
  name: "macbook",
  model: "air m5",
  fiyat: 1000000,
  ekranKarti: true,
  ekipmanlar: ["fare", "kulaklık", "akım kontrollü priz"],
};

// --------------

type Spor = {
  jimnastik: boolean;
  basketbol: boolean;
  veloybol: boolean;
};

enum Days {
  pazartesi = "Pazartesi",
  carsamba = "Çarşamba",
  cuma = "Cuma",
}

type Oyun = {
  satranc: Days;
  basketbol: Days;
};

type Student = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  lessons: string[];
  otherLessons: "Biyoloji" | "Türkçe";
  bedenDersi: Spor | Oyun;
  h_w: [number, number];
  examDate: unknown;
  schedule: any;
  holidayDate: Date;
};

let student1: Student = {
  id: 1,
  firstName: "Seda",
  lastName: "Gül",
  age: 18,
  lessons: ["Math", "Chemistry", "Physics"],
  otherLessons: "Türkçe",
  bedenDersi: { satranc: Days.pazartesi, basketbol: Days.cuma },
  h_w: [180, 75],
  examDate: null,
  schedule: null,
  holidayDate: new Date("10-01-2026"),
};
