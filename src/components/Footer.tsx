import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-egyptian-dark border-t border-egyptian-gold">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-egyptian-gold rounded-full flex items-center justify-center">
                <span className="text-egyptian-dark font-bold text-lg">🏺</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-egyptian-gold">
                ADELTOUR
              </h3>
            </div>
            <p className="text-egyptian-cream mb-4 max-w-md">
              Откройте для себя тайны Египта вместе с нами. Более 15 лет опыта в
              организации незабываемых путешествий по земле фараонов.
            </p>
            <div className="flex space-x-4">
              <div className="bg-egyptian-gold p-2 rounded-full">
                <Icon name="Phone" className="w-4 h-4 text-egyptian-dark" />
              </div>
              <div className="bg-egyptian-gold p-2 rounded-full">
                <Icon
                  name="MessageCircle"
                  className="w-4 h-4 text-egyptian-dark"
                />
              </div>
              <div className="bg-egyptian-gold p-2 rounded-full">
                <Icon name="Mail" className="w-4 h-4 text-egyptian-dark" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-egyptian-gold mb-4">
              Туры
            </h4>
            <ul className="space-y-2 text-egyptian-cream text-sm">
              <li>Исторические туры</li>
              <li>Морские экскурсии</li>
              <li>Сафари по пустыне</li>
              <li>Индивидуальные туры</li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-egyptian-gold mb-4">
              Информация
            </h4>
            <ul className="space-y-2 text-egyptian-cream text-sm">
              <li>О компании</li>
              <li>Отзывы</li>
              <li>Контакты</li>
              <li>Блог</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-egyptian-gold mt-8 pt-8 text-center">
          <p className="text-egyptian-cream text-sm">
            © 2024 ADELTOUR. Все права защищены. Лицензия туроператора РТО
            123456
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
