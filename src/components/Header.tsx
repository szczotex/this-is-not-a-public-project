import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="/" className="flex items-center flex-shrink-0" aria-label="Strona główna modu.energy">
            <img
              src="/modu-logo.png"
              alt="modu.energy logo"
              className="h-6 md:h-7 w-auto"
              onError={(e) => {
                e.currentTarget.src = "/modu-logo-fallback.png";
              }}
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav aria-label="Główna nawigacja" className="hidden sm:block">
            <a href="/o-nas" className="text-sm font-medium hover:underline mr-4">
              O nas
            </a>
            {/* Dodaj tutaj inne linki nawigacyjne jeśli są potrzebne */}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Otwórz menu"
        >
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        {/* Desktop Button */}
        <Button asChild variant="hero" size="sm" className="hidden sm:flex text-xs sm:text-sm">
          <a href="/#formularz" aria-label="Przejdź do formularza">Sprawdź potencjalne zyski</a>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t px-4 py-4">
          <nav className="flex flex-col space-y-3">
            <a href="/o-nas" className="text-sm font-medium hover:underline py-2">
              O nas
            </a>
            {/* Dodaj tutaj inne linki nawigacyjne jeśli są potrzebne */}
            <a href="/#formularz" className="text-sm font-medium hover:underline py-2">
              Sprawdź potencjalne zyski
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
