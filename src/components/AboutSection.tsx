import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-egyptian-dark mb-6">
              О компании
              <span className="block text-egyptian-gold">«ADELTOUR»</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Уже более 15 лет мы открываем для наших гостей удивительный мир
              Египта. Наша команда профессиональных гидов-египтологов и местных
              экспертов создаёт незабываемые путешествия, полные открытий и
              приключений.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Мы специализируемся на исторических турах, морских экскурсиях и
              сафари, предлагая как групповые, так и индивидуальные программы.
              Каждый маршрут тщательно продуман и адаптирован под интересы наших
              клиентов.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-egyptian-gold mb-2">
                  15+
                </div>
                <div className="text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-egyptian-gold mb-2">
                  10K+
                </div>
                <div className="text-gray-600">туристов</div>
              </div>
            </div>
          </div>

          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Card className="border-l-4 border-l-egyptian-gold">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-egyptian-gold p-3 rounded-full">
                    <Icon name="Award" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-egyptian-dark mb-2">
                      Профессиональные гиды
                    </h3>
                    <p className="text-gray-600">
                      Сертифицированные египтологи с глубокими знаниями истории
                      и культуры
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-egyptian-gold">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-egyptian-gold p-3 rounded-full">
                    <Icon name="Shield" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-egyptian-dark mb-2">
                      Безопасность превыше всего
                    </h3>
                    <p className="text-gray-600">
                      Полная страховка, опытные водители и постоянная связь с
                      группой
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-egyptian-gold">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-egyptian-gold p-3 rounded-full">
                    <Icon name="Heart" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-egyptian-dark mb-2">
                      Индивидуальный подход
                    </h3>
                    <p className="text-gray-600">
                      Каждый тур адаптируется под ваши интересы и предпочтения
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
