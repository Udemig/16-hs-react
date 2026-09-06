import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

test("Sayaç doğru şekilde çalışır", () => {
  // 1) bileşeni render et
  render(<Counter />);

  // 2) gerekli elementleri al (button,sayaç)
  const incBtn = screen.getByRole("button", { name: "Arttır" });
  const decBtn = screen.getByRole("button", { name: "Azalt" });
  // 3) sayaç değeri 0 mı kontrol et
  const count = screen.getByText("0");

  // 4) azalt butonu inaktif mi
  expect(decBtn).toBeDisabled();

  // 5) arttır butonuna tıkla
  fireEvent.click(incBtn);

  // 6) azalt butonu aktif oluyor mu
  expect(decBtn).not.toBeDisabled();

  // 7) sayaç değeri 1 mi kontrol et
  expect(count).toHaveTextContent("1");

  // 8) arttır butonuna tıkla
  fireEvent.click(incBtn);

  // 9) sayaç değeri 2 mi kontrol et
  expect(count).toHaveTextContent("2");

  // 10) azalt butonuna tıkla
  fireEvent.click(decBtn);

  // 11) sayaç değeri 1 mi kontrol et
  expect(count).toHaveTextContent("1");

  // 12) azalt butonuna tıkla
  fireEvent.click(decBtn);

  // 13) sayaç değeri 0 mı kontrol et
  expect(count).toHaveTextContent("0");

  // 14) azalt butonu inaktif mi
  expect(decBtn).toBeDisabled();
});
