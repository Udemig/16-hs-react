/*
 ! Bileşenin Temel Özellikleri
 * Bileşenler birer javascript fonksiyondur
 * İsminin ilk harfi büyük olmalı
 * JSX kodu return etmeli
 * Bileşni farklı bir sayfada kullanabilmek için export ederiz
 */

function Header() {
  return (
    <header>
      <h1>REACT</h1>

      <nav>
        <span>Anasayfa</span>
        <span>Hakkımızda</span>
      </nav>
    </header>
  );
}

export default Header;
