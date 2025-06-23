import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const tours = [
  {
    id: 1,
    title: "Исторические групповые туры",
    description: "Пирамиды Гизы, храмы Луксора, Долина царей",
    price: "от 45,000 ₽",
    duration: "7 дней",
    group: "Группа до 15 человек",
    image: "🏛️",
    features: [
      "Экскурсовод-египтолог",
      "Все музеи включены",
      "Комфортабельный автобус",
    ],
  },
  {
    id: 2,
    title: "Индивидуальные исторические туры",
    description: "Персональный маршрут по древним памятникам",
    price: "от 85,000 ₽",
    duration: "5-10 дней",
    group: "Индивидуально",
    image: "👑",
    features: ["Личный гид", "Гибкий график", "VIP доступ"],
  },
  {
    id: 3,
    title: "Морские экскурсии и дайвинг",
    description: "Красное море, коралловые рифы, подводный мир",
    price: "от 35,000 ₽",
    duration: "5 дней",
    group: "Группа до 12 человек",
    image: "🏊‍♂️",
    features: [
      "Дайвинг оборудование",
      "Опытные инструкторы",
      "Морские прогулки",
    ],
  },
  {
    id: 4,
    title: "Сафари по пустыне",
    description: "Приключения в Сахаре, бедуинские деревни, оазисы",
    price: "от 28,000 ₽",
    duration: "3 дня",
    group: "Группа до 10 человек",
    image: "🐪",
    features: ["Джип-сафари", "Ночёвка в пустыне", "Национальная кухня"],
  },
];

const ToursSection = () => {
  return (
    <section id="tours" className="py-20 bg-egyptian-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-egyptian-dark mb-4">
            Популярные туры
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Выберите идеальное приключение из наших тщательно разработанных
            туристических программ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <Card
              key={tour.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tour.image}
                </div>
                <CardTitle className="text-xl font-montserrat font-bold text-egyptian-dark">
                  {tour.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {tour.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" className="w-4 h-4" />
                    <span className="text-xs">{tour.group}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {tour.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <Icon
                        name="Check"
                        className="w-4 h-4 text-egyptian-gold"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-2xl font-montserrat font-bold text-egyptian-gold">
                  {tour.price}
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-egyptian-gold hover:bg-egyptian-sand text-egyptian-dark font-semibold">
                  Подробнее
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
