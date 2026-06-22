import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Countdown from '@/components/Countdown';

const SPEAKER_IMG =
  'https://cdn.poehali.dev/projects/64724dd3-da37-48fa-9db4-5b04b16664dd/bucket/b0e499a4-1375-4357-bf84-995d52616696.PNG';

const WEBINAR_DATE = new Date('2026-08-19T19:00:00');
const SALE_DATE = '19 августа';

const pains = [
  'Боитесь давать тяжёлые филлеры из-за риска отёков?',
  'Не знаете, как совместить ПМК и Радиесс в один день?',
  'Хотите повысить средний чек до 150 000 ₽ за процедуру?',
];

const credentials = [
  { icon: 'Award', text: 'Автор техники «Мягкая скула»' },
  { icon: 'BookOpen', text: 'Спикер международных конгрессов' },
  { icon: 'GraduationCap', text: 'Член EADV, тренер по Радиесс' },
  { icon: 'Activity', text: 'Стаж 12 лет, более 5000 протоколов' },
];

const program = [
  {
    n: '01',
    title: 'Биохимия красоты',
    text: 'Радиесс (CaHA) vs ПМК: синергия или антагонизм? Почему коллаген 1 и 3 типа запускается по-разному. Как не нарушить тканевой матрикс.',
  },
  {
    n: '02',
    title: 'Топ-5 авторских протоколов',
    text: '«Идеальный овал» (Радиесс в глубокие слои) + «Сияние» (ПМК поверхностно). Техника «Бустер-бэкинг» для век и декольте.',
  },
  {
    n: '03',
    title: 'Нейромодуляция мимических мышц',
    text: 'Как ботулотоксин усиливает эффект наполнителей на 70%. Авторский протокол «Скульптор».',
  },
  {
    n: '04',
    title: 'Осложнения и их коррекция',
    text: 'Пошаговый алгоритм при васкулярных нарушениях. Работа с гиалуронидазой и контурная пластика неудачных результатов.',
  },
];

const cases = [
  { age: '55+', title: 'Протокол «Ревитализация»', text: 'Радиесс + ПМК — убран птоз, восстановлен овал лица.', img: 'https://cdn.poehali.dev/projects/64724dd3-da37-48fa-9db4-5b04b16664dd/bucket/bec84702-cec2-4cbf-bf8f-f97053d14520.JPG' },
  { age: '35+', title: 'Протокол «Био-армирование»', text: 'Сформированы скулы, убрана носогубная складка.', img: 'https://cdn.poehali.dev/projects/64724dd3-da37-48fa-9db4-5b04b16664dd/bucket/7ce0517a-217b-4ff9-a1e5-8e2e2c32985f.JPG' },
  { age: '40+', title: 'Курс ПМК (3 процедуры)', text: 'Улучшение тургора и цвета кожи, эффект сияния.', img: '' },
];

const bonuses = [
  { icon: 'FileText', title: 'Гайд «10 ошибок при работе с ПМК»', sub: 'Чек-лист в PDF' },
  { icon: 'Table', title: 'Таблица совместимости Радиесс', sub: 'С анестетиками и нитями' },
  { icon: 'PlayCircle', title: 'Мини-курс «Анатомия средней зоны лица»', sub: 'Видеозапись, 20 минут' },
];

const included = [
  'Доступ к прямому эфиру',
  'Запись вебинара на 48 часов',
  'Презентация со слайдами',
  'Сертификат (4 балла НМО)',
];

const faq = [
  { q: 'Буду ли я видеть спикера?', a: 'Да, трансляция идёт с двух камер: общий план спикера и крупный план на препарат и зону работы.' },
  { q: 'Что если не успею на эфир?', a: 'Вы получите запись вебинара на 3 дня. Сможете пересмотреть материал в удобное время.' },
  { q: 'Нужно ли покупать препараты?', a: 'Нет. На вебинаре мы работаем на фантомах и анатомических схемах. Никаких затрат на материалы.' },
];

const Section = ({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`relative py-20 sm:py-28 px-5 ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.35em] text-gold/80 mb-5">
    {children}
  </span>
);

const Index = () => {
  const [agree, setAgree] = useState(false);

  const scrollToForm = () =>
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-5 pt-16 pb-28">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-gold/10 blur-[120px] animate-float-glow pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-pink/10 blur-[120px] animate-float-glow pointer-events-none" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-up">
            <Eyebrow>Онлайн-вебинар · Элона Габуева</Eyebrow>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08]">
              Вместо или вместе:<br />
              <span className="gold-text-gradient">полимолочная кислота</span><br />
              и гидроксиапатит кальция
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/90 font-light max-w-lg">
              Авторские протоколы врача Габуевой: нейромодуляция и пролонгированный лифтинг.
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-lg">
              Секреты работы с Радиесс и ПМК. Как уйти от шаблонов и делать «дорогую» работу с первых сеансов.
            </p>

            <div className="mt-9 inline-block">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                До старта вебинара осталось
              </p>
              <Countdown target={WEBINAR_DATE} />
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToForm}
                className="gold-gradient text-primary-foreground font-semibold text-base px-8 py-6 rounded-xl gold-glow hover:opacity-90 hover:scale-[1.02] transition-all"
              >
                <Icon name="Sparkles" size={18} className="mr-2" />
                Записаться на вебинар
              </Button>
            </div>


          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-gold/30 via-transparent to-pink/20 blur-xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-gold/20 gold-border-glow">
              <img src={SPEAKER_IMG} alt="Элона Габуева" className="w-full h-full object-cover object-top aspect-[4/5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl font-semibold">Элона Габуева</p>
                <p className="text-sm text-muted-foreground mt-1">Врач-косметолог · Эксперт по инъекциям</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAINS */}
      <Section className="border-t border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Знакомо?</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Устали от шаблонов? Ищете свою <span className="gold-text-gradient">«фишку»?</span>
          </h2>
        </div>
        <div className="grid gap-5 max-w-3xl mx-auto">
          {pains.map((p) => (
            <div
              key={p}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/60 hover:border-gold/30 transition-colors"
            >
              <span className="shrink-0 w-10 h-10 rounded-full bg-pink/15 flex items-center justify-center">
                <Icon name="X" size={18} className="text-pink" />
              </span>
              <p className="text-lg text-foreground/90 pt-1.5">{p}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-xl font-display text-gold">
          На вебинаре разберём 5 протоколов, которые решают эти задачи.
        </p>
      </Section>

      {/* SPEAKER */}
      <Section className="bg-card/40 border-y border-border/50">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden border border-gold/20 gold-border-glow max-w-md mx-auto lg:mx-0">
              <img src={SPEAKER_IMG} alt="Элона Габуева в клинике" className="w-full object-cover object-top aspect-square" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>О спикере</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Кто будет учить?
            </h2>
            <p className="text-lg text-foreground/90 font-light leading-relaxed">
              Врач-дерматовенеролог, косметолог. Эксперт по инъекционным методикам.
              Член EADV. Тренер по Радиесс и Ревитлайт.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {credentials.map((c) => (
                <div key={c.text} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/60">
                  <Icon name={c.icon} size={22} className="text-gold shrink-0" />
                  <span className="text-sm text-foreground/90">{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PROGRAM */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Программа</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Научный план вебинара: <span className="gold-text-gradient">120 минут практики</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {program.map((p) => (
            <div
              key={p.n}
              className="group relative p-8 rounded-2xl bg-card border border-border/60 hover:border-gold/40 transition-all overflow-hidden"
            >
              <span className="absolute -top-4 -right-2 font-display text-7xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors">
                {p.n}
              </span>
              <h3 className="font-display text-2xl font-semibold mb-3 relative">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CASES */}
      <Section className="bg-card/40 border-y border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Доказательства</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Живые результаты пациентов</h2>
        </div>
        <Carousel className="max-w-4xl mx-auto" opts={{ align: 'start', loop: true }}>
          <CarouselContent>
            {cases.map((c) => (
              <CarouselItem key={c.title} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-7 rounded-2xl bg-card border border-border/60 hover:border-gold/40 transition-colors">
                  {c.img ? (
                    <div className="relative rounded-xl overflow-hidden mb-5">
                      <img src={c.img} alt={c.title} className="w-full object-cover" />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      <div className="aspect-square rounded-lg bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-xs text-muted-foreground">ДО</div>
                      <div className="aspect-square rounded-lg bg-gradient-to-br from-gold/20 to-pink/10 flex items-center justify-center text-xs text-gold">ПОСЛЕ</div>
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-card border-gold/30 text-gold" />
          <CarouselNext className="bg-card border-gold/30 text-gold" />
        </Carousel>
      </Section>

      {/* BONUSES */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Подарки за регистрацию</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Забирай файлы на <span className="gold-text-gradient">25 000 ₽</span> в подарок
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((b) => (
            <div
              key={b.title}
              className="p-8 rounded-2xl bg-card border border-border/60 hover:border-gold/40 transition-all text-center hover:-translate-y-1"
            >
              <span className="inline-flex w-16 h-16 rounded-2xl gold-gradient items-center justify-center mb-5 gold-glow">
                <Icon name={b.icon} size={28} className="text-primary-foreground" />
              </span>
              <h3 className="font-display text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.sub}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICE + REGISTER */}
      <Section id="register" className="bg-card/40 border-y border-border/50">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Price */}
          <div>
            <Eyebrow>Стоимость</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
              Спеццена для первых <span className="gold-text-gradient">50 мест</span>
            </h2>
            <div className="p-8 rounded-2xl bg-card border border-gold/30 gold-border-glow">
              <div className="flex items-end gap-4 mb-1">
                <span className="text-muted-foreground line-through text-2xl">15 000 ₽</span>
                <span className="px-3 py-1 rounded-full bg-pink/15 text-pink text-sm font-semibold">−87%</span>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-5xl font-bold gold-text-gradient">1 990 ₽</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Цена действует до {SALE_DATE}</p>
              <ul className="space-y-3">
                {included.map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-gold shrink-0" />
                    <span className="text-foreground/90">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 rounded-2xl bg-card border border-border/60">
            <h3 className="font-display text-2xl font-semibold mb-1">Регистрация на вебинар</h3>
            <p className="text-sm text-muted-foreground mb-6">Заполните данные — пришлём доступ на email</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Ваше имя" className="bg-secondary/60 border-border/60 h-12" />
              <Input placeholder="Телефон" type="tel" className="bg-secondary/60 border-border/60 h-12" />
              <Input placeholder="Email" type="email" className="bg-secondary/60 border-border/60 h-12" />
              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox checked={agree} onCheckedChange={(v) => setAgree(Boolean(v))} className="mt-0.5" />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
                </span>
              </label>
              <Button
                type="submit"
                className="w-full gold-gradient text-primary-foreground font-semibold text-base py-6 rounded-xl gold-glow hover:opacity-90 transition-opacity"
              >
                Забронировать место со скидкой
              </Button>
            </form>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Вопросы</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Частые вопросы</h2>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faq.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/60 mb-3 rounded-xl bg-card border px-6">
              <AccordionTrigger className="font-display text-lg hover:text-gold hover:no-underline text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* FOOTER */}
      <footer className="py-12 px-5 border-t border-border/50 text-center">
        <p className="font-display text-xl mb-2">Элона Габуева</p>
        <p className="text-sm text-muted-foreground">Авторские протоколы Радиесс + ПМК · 2026</p>
      </footer>

      {/* STICKY BAR */}
      <div className="fixed bottom-0 inset-x-0 z-50 px-4 pb-4 pointer-events-none">
        <div className="max-w-4xl mx-auto pointer-events-auto">
          <div className="flex items-center justify-between gap-4 px-5 py-3.5 rounded-2xl bg-card/95 backdrop-blur-md border border-gold/30 gold-border-glow">
            <div className="flex items-center gap-3 min-w-0">
              <Icon name="Zap" size={20} className="text-gold shrink-0 animate-glow-pulse rounded-full" />
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">Осталось 50 мест по супер-цене</p>
                <div className="hidden sm:block">
                  <Countdown target={WEBINAR_DATE} compact />
                </div>
              </div>
            </div>
            <Button
              onClick={scrollToForm}
              className="gold-gradient text-primary-foreground font-semibold rounded-xl px-5 py-5 shrink-0 hover:opacity-90 transition-opacity"
            >
              Занять место
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;