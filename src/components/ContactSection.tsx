import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-egyptian-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-egyptian-gold mb-4">
            Контакты
          </h2>
          <p className="text-xl text-egyptian-cream max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом — мы всегда готовы помочь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="bg-egyptian-blue border-0 text-white animate-fade-in">
            <CardContent className="p-6 text-center">
              <div className="bg-egyptian-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="w-6 h-6 text-egyptian-dark" />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">Телефон</h3>
              <p className="text-egyptian-cream text-sm mb-2">
                +7 (999) 123-45-67
              </p>
              <p className="text-egyptian-cream text-sm">
                Ежедневно 9:00-21:00
              </p>
            </CardContent>
          </Card>

          <Card
            className="bg-egyptian-blue border-0 text-white animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-6 text-center">
              <div className="bg-egyptian-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="MessageCircle"
                  className="w-6 h-6 text-egyptian-dark"
                />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">WhatsApp</h3>
              <p className="text-egyptian-cream text-sm mb-2">
                +7 (999) 123-45-67
              </p>
              <p className="text-egyptian-cream text-sm">Круглосуточно</p>
            </CardContent>
          </Card>

          <Card
            className="bg-egyptian-blue border-0 text-white animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-6 text-center">
              <div className="bg-egyptian-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="w-6 h-6 text-egyptian-dark" />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">Email</h3>
              <p className="text-egyptian-cream text-sm mb-2">
                info@faraon-tour.ru
              </p>
              <p className="text-egyptian-cream text-sm">
                Ответим в течение часа
              </p>
            </CardContent>
          </Card>

          <Card
            className="bg-egyptian-blue border-0 text-white animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <CardContent className="p-6 text-center">
              <div className="bg-egyptian-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="w-6 h-6 text-egyptian-dark" />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">Офис</h3>
              <p className="text-egyptian-cream text-sm mb-2">
                г. Москва, ул. Тверская, 1
              </p>
              <p className="text-egyptian-cream text-sm">Пн-Пт 10:00-19:00</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-egyptian-gold to-egyptian-sand p-8 rounded-2xl inline-block animate-scale-in">
            <h3 className="text-2xl font-montserrat font-bold text-egyptian-dark mb-4">
              Есть вопросы?
            </h3>
            <p className="text-egyptian-dark mb-6 max-w-md">
              Наши консультанты помогут выбрать идеальный тур и ответят на все
              ваши вопросы
            </p>
            <Button
              size="lg"
              className="bg-egyptian-dark text-egyptian-gold hover:bg-egyptian-blue font-semibold px-8"
            >
              <Icon name="MessageSquare" className="w-5 h-5 mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
