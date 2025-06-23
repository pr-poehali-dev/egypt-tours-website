import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    name: "Анна Петрова",
    rating: 5,
    text: "Невероятное путешествие! Гид Ахмед рассказывал так увлекательно, что мы буквально переносились в эпоху фараонов. Организация на высшем уровне!",
    tour: "Исторический групповой тур",
    avatar: "👩‍🦰",
  },
  {
    id: 2,
    name: "Михаил Сидоров",
    rating: 5,
    text: "Дайвинг в Красном море превзошёл все ожидания! Коралловые рифы просто потрясающие. Инструкторы профессиональные, безопасно и незабываемо.",
    tour: "Морские экскурсии",
    avatar: "👨‍🦲",
  },
  {
    id: 3,
    name: "Елена Волкова",
    rating: 5,
    text: "Сафари по пустыне — это что-то космическое! Ночь под звёздами в бедуинском лагере останется в памяти навсегда. Спасибо за эмоции!",
    tour: "Сафари по пустыне",
    avatar: "👩‍🦱",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-egyptian-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-egyptian-dark mb-4">
            Отзывы наших туристов
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Истории людей, которые уже открыли для себя магию Египта вместе с
            нами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{review.avatar}</div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-egyptian-dark">
                      {review.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="w-4 h-4 text-egyptian-gold fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="text-sm text-egyptian-gold font-semibold">
                  {review.tour}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <Icon
                name="Star"
                className="w-5 h-5 text-egyptian-gold fill-current"
              />
              <span className="font-montserrat font-bold text-2xl text-egyptian-dark">
                4.9
              </span>
            </div>
            <div className="text-gray-600">
              <div className="font-semibold">Средний рейтинг</div>
              <div className="text-sm">Более 1000 отзывов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
