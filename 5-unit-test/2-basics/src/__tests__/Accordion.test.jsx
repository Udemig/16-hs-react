/*
 * Describe
 * Testleri gruplandırmak için kullanılır
 * Describe'a özel methodlar:
 * * beforeEach(() => console.log("her testten önce çalışır"));
 * * afterEach(() => console.log("her testten sonra çalışır"));
 * * beforeAll(() => console.log("bütün testlerden önce 1 kez çalışır"));
 * * afterAll(() => console.log("bütün testlerden sonra 1 kez çalışır"));
 */

import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "../components/Accordion";

describe("Accordion Bileşeni", () => {
  test("bileşen proplarını kullanır", () => {
    // Bileşeni test ederken ihtiyacvı olan propları göndeririz
    // Uyguluamda kullanırken gönderidğimiz propların aynısı olmasın gerek yok
    render(
      <Accordion
        title="Firebase Nedir?"
        content="Firebase google tarafından geliştirilmiş bir bulut platformudur"
      />,
    );

    // h3 elementine eriş
    const h3 = screen.getByRole("heading");

    // h3 içerisinde title propuyla gönderilen yazı yazıyor mu
    expect(h3).toHaveTextContent("Firebase Nedir?");

    // p elementine eriş
    const p = screen.getByTestId("paragraph");

    // p elementi içerisinde content propuyle gönderilen yazı yazıyor mu
    expect(p).toHaveTextContent(/google tarafından/i);
  });

  test("gizle/göster özelliği çalışır", () => {
    // 1) bileşeni render et
    render(<Accordion title="başlık" content="içerik" />);

    // 2) gerekli elementleri al (button,p)
    const button = screen.getByRole("button");
    const p = screen.getByTestId("paragraph");

    // 3) p elementi hidden sınıfına sahip mi
    expect(p).toHaveClass("hidden");

    // 4) butona tıkla
    fireEvent.click(button);

    // 5) p elementi block sınıfına sahip mi
    expect(p).toHaveClass("block");

    // 6) butona tıkla
    fireEvent.click(button);

    // 7) p elementi hidden sınıfına sahip mi
    expect(p).toHaveClass("hidden");
  });
});
