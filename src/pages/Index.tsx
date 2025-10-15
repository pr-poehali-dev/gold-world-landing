import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Wrench",
      title: "Ремонт украшений",
      description: "Пайка, замена замков, рихтовка, полировка — вернём вашим украшениям блеск и жизнь."
    },
    {
      icon: "Sparkles",
      title: "Изготовление на заказ",
      description: "Создаём ювелирные изделия из золота с бриллиантами на заказ — по фото, эскизу или вашей идее.",
      details: [
        "По вашему фото или эскизу",
        "Из нашего каталога готовых моделей",
        "Из вашего или нашего золота"
      ],
      featured: true
    },
    {
      icon: "ShoppingBag",
      title: "Продажа готовых украшений",
      description: "Кольца, серьги, подвесы и многое другое — классика и эксклюзив, созданные с теплом и любовью к золоту."
    }
  ];

  const advantages = [
    {
      icon: "Sparkles",
      title: "Более 30 лет в ювелирном деле",
      text: "Опыт и мастерство, проверенные временем"
    },
    {
      icon: "Hammer",
      title: "Профессиональные мастера",
      text: "Каждое изделие — результат ювелирной точности"
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход",
      text: "Слышим ваши желания и воплощаем идеи"
    },
    {
      icon: "BadgeCheck",
      title: "Честные цены",
      text: "Прозрачное ценообразование без скрытых платежей"
    }
  ];

  const catalogs = [
    { title: "Каталог юдис", size: "PDF" },
    { title: "Каталог ювелирная мода", size: "PDF" },
    { title: "Каталог санрайс", size: "PDF" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/f1134b82-2183-492c-91c5-733281c0acb9/files/e68c5937-5177-41a7-aba4-31ef532c11f1.jpg')] bg-cover bg-center opacity-5" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-primary/30 shadow-2xl">
              <Icon name="Gem" size={64} className="text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground">
            ЗОЛОТО МИР
          </h1>
          
          <p className="text-2xl md:text-3xl font-heading mb-4 text-primary">
            Полный цикл ювелирных услуг в Асбесте 🛠️💍
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Ремонт, изготовление и продажа украшений — от вашей идеи до готового шедевра
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://t.me/ZolotoAsbest', '_blank')}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Связаться в Telegram
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-medium rounded-full transition-all"
              onClick={() => window.open('https://yandex.ru/maps/?text=г.+Асбест+ул.+Проспект+Ленина+д.10', '_blank')}
            >
              <Icon name="MapPin" size={20} className="mr-2" />
              Найти на карте
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
                className={`border-2 transition-all duration-300 hover:shadow-xl animate-scale-in ${
                  service.featured 
                    ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                    : 'border-border hover:border-primary/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    service.featured ? 'bg-primary/20' : 'bg-primary/10'
                  }`}>
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.details && (
                    <div className="mt-6 space-y-2 text-left">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-foreground">
            📘 Каталоги украшений
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ознакомьтесь с нашими коллекциями — скачайте PDF-каталоги
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {catalogs.map((catalog, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 border-border hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name="FileText" size={28} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg mb-1">
                        {catalog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {catalog.size}
                      </p>
                    </div>
                    <Icon name="Download" size={22} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-8 text-foreground">
            Почему выбирают нас
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-16 italic max-w-3xl mx-auto">
            Мы не просто создаём украшения — мы сохраняем эмоции и воспоминания
          </p>
          
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
            Контакты и соцсети
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="text-center md:text-left mb-8">
                <h3 className="text-2xl font-heading font-bold mb-2">Ювелирная студия "Золото Мир"</h3>
                <p className="text-muted-foreground">г. Асбест, ул. Проспект Ленина д.10</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Асбест, ул. Проспект Ленина д.10
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary p-0 h-auto mt-2"
                    onClick={() => window.open('https://yandex.ru/maps/?text=г.+Асбест+ул.+Проспект+Ленина+д.10', '_blank')}
                  >
                    Проложить маршрут →
                  </Button>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="font-heading font-semibold text-lg mb-4">Мы в соцсетях</h3>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 rounded-full px-6"
                    onClick={() => window.open('https://t.me/ZolotoAsbest', '_blank')}
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-primary rounded-full px-6"
                    onClick={() => window.open('https://vk.com/zm_ekb', '_blank')}
                  >
                    <Icon name="Users" size={20} className="mr-2 text-primary" />
                    ВКонтакте
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-primary rounded-full px-6"
                    onClick={() => window.open('https://www.instagram.com/zolotomir', '_blank')}
                  >
                    <Icon name="Instagram" size={20} className="mr-2 text-primary" />
                    Instagram
                  </Button>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  «Золото Мир» — ювелирная студия, где каждое украшение создаётся с душой и вниманием к деталям. 
                  Мы бережно воплощаем ваши идеи в золоте и бриллиантах, чтобы красота и память жили в каждом изделии. 💍✨
                </p>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-2xl h-[500px] flex items-center justify-center border-2 border-border overflow-hidden">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=61.458801%2C57.009718&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzExNDIxNBJC0KDQvtGB0YHQuNGPLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCQ0YHQsdC10YHRgiIKDXSrNEIVoQtXQg%2C%2C&z=14"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'relative' }}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm opacity-80">
            © 2025 Золото Мир. Все права защищены.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Сделано с любовью к золоту 💛
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
