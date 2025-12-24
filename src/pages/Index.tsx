import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Ваша репутация работает<br />
              <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
                на вас 24/7
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Комплексное управление репутацией (ORM) от «ГурИнфо»: от массовых отзывов до полного контроля карточек в геосервисах. Повышаем доверие, скрываем негатив, генерируем заявки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-6 text-lg hover-scale">
                Сделать аудит репутации →
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg">
                Получить бонусный пакет
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Плохая репутация — это не просто негативные отзывы.
            </h2>
            <p className="text-2xl text-orange-400 font-semibold">Это упущенные деньги.</p>
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
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Мы не затыкаем дыры.<br />
              <span className="text-purple-400">Мы выстраиваем систему.</span>
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
            ].map((pillar, i) => {
              const characterImages = [
                "https://cdn.poehali.dev/projects/457e2a63-a35d-4d95-b05a-c6457cef758e/files/eda5dd43-c063-4016-a90c-15a725242699.jpg",
                "https://cdn.poehali.dev/projects/457e2a63-a35d-4d95-b05a-c6457cef758e/files/8312863f-889f-47ce-9d5d-7b4bcd9ad085.jpg",
                "https://cdn.poehali.dev/projects/457e2a63-a35d-4d95-b05a-c6457cef758e/files/58978c48-6206-4515-b2f0-0a9153b63538.jpg"
              ];
              return (
                <Card key={i} className="bg-slate-800/50 border-slate-700/50 p-8 md:p-12 hover-scale backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex flex-col items-center gap-4">
                      <div className={`text-8xl font-black bg-gradient-to-br ${pillar.gradient} bg-clip-text text-transparent opacity-20`}>
                        {pillar.number}
                      </div>
                      <img 
                        src={characterImages[i]} 
                        alt={`Этап ${pillar.number}`}
                        className="w-32 h-32 object-contain"
                      />
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
              );
            })}
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
            <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
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
            
            <div className="mt-12 p-6 bg-gradient-to-r from-purple-600/10 to-orange-600/10 border border-purple-500/30 rounded-lg">
              <p className="text-center text-xl text-white font-semibold">
                Мы работаем со всей цепочкой репутации клиента: от первого впечатления до повторной покупки
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
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
                popular: false
              },
              {
                period: "6 месяцев",
                discount: "15%",
                popular: true
              },
              {
                period: "12 месяцев",
                discount: "25%",
                popular: false
              }
            ].map((plan, i) => (
              <Card 
                key={i} 
                className={`relative p-8 backdrop-blur-sm ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-600/20 to-orange-600/20 border-purple-500 scale-105' 
                    : 'bg-slate-800/50 border-slate-700/50'
                } hover-scale`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full">
                    <span className="text-white text-sm font-bold">Популярный</span>
                  </div>
                )}
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold text-white">{plan.period}</h3>
                  <div className="py-8">
                    <div className="text-6xl font-black bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                      {plan.discount}
                    </div>
                    <div className="text-slate-400 mt-2">скидка</div>
                  </div>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600' 
                        : 'bg-slate-700 hover:bg-slate-600'
                    } text-white`}
                    size="lg"
                  >Получить план</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-slate-950">
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
                {[
                  {
                    icon: "Send",
                    label: "Стратег в Telegram",
                    value: "@NovikovReputation",
                    color: "text-blue-400"
                  },
                  {
                    icon: "MessageCircle",
                    label: "WhatsApp",
                    value: "+7 999 569-56-18",
                    color: "text-green-400"
                  },
                  {
                    icon: "Gift",
                    label: "Бонус для новых",
                    value: "@LK_Reputation_bot",
                    color: "text-purple-400"
                  }
                ].map((contact, i) => (
                  <div key={i} className="text-center space-y-3">
                    <Icon name={contact.icon} size={32} className={`${contact.color} mx-auto`} />
                    <div className="text-sm text-slate-400">{contact.label}</div>
                    <div className="text-lg font-semibold text-white">{contact.value}</div>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-12 py-6 text-lg mt-8 hover-scale"
              >
                Заказать комплексный аудит репутации →
              </Button>
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