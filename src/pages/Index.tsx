import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/hd_crop_694beafe8f379.png"
              alt="ГурИнфо"
              className="h-16 w-auto object-contain"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-white/80 hover:text-white transition-colors">
              Тарифы
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">
              Контакты
            </button>
          </nav>

          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold">
            Связаться
          </Button>
        </div>
      </header>
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden pt-32 pb-32 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        {/* Background stars */}
        <div className="absolute inset-0 opacity-10">
          <Icon name="Star" className="absolute top-20 left-10 text-yellow-400" size={32} />
          <Icon name="Star" className="absolute top-40 right-20 text-yellow-400" size={24} />
          <Icon name="Star" className="absolute bottom-32 left-1/4 text-yellow-400" size={28} />
          <Icon name="Star" className="absolute top-60 right-1/3 text-yellow-400" size={20} />
          <Icon name="MessageSquareText" className="absolute top-1/3 left-1/3 text-purple-400" size={36} />
          <Icon name="ThumbsUp" className="absolute bottom-20 right-1/4 text-purple-400" size={32} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Ваша репутация работает<br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                на вас 24/7
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Комплексное управление репутацией (ORM) от «ГурИнфо»: от массовых отзывов до полного контроля карточек в геосервисах. Повышаем доверие, скрываем негатив, генерируем заявки.
            </p>

          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-slate-900/50 relative overflow-hidden">
        {/* Background reputation elements */}
        <div className="absolute inset-0 opacity-5">
          <Icon name="BadgeCheck" className="absolute top-10 left-10 text-green-400" size={48} />
          <Icon name="Star" className="absolute top-20 right-20 text-yellow-400" size={42} />
          <Icon name="TrendingUp" className="absolute bottom-20 left-1/4 text-green-400" size={50} />
          <Icon name="MessageSquareText" className="absolute bottom-10 right-1/3 text-blue-400" size={44} />
          <Icon name="ThumbsUp" className="absolute top-1/2 right-10 text-purple-400" size={46} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Плохая репутация — это не просто негативные отзывы
            </h2>
            <p className="text-2xl text-blue-400 font-semibold">Это упущенные деньги</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ShieldAlert",
                title: "Доверие",
                description: "Низкий рейтинг = недоверие 78% клиентов",
                color: "text-red-400"
              },
              {
                icon: "EyeOff",
                title: "Видимость",
                description: "Пустые карточки не ранжируются. Вы теряете позиции в поиске",
                color: "text-orange-400"
              },
              {
                icon: "TrendingDown",
                title: "Конверсия",
                description: "Нет продающих факторов = нет заявок, даже при трафике",
                color: "text-yellow-400"
              }
            ].map((item, i) => (
                <Card key={i} className="bg-slate-800/50 border-slate-700/50 p-8 hover-scale backdrop-blur-sm">
                  <Icon name={item.icon} size={48} className={`${item.color} mb-6`} />
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">{item.description}</p>
                </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Three Pillars */}
      <section id="services" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <Icon name="Star" className="absolute top-10 right-10 text-yellow-400" size={40} />
          <Icon name="Star" className="absolute bottom-20 left-20 text-yellow-400" size={36} />
          <Icon name="TrendingUp" className="absolute top-1/3 right-1/4 text-green-400" size={44} />
          <Icon name="Shield" className="absolute bottom-1/3 left-1/3 text-purple-400" size={40} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Мы не затыкаем дыры<br />
              <span className="text-purple-400">Мы выстраиваем систему</span>
            </h2>
            <p className="text-xl text-slate-300">Три кита комплексной репутации</p>
          </div>

          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "ФУНДАМЕНТ",
                subtitle: "Массовое ORM",
                headline: "Создаем поток живых, доверительных отзывов",
                description: "6000+ уникальных отзывов в месяц. Закрываем возражения, работаем на SEO, используем исполнителей из вашего города.",
                accent: "Это база для роста рейтинга и доверия",
                gradient: "from-purple-600 to-purple-800"
              },
              {
                number: "02",
                title: "КОНТРОЛЬ",
                subtitle: "Владение площадками",
                headline: "Берем под контроль ключевые точки контакта",
                description: "Настраиваем карточки в Яндекс.Картах и 2ГИС как продающие лендинги. SEO, фото, прайсы, контент. Модерация и ответы.",
                accent: "Превращаем карточку из визитки в продавца",
                gradient: "from-orange-500 to-orange-700"
              },
              {
                number: "03",
                title: "ДОМИНИРОВАНИЕ",
                subtitle: "Экспертность в нише",
                headline: "Утверждаем вас как лидера",
                description: "Ведение профилей на Яндекс.Еде/Delivery Club. Вывод в ТОП через рейтинг 4.8+, SEO-меню, акции и круглосуточную поддержку.",
                accent: "Репутация лидера = максимальные продажи",
                gradient: "from-purple-500 to-orange-500"
              }
            ].map((pillar, i) => (
              <Card key={i} className="bg-slate-800/50 border-slate-700/50 p-8 md:p-12 hover-scale backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className={`text-8xl font-black bg-gradient-to-br ${pillar.gradient} bg-clip-text text-transparent opacity-20`}>
                    {pillar.number}
                  </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-purple-400 uppercase tracking-wider">{pillar.title}</div>
                        <div className="text-lg text-slate-400">{pillar.subtitle}</div>
                      </div>
                      <h3 className="text-3xl font-bold text-white leading-tight">{pillar.headline}</h3>
                      <p className="text-slate-300 text-lg leading-relaxed">{pillar.description}</p>
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${pillar.gradient} rounded-lg`}>
                        <p className="text-white font-semibold">{pillar.accent}</p>
                      </div>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UTP - Synergy Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Мощь синергии
            </h2>
            <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              1 + 1 + 1 &gt; 3
            </p>
          </div>

          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-500/30 p-12 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <Icon name="MessageSquareText" size={40} className="text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Массовые отзывы</h4>
                <p className="text-slate-400">Повышают рейтинг и доверие</p>
              </div>
              
              <Icon name="ArrowRight" size={32} className="text-purple-400 hidden md:block" />
              
              <div className="flex-1 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-orange-600/20 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={40} className="text-orange-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Продающие карточки</h4>
                <p className="text-slate-400">Конвертируют доверие в заявки</p>
              </div>
              
              <Icon name="ArrowRight" size={32} className="text-orange-400 hidden md:block" />
              
              <div className="flex-1 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600/20 to-orange-600/20 rounded-full flex items-center justify-center">
                  <Icon name="Trophy" size={40} className="text-orange-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Лидерство в агрегаторах</h4>
                <p className="text-slate-400">Максимизируют прибыль</p>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-lg">
              <p className="text-center text-xl text-white font-semibold">
                Мы работаем со всей цепочкой репутации клиента: от первого впечатления до повторной покупки
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <Icon name="Trophy" className="absolute top-10 left-20 text-yellow-400" size={52} />
          <Icon name="Star" className="absolute top-1/3 right-10 text-yellow-400" size={40} />
          <Icon name="BadgePercent" className="absolute bottom-20 left-1/3 text-orange-400" size={48} />
          <Icon name="Sparkles" className="absolute bottom-10 right-20 text-purple-400" size={44} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Тарифы
            </h2>
            <p className="text-xl text-slate-300">Система лояльности: чем дольше работаем, тем больше скидка</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                period: "3 месяца",
                discount: "10%",
                price: "45 000 ₽",
                oldPrice: "50 000 ₽",
                popular: false,
                features: [
                  "Массовые отзывы",
                  "Продающие карточки",
                  "Лидерство в агрегаторах",
                  "Настройка и оптимизация карточек",
                  "Мониторинг репутации 24/7"
                ]
              },
              {
                period: "6 месяцев",
                discount: "15%",
                price: "85 000 ₽",
                oldPrice: "100 000 ₽",
                popular: true,
                features: [
                  "Массовые отзывы",
                  "Продающие карточки",
                  "Лидерство в агрегаторах",
                  "Настройка и оптимизация карточек",
                  "Мониторинг репутации 24/7",
                  "Работа с негативом"
                ]
              },
              {
                period: "12 месяцев",
                discount: "25%",
                price: "150 000 ₽",
                oldPrice: "200 000 ₽",
                popular: false,
                features: [
                  "Массовые отзывы",
                  "Продающие карточки",
                  "Лидерство в агрегаторах",
                  "Настройка и оптимизация карточек",
                  "Мониторинг репутации 24/7",
                  "Работа с негативом",
                  "Персональный менеджер"
                ]
              }
            ].map((plan, i) => (
              <Card 
                key={i} 
                className={`relative p-8 backdrop-blur-sm ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500 scale-105 shadow-2xl shadow-purple-500/20' 
                    : 'bg-slate-800/50 border-slate-700/50'
                } hover-scale overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg">
                    <span className="text-white text-sm font-bold">Популярный</span>
                  </div>
                )}
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold text-white">{plan.period}</h3>
                  <div className="py-6">
                    <div className="text-5xl font-black text-white">
                      {plan.price}
                    </div>
                    <div className="text-slate-400 mt-2 line-through text-lg">{plan.oldPrice}</div>
                    <div className="inline-block mt-3 px-4 py-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full">
                      <span className="text-green-400 font-bold">−{plan.discount} скидка</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 py-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-start gap-3 px-4">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex-shrink-0"></div>
                        <span className="text-slate-300 text-left">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => window.open('https://t.me/LK_Reputation_bot', '_blank')}
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/30' 
                        : 'bg-slate-700 hover:bg-slate-600'
                    } text-white`}
                    size="lg"
                  >Купить отзывы</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-slate-950 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <Icon name="Star" className="absolute top-20 left-10 text-yellow-400" size={50} />
          <Icon name="MessageSquareText" className="absolute bottom-20 right-10 text-blue-400" size={46} />
          <Icon name="BadgeCheck" className="absolute top-1/2 left-1/4 text-green-400" size={48} />
          <Icon name="TrendingUp" className="absolute bottom-1/3 right-1/4 text-green-400" size={44} />
        </div>
        <div className="max-w-5xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700/50 p-12 backdrop-blur-sm">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Готовы передать репутацию<br />
                <span className="text-purple-400">в руки профессионалов?</span>
              </h2>
              <p className="text-xl text-slate-300">
                Получите комплексный аудит и план управления репутацией
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <a 
                  href="https://t.me/NovikovReputation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center space-y-3 hover:scale-105 transition-transform cursor-pointer group"
                >
                  <Icon name="Send" size={32} className="text-blue-400 mx-auto group-hover:text-blue-300" />
                  <div className="text-sm text-slate-400">Стратег в Telegram</div>
                  <div className="text-lg font-semibold text-white group-hover:text-blue-300">@NovikovReputation</div>
                </a>
                
                <div className="text-center space-y-3">
                  <Icon name="Phone" size={32} className="text-green-400 mx-auto" />
                  <div className="text-sm text-slate-400">Телефон</div>
                  <a href="tel:+79995695618" className="text-lg font-semibold text-white hover:text-green-300">+7 999 569-56-18</a>
                </div>
                
                <a 
                  href="https://t.me/LK_Reputation_bot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center space-y-3 hover:scale-105 transition-transform cursor-pointer group"
                >
                  <Icon name="Bot" size={32} className="text-purple-400 mx-auto group-hover:text-purple-300" />
                  <div className="text-sm text-slate-400">Бот для новых клиентов</div>
                  <div className="text-lg font-semibold text-white group-hover:text-purple-300">@LK_Reputation_bot</div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button 
                  size="lg" 
                  onClick={() => window.open('https://t.me/GyrInfo', '_blank')}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg hover-scale shadow-lg shadow-purple-500/30"
                >
                  Связаться
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open('https://t.me/LK_Reputation_bot', '_blank')}
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg hover-scale"
                >
                  Получить бонусы
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>© 2024 ГурИнфо. Комплексное управление репутацией</p>
        </div>
      </footer>
    </div>
  );
}