import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-egyptian-sand via-egyptian-gold to-egyptian-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 egyptian-pattern opacity-20"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-30 animate-fade-in">
        🏺
      </div>
      <div
        className="absolute bottom-20 right-10 text-8xl opacity-20 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        🔱
      </div>
      <div
        className="absolute top-1/3 right-20 text-4xl opacity-25 animate-fade-in"
        style={{ animationDelay: "2s" }}
      >
        ⚱️
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-6 leading-tight">
            Откройте для себя
            <span className="block text-egyptian-gold">тайны Египта</span>
          </h1>

          <p className="text-xl md:text-2xl text-egyptian-cream mb-8 font-open-sans">
            Погрузитесь в мир древних фараонов, величественных пирамид и
            бескрайних пустынь. Незабываемые приключения ждут вас!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-egyptian-gold hover:bg-egyptian-sand text-egyptian-dark font-semibold px-8 py-4 text-lg animate-scale-in"
            >
              <Icon name="MapPin" className="w-5 h-5 mr-2" />
              Выбрать тур
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-egyptian-dark px-8 py-4 text-lg animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Смотреть видео
            </Button>
          </div>

          <div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Award" className="w-6 h-6 text-egyptian-gold" />
              <span>15+ лет опыта</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Users" className="w-6 h-6 text-egyptian-gold" />
              <span>10,000+ довольных туристов</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Star" className="w-6 h-6 text-egyptian-gold" />
              <span>Рейтинг 4.9/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;
