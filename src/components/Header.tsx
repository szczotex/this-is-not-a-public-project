import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="/" className="flex items-center flex-shrink-0" aria-label="Strona główna modu.energy">
            <img
              src="/modu-logo.png"
              alt="modu.energy logo"
              className="h-6 md:h-7 w-auto"
              onError={(e) => {
                e.currentTarget.src = "/lovable-uploads/9afc9869-16c9-4e80-89c4-d789c5833d4c.png";
              }}
            />
          </a>
          <nav aria-label="Główna nawigacja" className="hidden sm:block">
            <a href="/o-nas" className="text-sm font-medium hover:underline">
              O nas
            </a>
          </nav>
        </div>
        <Button asChild variant="hero" size="sm" className="text-xs sm:text-sm">
          <a href="/#formularz" aria-label="Przejdź do formularza">Sprawdź potencjalne zyski</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
