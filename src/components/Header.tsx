import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-egyptian-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-egyptian-gold rounded-full flex items-center justify-center">
            <span className="text-egyptian-dark font-bold text-lg">🏺</span>
          </div>
          <h1 className="text-xl font-montserrat font-bold text-egyptian-gold">
            ADELTOUR
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#tours"
            className="hover:text-egyptian-gold transition-colors"
          >
            Туры
          </a>
          <a
            href="#about"
            className="hover:text-egyptian-gold transition-colors"
          >
            О нас
          </a>
          <a
            href="#reviews"
            className="hover:text-egyptian-gold transition-colors"
          >
            Отзывы
          </a>
          <a
            href="#contact"
            className="hover:text-egyptian-gold transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-egyptian-gold text-egyptian-gold hover:bg-egyptian-gold hover:text-egyptian-dark"
          >
            <Icon name="Phone" className="w-4 h-4 mr-2" />
            +7 (999) 123-45-67
          </Button>

          <Button className="md:hidden bg-egyptian-gold hover:bg-egyptian-sand">
            <Icon name="Menu" className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
