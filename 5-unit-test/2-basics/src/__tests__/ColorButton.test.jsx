import { render, screen, fireEvent } from "@testing-library/react";
import ColorButton from "../components/ColorButton";

test("should first", () => {
  // test edilecek bileşen render edilir
  render(<ColorButton />);

  // test edilecek elementi al
  const button = screen.getByRole("button");

  // butonun arkaplan rengi "kırmızı" mı kontrol et
  expect(button).toHaveStyle({ background: "red" });

  // butonun yazısı "Maviye Çevir" mi kontrol et
  expect(button).toHaveTextContent(/maviye/i);

  // butona tıkla
  fireEvent.click(button);

  // butonun arkaplan rengi "mavi" mı kontrol et
  expect(button).toHaveStyle({ background: "blue" });

  // butonun yazısı "Kırmızıya Çevir" mi kontrol et
  expect(button).toHaveTextContent(/kırmızıya/i);

  // butona tıkla
  fireEvent.click(button);

  // butonun arkaplan rengi "kırmızı" mı kontrol et
  expect(button).toHaveStyle({ background: "red" });

  // butonun yazısı "Maviye Çevir" mi kontrol et
  expect(button).toHaveTextContent(/maviye/i);
});
