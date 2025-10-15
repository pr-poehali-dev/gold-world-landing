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
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-primary/10 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/f1134b82-2183-492c-91c5-733281c0acb9/files/e68c5937-5177-41a7-aba4-31ef532c11f1.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}} />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-primary/30 shadow-2xl relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full animate-rotate-slow" />
              <Icon name="Gem" size={64} className="text-primary relative z-10" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground relative animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text text-transparent">ЗОЛОТОЙ МИР</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-heading mb-4 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent animate-fade-in" style={{animationDelay: '0.4s'}}>
            Полный цикл ювелирных услуг в Асбесте
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
            Ремонт, изготовление и продажа украшений — от вашей идеи до готового шедевра
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary via-primary/95 to-primary hover:from-primary/90 hover:via-primary/85 hover:to-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
              onClick={() => window.open('https://t.me/ZolotoAsbest', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
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
                className={`border-2 transition-all duration-300 hover:shadow-xl animate-scale-in relative overflow-hidden group ${
                  service.featured 
                    ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                    : 'border-border hover:border-primary/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative ${
                    service.featured ? 'bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10' : 'bg-gradient-to-br from-primary/20 via-primary/10 to-transparent'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full" />
                    <Icon name={service.icon} size={32} className="text-primary relative z-10" />
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

      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 via-primary/5 to-muted/30 relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-foreground">
            Каталоги украшений
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ознакомьтесь с нашими коллекциями — скачайте PDF-каталоги
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {catalogs.map((catalog, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 border-border hover:border-primary/50 relative overflow-hidden bg-gradient-to-br from-card via-primary/5 to-card"
              >
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-lg" />
                      <Icon name="FileText" size={28} className="text-primary relative z-10" />
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
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 via-primary/15 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon name={advantage.icon} size={36} className="text-primary relative z-10" />
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

      <section className="py-20 px-4 bg-gradient-to-b from-card via-primary/5 to-card relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-30" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-foreground">
            Цены на услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачное ценообразование — вы всегда знаете за что платите
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
              <CardContent className="p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-xl" />
                    <Icon name="Wrench" size={28} className="text-primary relative z-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Ремонт украшений</h3>
                    <p className="text-sm text-muted-foreground">Цены зависят от сложности работы</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Пайка изделий</span>
                    <span className="font-semibold text-foreground">от 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Замена замков</span>
                    <span className="font-semibold text-foreground">от 800 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Рихтовка кольца</span>
                    <span className="font-semibold text-foreground">от 300 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Полировка изделия</span>
                    <span className="font-semibold text-foreground">от 400 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Изменение размера кольца</span>
                    <span className="font-semibold text-foreground">от 600 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-primary/5 ring-2 ring-primary/20 transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
              <CardContent className="p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-xl" />
                    <Icon name="Sparkles" size={28} className="text-primary relative z-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Изготовление на заказ</h3>
                    <p className="text-sm text-muted-foreground">Индивидуальный расчёт по проекту</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Простое кольцо</span>
                    <span className="font-semibold text-foreground">от 15 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Кольцо с камнями</span>
                    <span className="font-semibold text-foreground">от 25 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Серьги</span>
                    <span className="font-semibold text-foreground">от 20 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Подвески</span>
                    <span className="font-semibold text-foreground">от 18 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Браслеты</span>
                    <span className="font-semibold text-foreground">от 30 000 ₽</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <Icon name="Info" size={16} className="inline mr-1 text-primary" />
                    Точная стоимость рассчитывается с учётом веса золота, камней и сложности работы
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
              <CardContent className="p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-xl" />
                    <Icon name="ShoppingBag" size={28} className="text-primary relative z-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Готовые украшения</h3>
                    <p className="text-sm text-muted-foreground">Цены на изделия из наличия</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Золотые кольца</span>
                    <span className="font-semibold text-foreground">от 10 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Золотые серьги</span>
                    <span className="font-semibold text-foreground">от 12 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Золотые цепи</span>
                    <span className="font-semibold text-foreground">от 15 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Золотые подвески</span>
                    <span className="font-semibold text-foreground">от 8 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Браслеты из золота</span>
                    <span className="font-semibold text-foreground">от 18 000 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
              <CardContent className="p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-xl" />
                    <Icon name="Gem" size={28} className="text-primary relative z-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Дополнительно</h3>
                    <p className="text-sm text-muted-foreground">Другие услуги</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Консультация мастера</span>
                    <span className="font-semibold text-foreground">Бесплатно</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Разработка эскиза</span>
                    <span className="font-semibold text-foreground">от 1 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Оценка изделия</span>
                    <span className="font-semibold text-foreground">от 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Выезд к клиенту</span>
                    <span className="font-semibold text-foreground">Договорная</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Срочный заказ</span>
                    <span className="font-semibold text-foreground">+30%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border-2 border-primary/20">
              <Icon name="BadgeCheck" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Гарантия честных цен</h3>
              <p className="text-muted-foreground leading-relaxed">
                Все цены обсуждаются до начала работы. Никаких скрытых платежей и неожиданных доплат. Вы всегда знаете точную стоимость заказа.
              </p>
            </div>
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
                <h3 className="text-2xl font-heading font-bold mb-2">Ювелирная студия "Золотой Мир"</h3>
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
                  «Золотой Мир» — ювелирная студия, где каждое украшение создаётся с душой и вниманием к деталям. 
                  Мы бережно воплощаем ваши идеи в золоте и бриллиантах, чтобы красота и память жили в каждом изделии.
                </p>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-2xl h-[500px] flex items-center justify-center border-2 border-border overflow-hidden">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=61.458536%2C57.009831&z=17&mode=whatshere&whatshere%5Bpoint%5D=61.458536%2C57.009831&whatshere%5Bzoom%5D=17&text=Свердловская%20область%2C%20город%20Асбест%2C%20проспект%20Ленина%2C%20дом%2010"
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
            © 2025 Золотой Мир. Все права защищены.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Сделано с любовью к золоту
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;