import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { CheckoutModal } from './components/CheckoutModal';
import { QuickSearchModal } from './components/QuickSearchModal';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { BlogPage } from './pages/BlogPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { ContactPage } from './pages/ContactPage';

export function SolterraApp() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const renderCurrentPage = () => {
    switch (currentTab) {
      case 'home':
        return (
          <HomePage
            setCurrentTab={setCurrentTab}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'products':
        return (
          <ProductsPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'about':
        return <AboutPage setCurrentTab={setCurrentTab} />;
      case 'sustainability':
        return <SustainabilityPage />;
      case 'blog':
        return <BlogPage />;
      case 'experiences':
        return <ExperiencesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            setCurrentTab={setCurrentTab}
            setSelectedCategory={setSelectedCategory}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#023047] font-sans antialiased selection:bg-[#ffb703] selection:text-[#023047]">
      {/* Global Header */}
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <WishlistDrawer />
      <ProductDetailModal />
      <ArticleReaderModal />
      <CheckoutModal />
      <QuickSearchModal onNavigateTab={setCurrentTab} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <SolterraApp />
    </CartProvider>
  );
}
