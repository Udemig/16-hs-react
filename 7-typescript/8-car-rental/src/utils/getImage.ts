import type { ICar } from "./types";

const COLORS = [
  { id: "6w9", description: "Radiant Green" },
  { id: "KHK", description: "Metallic Clay Orange" },
  { id: "8U7", description: "Blue Electra" },
  { id: "D06", description: "lightning yellow" },
  { id: "3i", description: "Python Green" },
  { id: "3U5", description: "Emotional Red metallic" },
  { id: "psp00054", description: "midnight silver (metallic)" },
  { id: "psp0319", description: "obsidian" },
  { id: "pspc0101", description: "glacier-white-metallic" },
];

const getImage = (car: ICar, angle?: string, randomColor?: boolean) => {
  const url = new URL("https://cdn.imagin.studio/getImage");

  url.searchParams.set("customer", "hrjavascript-mastery");
  url.searchParams.set("make", car.make);
  url.searchParams.set("modelFamily", car.model);
  url.searchParams.set("modelYear", car.year);
  url.searchParams.set("zoomType", "fullscreen");

  if (angle) {
    url.searchParams.set("angle", angle);
  }

  if (randomColor) {
    const hash = car.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

    const index = hash % COLORS.length;

    url.searchParams.set("paintId", COLORS[index].id);
    url.searchParams.set("paintDescription", COLORS[index].description);
  }

  return url.href;
};

export default getImage;
