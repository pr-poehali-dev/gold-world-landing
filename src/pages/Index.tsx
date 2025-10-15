import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Wrench",
      title: "Ремонт украшений",
      description: "Профессиональный ремонт изделий любой сложности"
    },
    {
      icon: "Sparkles",
      title: "Изготовление на заказ",
      description: "Создаём уникальные украшения из золота с бриллиантами по вашим эскизам, фото или из каталога"
    },
    {
      icon: "ShoppingBag",
      title: "Готовые изделия",
      description: "Коллекция авторских украшений в наличии"
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Опыт и мастерство",
      text: "Работаем с драгоценными металлами более 15 лет"
    },
    {
      icon: "Gem",
      title: "Собственное производство",
      text: "Полный цикл изготовления в нашей мастерской"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      text: "Используем только сертифицированные материалы"
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход",
      text: "Воплощаем самые смелые идеи наших клиентов"
    }
  ];

  const catalogs = [
    { title: "Кольца", size: "2.4 МБ" },
    { title: "Серьги", size: "3.1 МБ" },
    { title: "Браслеты", size: "2.8 МБ" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/f1134b82-2183-492c-91c5-733281c0acb9/files/e68c5937-5177-41a7-aba4-31ef532c11f1.jpg')] bg-cover bg-center opacity-5" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-primary/30">
              <Icon name="Gem" size={64} className="text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground">
            Золото Мир
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Ювелирная студия в Асбесте
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Создаём украшения, которые хранят ваши самые тёплые воспоминания
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-medium rounded-full transition-all"
            >
              <Icon name="MapPin" size={20} className="mr-2" />
              Показать на карте
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-foreground">
            Наши услуги
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-foreground">
            Каталоги украшений
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Скачайте наши каталоги в формате PDF
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {catalogs.map((catalog, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name="FileText" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg mb-1">
                        {catalog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        PDF • {catalog.size}
                      </p>
                    </div>
                    <Icon name="Download" size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-foreground">
            Почему выбирают нас
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Icon name={advantage.icon} size={36} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-foreground">
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Асбест, ул. Примерная, д. 1
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Телефон</h3>
                  <p className="text-muted-foreground">
                    +7 (900) 000-00-00
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 10:00 - 19:00<br />
                    Сб: 10:00 - 17:00<br />
                    Вс: выходной
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="font-heading font-semibold text-lg mb-4">Мы в соцсетях</h3>
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 rounded-full w-14 h-14 p-0"
                  >
                    <Icon name="Send" size={24} />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-primary rounded-full w-14 h-14 p-0"
                  >
                    <Icon name="Instagram" size={24} className="text-primary" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-primary rounded-full w-14 h-14 p-0"
                  >
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-2xl h-[400px] flex items-center justify-center border-2 border-border">
              <div className="text-center">
                <Icon name="Map" size={64} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Интерактивная карта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm opacity-80">
            © 2024 Золото Мир. Ювелирная студия в Асбесте
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
