export type DriveType =
  | "Front-Wheel Drive"
  | "Rear-Wheel Drive"
  | "4-Wheel or All-Wheel Drive"
  | "All-Wheel Drive"
  | "4-Wheel Drive"
  | "Part-time 4-Wheel Drive"
  | "2-Wheel Drive";

export interface ICar {
  make: string;
  model: string;
  barrels08: number;
  barrelsa08: number;
  charge120: number;
  charge240: number;
  city08: number;
  city08u: number;
  citya08: number;
  citya08u: number;
  citycd: number;
  citye: number;
  cityuf: number;
  co2: number;
  co2a: number;
  co2tailpipeagpm: number;
  co2tailpipegpm: number;
  comb08: number;
  comb08u: number;
  comba08: number;
  comba08u: number;
  combe: number;
  combinedcd: number;
  combineduf: number;
  cylinders: number;
  displ: number;
  drive: DriveType;
  engid: string;
  eng_dscr: string | null;
  fescore: number | null;
  fuelcost08: number;
  fuelcosta08: number;
  fueltype: string;
  fueltype1: string;
  ghgscore: number | null;
  ghgscorea: number | null;
  highway08: number;
  highway08u: number;
  highwaya08: number;
  highwaya08u: number;
  highwaycd: number;
  highwaye: number;
  highwayuf: number;
  hlv: number;
  hpv: number;
  id: string;
  lv2: number;
  lv4: number;
  mpgdata: "Y" | "N";
  phevblended: "false" | "true";
  pv2: number;
  pv4: number;
  range: number;
  rangecity: number;
  rangecitya: number;
  rangehwy: number;
  rangehwya: number;
  trany: string;
  ucity: number;
  ucitya: number;
  uhighway: number;
  uhighwaya: number;
  vclass: string;
  year: string;
  yousavespend: number;
  guzzler: "G" | "T" | "S" | null;
  trans_dscr: string | null;
  tcharger: "T" | null;
  scharger: "S" | null;
  atvtype: string;
  fueltype2: string;
  rangea: number;
  evmotor: string;
  mfrcode: string;
  c240dscr: string | null;
  charge240b: number;
  c240bdscr: string | null;
  createdon: string;
  modifiedon: string;
  startstop: "N" | "Y" | null;
  phevcity: number;
  phevhwy: number;
  phevcomb: number;
  basemodel: string;
}

export interface CarsResponse {
  results: ICar[];
  total_count: number;
}
