import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const steps = [
  {
    id: 1,
    title: "Выберите тур",
    description:
      "Ознакомьтесь с нашими предложениями и выберите подходящий тур",
    icon: "MapPin",
  },
  {
    id: 2,
    title: "Свяжитесь с нами",
    description:
      "Позвоните или напишите нам для консультации и уточнения деталей",
    icon: "Phone",
  },
  {
    id: 3,
    title: "Оформите заявку",
    description: "Заполните заявку с указанием дат и количества участников",
    icon: "FileText",
  },
  {
    id: 4,
    title: "Наслаждайтесь путешествием",
    description:
      "Мы позаботимся обо всём остальном — просто наслаждайтесь Египтом!",
    icon: "Smile",
  },
];

const HowToOrderSection = () => {
  return (
    <section id="order" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-egyptian-dark mb-4">
            Как заказать тур
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Простой процесс бронирования — всего 4 шага до вашего незабываемого
            путешествия
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card
              key={step.id}
              className="text-center border-0 bg-egyptian-cream hover:bg-white transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="bg-egyptian-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={step.icon as any}
                    className="w-8 h-8 text-white"
                  />
                </div>

                <div className="bg-egyptian-gold text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {step.id}
                </div>

                <h3 className="font-montserrat font-semibold text-egyptian-dark mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-egyptian-gold p-8 rounded-2xl inline-block animate-scale-in">
            <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
              Готовы к приключению?
            </h3>
            <p className="text-egyptian-cream mb-6">
              Свяжитесь с нами прямо сейчас для консультации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-egyptian-dark hover:bg-egyptian-cream font-semibold"
              >
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Позвонить сейчас
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-egyptian-dark font-semibold"
              >
                <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrderSection;
