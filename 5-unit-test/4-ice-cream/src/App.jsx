import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/ui/CartDrawer';
import { Toast } from './components/ui/Toast';
import { BackToTop } from './components/ui/BackToTop';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';

function AppContent() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/urun/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <Toast />
      <BackToTop />
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="bg-background font-body-md text-on-surface antialiased">
          <AppContent />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
