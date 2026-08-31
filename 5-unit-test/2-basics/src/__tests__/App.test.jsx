/*
 ! Test Nasıl Yazılır
 * Test yazarken **test** veya **it** metodlarını kullanırız
 * test fonksiyonu 2 parametre alır
 * 1) testin adı: string
 * 2) testin yazıldığı fonkisyon
*/

import { render, screen } from "@testing-library/react"
import App from "../App"

test("ekranda merhaba dünya yazar", () => {
    // test edilecek bileşen render edilir
    render(<App />)

    // test edilecek elementi çağır
    // eğer bileşen tarayıcıda render ediliyor olsaydı document.querySelector() fonksiyonu başlığı çağırırdık ama sanal ortamda render edildiği için elementi çağırırken document yerine screen ve querySelector yerine farklı methodlar kullanıcaz
    const h1 =  screen.getByText("Merhaba Dünya")

    // çağrılan elementten beklentimizi söyleriz
    expect(h1).toBeInTheDocument()
})