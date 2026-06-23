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
  'https://cdn.poehali.dev/projects/64724dd3-da37-48fa-9db4-5b04b16664dd/bucket/a98ac39c-92ef-46ff-b5ea-b9db4f7a0394.jpg';

const WEBINAR_DATE = new Date('2026-08-19T19:00:00');
const SALE_DATE = '19 августа';

const pains = [
  'Работаете с обоими препаратами, но боитесь их комбинировать?',
  'Хотите понимать физику и химию глубже, чем написано в инструкции?',
  'Ищете пролонгированный результат, а не скидки и шаблоны «накачки»?',
  'Устали от выбора «только ПМК» или «только ГА» — хотите работать всем арсеналом?',
];

const credentials = [
  { icon: 'Award', text: 'Врач-дерматолог, косметолог — стаж 15 лет' },
  { icon: 'Globe', text: 'Спикер IMCAS, AMWC, ICCE, COSCON INDIA, SCIENTEX Dubai' },
  { icon: 'GraduationCap', text: 'Тренер инъекционных методик международной компании' },
  { icon: 'BookOpen', text: 'Член МООСБТ и АРЭМ. Автор статей ВАК' },
  { icon: 'Star', text: 'Победитель «Амбассадоры, спикер под ключ»' },
  { icon: 'Building2', text: 'Основатель клиники El.Beauty.Clinic' },
];

const program = [
  {
    n: 'АКТ I',
    title: 'Дуэль — Сравнительная анатомия',
    text: 'Реология и физика гелей: почему ГА даёт объём мгновенно, а ПМК «включается» через месяц — разбор на УЗИ-снимках. Механизм неоколлагенеза: TLR (ПМК) vs остеоиндукция (ГА). Алгоритм выбора от Элоны по зонам: скулы, нижняя треть, шея, кисти.',
  },
  {
    n: 'АКТ II',
    title: 'Дуэт — Синергия',
    text: 'Комбо-протоколы «в один день»: как Элона избегает отёков и узелков. Техника «Сэндвич»: ГА глубоко на надкостницу (каркас) + ПМК в средние слои (текстура). Тайминг для результата 24+ месяцев — график повторных явок.',
  },
  {
    n: 'АКТ III',
    title: 'Осложнения — Самое ценное',
    text: 'Гранулёмы vs гиперкоррекция: реальные кейсы Элоны с фото ДО и ПОСЛЕ лечения. Работа с тонкой кожей: как не получить «рябь» при ГА и не перестимулировать ПМК. Чек-лист «Красные флаги» — когда комбинация противопоказана.',
  },
  {
    n: 'БОНУС',
    title: 'Разбор ваших клинических случаев',
    text: 'Элона выберет 3 сложных случая из присланных участниками и разберёт их в прямом эфире. Напишите при регистрации свой кейс с комбинацией ПМК и ГА — получите персональную рекомендацию от международного эксперта.',
  },
];

const cases = [
  { age: '55+', title: 'Протокол «Ревитализация»', text: 'Радиесс + ПМК — убран птоз, восстановлен овал лица.', img: 'https://cdn.poehali.dev/projects/64724dd3-da37-48fa-9db4-5b04b16664dd/bucket/bec84702-cec2-4cbf-bf8f-f97053d14520.JPG' },
  { age: '35+', title: 'Протокол «Био-армирование»', text: 'Сформированы скулы, убрана носогубная складка.', img: 'https://cdn.poehali.dev/projects/64724dd3-da37-48fa-9db4-5b04b16664dd/bucket/7ce0517a-217b-4ff9-a1e5-8e2e2c32985f.JPG' },
  { age: '40+', title: 'Курс ПМК (3 процедуры)', text: 'Улучшение тургора и цвета кожи, эффект сияния.', img: 'https://cdn.poehali.dev/projects/64724dd3-da37-48fa-9db4-5b04b16664dd/bucket/285a8f6b-4eb5-4b46-8416-30162f381db9.JPG' },
];

const bonuses = [
  { icon: 'FileText', title: 'PDF-схема «Сравнительная таблица ПМК и ГА»', sub: 'Глубины, дозировки, сроки — от Элоны Габуевой' },
  { icon: 'MessageCircle', title: 'Вопрос лично Элоне в прямом эфире', sub: 'Задайте свой клинический вопрос спикеру' },
  { icon: 'PlayCircle', title: 'Запись вебинара и презентация', sub: 'Остаётся у вас навсегда' },
];

const included = [
  'Доступ к прямому эфиру',
  'Запись вебинара и презентация в подарок',
  '3 рабочих протокола комбинации 40+, 50+, 60+',
  'Точные дозировки на каждую зону в мл',
  'Чек-лист «Ошибки позиционирования»',
];

const faq = [
  { q: 'Кому подходит этот вебинар?', a: 'Врачам-косметологам, которые уже работают с ПМК или гидроксиапатитом кальция и хотят освоить их грамотную комбинацию в клинической практике.' },
  { q: 'Что если не успею на эфир?', a: 'Вы получите запись вебинара и презентацию. Сможете изучить материал в удобное время.' },
  { q: 'Элона разберёт мой кейс?', a: 'При регистрации напишите кратко свой сложный случай с комбинацией ПМК и ГА. Элона выберет 3 кейса для разбора в прямом эфире и даст персональную рекомендацию.' },
  { q: 'Нужно ли покупать препараты?', a: 'Нет. Вебинар посвящён клинической логике и протоколам — теория, кейсы, разбор УЗИ-снимков. Никаких затрат на материалы.' },
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
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-[130px] animate-float-glow pointer-events-none" style={{background: 'hsl(220 80% 40% / 0.18)'}} />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[120px] animate-float-glow pointer-events-none" style={{background: 'hsl(43 74% 56% / 0.12)'}} />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-up">
            <Eyebrow>Онлайн-вебинар · Элона Габуева</Eyebrow>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08]">
              Дуэль или Дуэт?<br />
              <span className="gold-text-gradient">Полимолочная кислота</span><br />
              и гидроксиапатит кальция
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/90 font-light max-w-lg">
              Разбираем клинические сценарии, чтобы превратить конкуренцию в сотрудничество.
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
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-900/60 via-transparent to-gold/20 blur-2xl" />
            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-b from-gold/40 via-gold/10 to-blue-900/60" />
            <div className="relative rounded-[2rem] overflow-hidden border border-gold/30" style={{boxShadow: '0 0 0 1px hsl(220 80% 30% / 0.5), 0 24px 60px -12px hsl(220 80% 10% / 0.8), 0 0 40px -8px hsl(43 74% 56% / 0.3)'}}>
              <img src={SPEAKER_IMG} alt="Элона Габуева" className="w-full h-full object-cover object-top aspect-[4/5]" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, hsl(220 47% 8% / 0.1) 0%, transparent 40%, hsl(222 47% 5% / 0.85) 100%)'}} />
              <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, hsl(220 80% 40% / 0.12) 0%, transparent 60%)'}} />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl font-semibold">Элона Габуева</p>
                <p className="text-sm text-muted-foreground mt-1">Врач-косметолог · Эксперт по инъекциям</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL ADDRESS */}
      <Section className="border-t border-border/50 bg-card/40">
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 sm:p-10 rounded-2xl border border-gold/20" style={{background: 'linear-gradient(135deg, hsl(220 40% 8% / 0.8), hsl(222 47% 5% / 0.95))'}}>
            <div className="absolute top-6 left-8 font-display text-7xl text-gold/15 leading-none select-none">"</div>
            <p className="text-lg sm:text-xl font-display font-semibold text-foreground mb-6 relative">
              15 лет я была на поле боя. Теперь я знаю, как остановить войну между препаратами.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              За плечами — тысячи инъекций, сотни осложнений, превращённых в опыт, и десятки международных конгрессов. Везде я видела одно: врачи делятся на два лагеря. «Я работаю ТОЛЬКО на ПМК» или «ТОЛЬКО на гидроксиапатите».
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Но пациенту всё равно, как называется молекула. Ему важен результат. На этом вебинаре я сниму халат тренера и надену халат практикующего врача. Разберём реальные клинические сценарии. Без рекламы брендов. Только биология, анатомия и мой опыт.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                <Icon name="User" size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Элона Габуева</p>
                <p className="text-sm text-muted-foreground">Врач-дерматолог, косметолог · 15 лет практики</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PAINS */}
      <Section className="border-t border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Знакомо?</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Вы выбираете лагерь — <span className="gold-text-gradient">а пациент ждёт результат</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {pains.map((p) => (
            <div
              key={p}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/60 hover:border-gold/30 transition-colors"
            >
              <span className="shrink-0 w-10 h-10 rounded-full bg-pink/15 flex items-center justify-center">
                <Icon name="HelpCircle" size={18} className="text-pink" />
              </span>
              <p className="text-base text-foreground/90 pt-1.5">{p}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-xl font-display text-gold">
          На вебинаре Элона даст систему, а не гадание. КОГДА, КУДА и В КАКОЙ ПОСЛЕДОВАТЕЛЬНОСТИ — по реальным кейсам.
        </p>
      </Section>

      {/* SPEAKER */}
      <Section className="bg-card/40 border-y border-border/50">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-b from-gold/30 via-gold/10 to-blue-900/50" />
            <div className="relative rounded-[2rem] overflow-hidden border border-gold/30 max-w-md mx-auto lg:mx-0" style={{boxShadow: '0 0 0 1px hsl(220 80% 30% / 0.4), 0 24px 60px -12px hsl(220 80% 10% / 0.7), 0 0 40px -8px hsl(43 74% 56% / 0.25)'}}>
              <img src={SPEAKER_IMG} alt="Элона Габуева в клинике" className="w-full object-cover object-top aspect-square" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, hsl(220 80% 40% / 0.15) 0%, transparent 60%)'}} />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>О спикере</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Габуева Элона Тельмановна
            </h2>
            <p className="text-lg text-foreground/90 font-light leading-relaxed mb-3">
              Имя, которое звучит на ведущих мировых площадках эстетической медицины. Это не просто лектор — это врач, который сам создаёт протоколы, а не пересказывает инструкции.
            </p>
            <p className="text-base text-muted-foreground italic mb-8">
              «Я говорю не "как красиво написано в буклете", а "как это работает в реальной коже под моим ультразвуком"»
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((c) => (
                <div key={c.text} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/60">
                  <Icon name={c.icon} size={20} className="text-gold shrink-0" />
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
            4 клинических сценария <span className="gold-text-gradient">из практики Элоны</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Без рекламы брендов. Только биология, анатомия и 15-летний опыт</p>
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

      {/* RESULTS */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Что вы получите</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            4 результата после вебинара — <span className="gold-text-gradient">система вместо гаданий</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { n: '1', title: 'Система вместо гаданий', text: 'Разделите препараты не на «плохие/хорошие», а на зоны инъекций.' },
            { n: '2', title: '3 рабочих протокола комбинации', text: 'Для возрастов 40+, 50+, 60+ — от практикующего врача.' },
            { n: '3', title: 'Точные дозировки', text: 'В мл на каждую зону — без перебора и недовольных пациентов.' },
            { n: '4', title: 'Чек-лист «Ошибки позиционирования»', text: 'Как не сделать из дуэта дуэль с осложнениями.' },
          ].map((r) => (
            <div key={r.n} className="flex gap-5 p-7 rounded-2xl bg-card border border-border/60 hover:border-gold/30 transition-colors">
              <span className="font-display text-4xl font-bold gold-text-gradient shrink-0 leading-none">{r.n}</span>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section className="bg-card/40 border-y border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Отзывы коллег</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Что говорят <span className="gold-text-gradient">врачи об Элоне</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-card border border-border/60 hover:border-gold/30 transition-colors">
            <p className="text-foreground/90 leading-relaxed mb-6">«Я ездила на IMCAS специально послушать Элону. После её лекции я пересмотрела все протоколы по ПМК. Результаты улучшились на 30%.»</p>
            <p className="text-sm text-gold font-semibold">Врач-косметолог</p>
            <p className="text-xs text-muted-foreground">Стаж 10 лет</p>
          </div>
          <div className="p-8 rounded-2xl bg-card border border-border/60 hover:border-gold/30 transition-colors">
            <p className="text-foreground/90 leading-relaxed mb-6">«Элона — единственный тренер, кто говорит про осложнения открыто. Показывает свои ошибки и пути исправления. Это дорогого стоит.»</p>
            <p className="text-sm text-gold font-semibold">Врач-дерматовенеролог</p>
            <p className="text-xs text-muted-foreground">Стаж 7 лет</p>
          </div>
        </div>
      </Section>

      {/* BONUSES */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Бонусы сразу после регистрации</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Получите материалы <span className="gold-text-gradient">мгновенно</span>
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
                <span className="text-muted-foreground line-through text-2xl">150 000 ₽</span>
                <span className="px-3 py-1 rounded-full bg-pink/15 text-pink text-sm font-semibold">−90%</span>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-5xl font-bold gold-text-gradient">15 000 ₽</span>
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
            <h3 className="font-display text-2xl font-semibold mb-1">Занять место на вебинар</h3>
            <p className="text-sm text-muted-foreground mb-6">Заполните данные — пришлём доступ на email. Опишите ваш кейс — Элона разберёт 3 лучших в эфире</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Ваше имя" className="bg-secondary/60 border-border/60 h-12" />
              <Input placeholder="Телефон" type="tel" className="bg-secondary/60 border-border/60 h-12" />
              <Input placeholder="Email" type="email" className="bg-secondary/60 border-border/60 h-12" />
              <textarea
                placeholder="Ваш сложный случай с комбинацией ПМК и ГА (анонимно, необязательно)"
                className="w-full bg-secondary/60 border border-border/60 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-1 focus:ring-gold/50"
                rows={3}
              />
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
                Занять место на вебинар с Элоной
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

      {/* FINAL CTA */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/80 mb-5">Финал дуэли</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Когда дуэль заканчивается,<br />начинается <span className="gold-text-gradient">дуэт</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Под руководством Элоны Габуевой. Количество мест ограничено — Элона отвечает на вопросы только в живом эфире.
          </p>
          <Button
            onClick={scrollToForm}
            className="gold-gradient text-primary-foreground font-semibold text-lg px-10 py-7 rounded-xl gold-glow hover:opacity-90 hover:scale-[1.02] transition-all"
          >
            Занять место на вебинар с Элоной
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Увидимся на дуэте!</p>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-12 px-5 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div>
              <p className="font-display text-xl mb-1">Элона Габуева</p>
              <p className="text-sm text-muted-foreground">ПМК и гидроксиапатит кальция: клинические сценарии · 2026</p>
            </div>
            <div className="text-center md:text-right text-xs text-muted-foreground space-y-1">
              <p>ИП Габуева Элона Тельмановна</p>
              <p>ИНН 151606111555 · ОГРН 318774600614428</p>
              <a href="/oferta" className="inline-block mt-2 text-gold/70 hover:text-gold underline underline-offset-2 transition-colors">
                Публичная оферта
              </a>
            </div>
          </div>
        </div>
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